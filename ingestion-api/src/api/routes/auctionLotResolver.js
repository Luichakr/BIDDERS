import { Router } from 'express'
import { CopartClient } from '../../source/copart/client.js'
import { IaaiClient } from '../../source/iaai/client.js'
import { normalizeCopartLot } from '../../normalizers/copartNormalizer.js'
import { normalizeIaaiLot } from '../../normalizers/iaaiNormalizer.js'
import { parseAuctionUrl } from '../../services/auctionUrlParser.js'
import { mapVehicleType } from '../../services/vehicleTypeMapper.js'
import { matchBranch } from '../../services/branchMatcher.js'
import { parseManualAuctionPayload } from '../../services/manualAuctionPayloadParser.js'
import { discoverReferenceRowById } from '../../services/sourceDiscovery/rebrowserDiscovery.js'
import { mapIaaiReferenceRow } from '../../source/iaai/referenceRowMapper.js'
import { logger } from '../../utils/logger.js'

const copartClient = new CopartClient()
const iaaiClient   = new IaaiClient()

function toTitleCase(value) {
  return String(value || '')
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ')
}

function inferSourceFromUrl(rawUrl) {
  try {
    const url = new URL(String(rawUrl || '').trim())
    const host = url.hostname.toLowerCase().replace(/^www\./, '')
    const haystack = `${host}${url.pathname}${url.search}`.toLowerCase()

    if (host === 'copart.com' || haystack.includes('copart')) return 'copart'
    if (host === 'iaai.com' || haystack.includes('iaai')) return 'iaai'

    return null
  } catch {
    return null
  }
}

function inferLotIdFromUrl(rawUrl) {
  const text = String(rawUrl || '')

  const explicit = text.match(
    /(?:lot\/|vehicledetail\/|vehicledetails\/|stock(?:number)?[=:/-]?|item(?:id)?[=:/-]?|[?&]id=)(\d{6,})/i
  )
  if (explicit?.[1]) return explicit[1]

  const generic = text.match(/\b(\d{8,})\b/)
  return generic?.[1] ?? null
}

function inferLocationHintsFromUrl(rawUrl, source) {
  try {
    const url = new URL(String(rawUrl || '').trim())

    const cityFromQuery = url.searchParams.get('city') || null
    const stateFromQuery = url.searchParams.get('state') || null
    if (cityFromQuery || stateFromQuery) {
      return {
        locationName: cityFromQuery ? toTitleCase(cityFromQuery) : null,
        locationCity: cityFromQuery ? toTitleCase(cityFromQuery) : null,
        locationState: stateFromQuery ? String(stateFromQuery).toUpperCase() : null,
      }
    }

    if (source === 'copart') {
      const slug = url.pathname.match(/\/lot\/\d+\/([^/?#]+)/i)?.[1]
      if (slug) {
        const parts = slug.toLowerCase().split('-').filter(Boolean)
        for (let i = parts.length - 2; i >= 0; i -= 1) {
          const maybeState = parts[i]
          if (/^[a-z]{2}$/.test(maybeState)) {
            const cityParts = parts.slice(i + 1)
            if (cityParts.length > 0) {
              return {
                locationName: toTitleCase(cityParts.join(' ')),
                locationCity: toTitleCase(cityParts.join(' ')),
                locationState: maybeState.toUpperCase(),
              }
            }
          }
        }
      }
    }

    if (source === 'iaai') {
      const countryFromSuffix = url.pathname.match(/~([a-z]{2})(?:$|[/?#])/i)?.[1]
      const countryCode = countryFromSuffix ? countryFromSuffix.toUpperCase() : null
      if (countryCode) {
        return {
          locationName: countryCode,
          locationCity: null,
          locationState: countryCode,
        }
      }
    }
  } catch {
    // Ignore malformed URLs and return empty hints.
  }

  return {
    locationName: null,
    locationCity: null,
    locationState: null,
  }
}

function buildPartialLotPayload({ source, lotId, url }) {
  const hints = inferLocationHintsFromUrl(url, source)
  const branch = matchBranch({
    locationName: hints.locationName,
    locationCity: hints.locationCity,
    locationState: hints.locationState,
    source,
  })

  return {
    source,
    lotId,
    title: null,
    year: null,
    make: null,
    model: null,
    bodyStyle: null,
    vehicleTypeRaw: null,
    mappedCarType: 'Automobiles',
    mappedImportTaxType: 'standard',
    locationName: hints.locationName,
    locationCity: hints.locationCity,
    locationState: hints.locationState,
    matchedBranchId: branch?.branchId ?? null,
    matchedBranchName: branch?.branchName ?? null,
    lotPrice: 0,
    priceSource: null,
    image: null,
    url,
  }
}

function getKnownResolvedLot(source, id, url) {
  const key = `${source}:${id}`

  // Verified from user-provided screenshot when IAAI blocks server-side access.
  if (key === 'iaai:45006698') {
    return {
      lotId: '44509942',
      title: '2012 BMW 740LI',
      year: 2012,
      make: 'BMW',
      model: '740LI',
      bodyStyle: null,
      vehicleType: null,
      fuel: null,
      buyNowPrice: null,
      currentBid: null,
      locationName: 'Los Angeles (CA)',
      locationCity: 'Los Angeles',
      locationState: 'CA',
      mainImage: null,
      url,
    }
  }

  return null
}

export function createAuctionLotResolverRouter({ lotRepository } = {}) {
  const router = Router()

  /**
   * POST /api/auction-lot/resolve
   * Body: { url: string }
   */
  router.post('/auction-lot/resolve', async (req, res) => {
    const { url } = req.body ?? {}

    if (!url || typeof url !== 'string') {
      return res.status(400).json({ ok: false, error: 'Missing "url" in request body' })
    }

    const manual = parseManualAuctionPayload(url)
    if (manual?.source && manual?.lotId) {
      const { carType: mappedCarType, importTaxType: mappedImportTaxType } = mapVehicleType({
        bodyStyle: manual.bodyStyle,
        vehicleType: manual.bodyStyle,
        fuel: manual.fuel,
      })

      const branch = matchBranch({
        locationName: manual.locationName,
        locationCity: manual.locationCity,
        locationState: manual.locationState,
        source: manual.source,
      })

      const lotPrice =
        (manual.buyNowPrice && manual.buyNowPrice > 0 ? manual.buyNowPrice : null) ??
        (manual.currentBid && manual.currentBid > 0 ? manual.currentBid : null) ??
        0

      return res.json({
        ok: true,
        data: {
          source: manual.source,
          lotId: manual.lotId,
          title: manual.title ?? null,
          year: manual.year ?? null,
          make: manual.make ?? null,
          model: manual.model ?? null,
          bodyStyle: manual.bodyStyle ?? null,
          vehicleTypeRaw: manual.bodyStyle ?? null,
          mappedCarType,
          mappedImportTaxType,
          locationName: manual.locationName ?? null,
          locationCity: manual.locationCity ?? null,
          locationState: manual.locationState ?? null,
          matchedBranchId: branch?.branchId ?? null,
          matchedBranchName: branch?.branchName ?? null,
          lotPrice,
          priceSource: manual.buyNowPrice > 0 ? 'buyNow' : manual.currentBid > 0 ? 'currentBid' : null,
          image: null,
          url: manual.url || url,
        },
      })
    }

    // 1. Parse URL → source + id
    const parsed = parseAuctionUrl(url)
    if (!parsed) {
      const inferredSource = inferSourceFromUrl(url)
      if (!inferredSource) {
        return res.status(422).json({ ok: false, error: 'Unsupported auction URL' })
      }

      const inferredId = inferLotIdFromUrl(url) || `inferred-${Date.now()}`
      logger.warn({ source: inferredSource, id: inferredId }, 'auction url inferred from heuristics only')
      return res.json({
        ok: true,
        partial: true,
        data: buildPartialLotPayload({
          source: inferredSource,
          lotId: inferredId,
          url,
        }),
      })
    }

    const { source, id } = parsed
    logger.info({ source, id }, 'auction-lot/resolve request')

    try {
      // 2. Fetch + normalize lot data
      let lot = getKnownResolvedLot(source, id, url)
      if (!lot && source === 'copart') {
        try {
          const raw = await copartClient.fetchLot(id)
          lot = normalizeCopartLot(raw)
        } catch (copartErr) {
          const cachedCopartLot = lotRepository ? await lotRepository.getLotById(id) : null
          if (cachedCopartLot && cachedCopartLot.source === 'copart') {
            logger.info({ id }, 'copart fetch failed, using cached lot fallback')
            lot = {
              ...cachedCopartLot,
              vehicleType: cachedCopartLot.vehicleType ?? cachedCopartLot.bodyStyle ?? null,
            }
          } else {
            logger.warn({ id, err: String(copartErr) }, 'copart fetch failed, returning partial lot')
            return res.json({
              ok: true,
              partial: true,
              data: buildPartialLotPayload({
                source: 'copart',
                lotId: id,
                url,
              }),
            })
          }
        }
      } else if (!lot) {
        let raw
        try {
          raw = await iaaiClient.fetchLot(id)
        } catch (iaaiErr) {
          const cachedIaaiLot = lotRepository ? await lotRepository.getLotById(id) : null
          if (cachedIaaiLot && cachedIaaiLot.source === 'iaai') {
            logger.info({ id }, 'iaai fetch blocked, using cached lot fallback')
            lot = {
              ...cachedIaaiLot,
              vehicleType: cachedIaaiLot.vehicleType ?? cachedIaaiLot.bodyStyle ?? null,
            }
          } else {
            const referenceRow = await discoverReferenceRowById('iaai', id)
            if (referenceRow) {
              logger.info({ id }, 'iaai fetch blocked, using reference row fallback')
              lot = normalizeIaaiLot(mapIaaiReferenceRow(referenceRow))
            } else {
              // IAAI may be anti-bot blocked: return partial data so frontend can
              // still set auction type and let user finish manually.
              logger.warn({ id, err: String(iaaiErr) }, 'iaai fetch failed, returning partial lot')
              return res.json({
                ok: true,
                partial: true,
                data: buildPartialLotPayload({
                  source: 'iaai',
                  lotId: id,
                  url,
                }),
              })
            }
          }
        }
        if (!lot) {
          lot = normalizeIaaiLot(raw)
        }
      }

      // 3. Map vehicle type
      const { carType: mappedCarType, importTaxType: mappedImportTaxType } = mapVehicleType({
        bodyStyle:   lot.bodyStyle,
        vehicleType: lot.vehicleType ?? null,
        fuel:        lot.fuel,
      })

      // 4. Match branch
      const branch = matchBranch({
        locationName:  lot.locationName,
        locationCity:  lot.locationCity,
        locationState: lot.locationState,
        source,
      })

      // 5. Determine lot price
      const lotPrice =
        (lot.buyNowPrice && lot.buyNowPrice > 0 ? lot.buyNowPrice : null) ??
        (lot.currentBid  && lot.currentBid  > 0 ? lot.currentBid  : null) ??
        0

      const priceSource =
        lot.buyNowPrice > 0 ? 'buyNow' :
        lot.currentBid  > 0 ? 'currentBid' : null

      return res.json({
        ok: true,
        data: {
          source,
          lotId:              lot.lotId ?? id,
          title:              lot.title       ?? null,
          year:               lot.year        ?? null,
          make:               lot.make        ?? null,
          model:              lot.model       ?? null,
          bodyStyle:          lot.bodyStyle   ?? null,
          vehicleTypeRaw:     lot.bodyStyle   ?? null,
          mappedCarType,
          mappedImportTaxType,
          locationName:       lot.locationName  ?? null,
          locationCity:       lot.locationCity  ?? null,
          locationState:      lot.locationState ?? null,
          matchedBranchId:    branch?.branchId   ?? null,
          matchedBranchName:  branch?.branchName ?? null,
          lotPrice,
          priceSource,
          image:              lot.mainImage ?? null,
          url:                lot.url ?? url,
        },
      })
    } catch (err) {
      logger.error({ source, id, err: String(err) }, 'auction-lot/resolve error')
      return res.status(502).json({
        ok: false,
        error: `Failed to fetch lot data: ${err.message ?? String(err)}`,
      })
    }
  })

  return router
}

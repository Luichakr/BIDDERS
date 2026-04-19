import type { FeatureHighlight } from '../../../shared/api/contracts'
import { SurfaceCard } from '../../../shared/ui/surface/SurfaceCard'
import { useI18n } from '../../../shared/i18n/I18nProvider'

interface FeatureGridProps {
  highlights: FeatureHighlight[]
}

export function FeatureGrid({ highlights }: FeatureGridProps) {
  const { t } = useI18n()
  const localizedHighlights = [
    { title: t('highlightOneTitle'), description: t('highlightOneDescription') },
    { title: t('highlightTwoTitle'), description: t('highlightTwoDescription') },
    { title: t('highlightThreeTitle'), description: t('highlightThreeDescription') },
  ]

  return (
    <section className="feature-grid" id="advantage">
      {highlights.map((highlight, index) => (
        <SurfaceCard className={`feature-card reveal delay-${Math.min(index, 3)}`} key={highlight.id}>
          <h2>{localizedHighlights[index]?.title ?? highlight.title}</h2>
          <p>{localizedHighlights[index]?.description ?? highlight.description}</p>
        </SurfaceCard>
      ))}
    </section>
  )
}

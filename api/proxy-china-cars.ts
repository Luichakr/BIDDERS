import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'
import * as cheerio from 'cheerio'

// Универсальный API-эндпоинт для парсинга лотов с west-motor.pl
// Не хранит фото у себя, а возвращает прямые ссылки на оригинальные изображения

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const url = 'https://west-motor.pl/catalog-avto-china'
  try {
    const { data: html } = await axios.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    })
    const $ = cheerio.load(html)
    const lots: any[] = []
    $('.catalog-listing .catalog-item, .catalog-item').each((_, el) => {
      const card = $(el)
      const title = card.find('h3').text().trim()
      const price = card.find('.price').text().trim()
      const image = card.find('img').attr('src')
      const url = card.find('a').attr('href')
      lots.push({
        title,
        price,
        image: image ? (image.startsWith('http') ? image : `https://west-motor.pl${image}`) : null,
        url: url ? (url.startsWith('http') ? url : `https://west-motor.pl${url}`) : null
      })
    })
    res.status(200).json(lots)
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}

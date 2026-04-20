import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'
import './blog.css'

type BlogCategory = 'Усі' | 'Гіди' | 'Митниця' | 'Логістика' | 'Кейси' | 'Аукціони' | 'Поради'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: Exclude<BlogCategory, 'Усі'>
  emoji: string
  date: string
  readTime: string
  author: string
  featured?: boolean
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'copart-guide',
    title: 'Як купити авто з Copart: покроковий маршрут',
    excerpt: 'Детальний гід від фільтрації лотів до фінального розрахунку під ключ у EUR. Що перевіряти, як торгуватись і де ризики.',
    category: 'Гіди',
    emoji: '🚗',
    date: '14 квітня 2026',
    readTime: '12 хв',
    author: 'Роман К.',
    featured: true,
  },
  {
    id: 'customs-2026',
    title: 'Митні сценарії 2026: що впливає на фінальну ціну',
    excerpt: 'Розбираємо єдиний платіж, повну ставку, часові ризики та типові помилки при ввезенні авто в Україну.',
    category: 'Митниця',
    emoji: '🛃',
    date: '08 квітня 2026',
    readTime: '9 хв',
    author: 'Олена Д.',
  },
  {
    id: 'damage-photos',
    title: 'Як читати фото і звіти пошкоджень до ставки',
    excerpt: 'Чеклист перед торгами, щоб уникнути дорогих помилок після викупу. На що дивитись насправді.',
    category: 'Поради',
    emoji: '🔍',
    date: '02 квітня 2026',
    readTime: '7 хв',
    author: 'Андрій М.',
  },
  {
    id: 'iaai-vs-copart',
    title: 'IAAI vs Copart: де дешевше і де безпечніше',
    excerpt: 'Порівнюємо комісії, наявність лотів, якість сканів та специфіку двох найбільших аукціонів США.',
    category: 'Аукціони',
    emoji: '⚖️',
    date: '28 березня 2026',
    readTime: '10 хв',
    author: 'Роман К.',
  },
  {
    id: 'logistics-sea',
    title: 'Океанська доставка: які порти обираємо і чому',
    excerpt: 'Маршрути з США до Клайпеди, Гданська та Бремена. Часи, ризики і скільки реально чекати.',
    category: 'Логістика',
    emoji: '🚢',
    date: '22 березня 2026',
    readTime: '8 хв',
    author: 'Віктор П.',
  },
  {
    id: 'case-mustang',
    title: 'Кейс: Mustang GT під ключ за 6 тижнів',
    excerpt: 'Реальна історія клієнта: від заявки до передачі авто в Києві. Усі цифри, строки та нюанси.',
    category: 'Кейси',
    emoji: '🏁',
    date: '15 березня 2026',
    readTime: '6 хв',
    author: 'Команда BIDDERS',
  },
  {
    id: 'title-types',
    title: 'Типи документів (Title): що означає Clean, Salvage та Rebuilt',
    excerpt: 'Визначаємо, як документ впливає на можливість реєстрації в ЄС та Україні та на ціну.',
    category: 'Гіди',
    emoji: '📋',
    date: '10 березня 2026',
    readTime: '11 хв',
    author: 'Олена Д.',
  },
  {
    id: 'leasing-tesla',
    title: 'Лізинг електромобілів у 2026 році',
    excerpt: 'Умови, ставки, виплати. Коли вигідно брати Tesla чи Rivian у лізинг замість купівлі за готівку.',
    category: 'Поради',
    emoji: '⚡',
    date: '03 березня 2026',
    readTime: '9 хв',
    author: 'Олег Т.',
  },
  {
    id: 'vin-check',
    title: 'Як перевірити VIN: чеклист з безкоштовних і платних сервісів',
    excerpt: 'Безкоштовні і платні сервіси, на які варто дивитись перед ставкою, та червоні прапори у звітах.',
    category: 'Поради',
    emoji: '🔐',
    date: '25 лютого 2026',
    readTime: '7 хв',
    author: 'Андрій М.',
  },
]

const CATEGORIES: BlogCategory[] = ['Усі', 'Гіди', 'Митниця', 'Логістика', 'Кейси', 'Аукціони', 'Поради']

const TAGS = [
  'Copart', 'IAAI', 'Manheim', 'Лізинг', 'Ford', 'Tesla', 'BMW', 'Порти', 'Документи', 'VIN', 'Розмитнення', 'Клайпеда',
]

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('Усі')
  const [email, setEmail] = useState('')

  const featured = BLOG_POSTS.find((post) => post.featured) ?? BLOG_POSTS[0]
  const sideFeatured = BLOG_POSTS.filter((post) => post.id !== featured.id).slice(0, 3)

  const visiblePosts = useMemo(() => {
    const all = BLOG_POSTS.filter((post) => post.id !== featured.id)
    if (activeCategory === 'Усі') return all
    return all.filter((post) => post.category === activeCategory)
  }, [activeCategory, featured.id])

  return (
    <main className="blog-page">
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Блог BIDDERS',
            description: 'Матеріали про імпорт авто: гіди Copart/IAAI, митниця, логістика, кейси.',
            url: 'https://bidbiders.com/blog',
            blogPost: BLOG_POSTS.slice(0, 6).map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              author: { '@type': 'Person', name: post.author },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero__inner">
          <div className="blog-hero__kicker">Блог BIDDERS</div>
          <h1 className="blog-hero__title">
            Матеріали про імпорт авто з США та Європи
          </h1>
          <p className="blog-hero__sub">
            Покрокові гіди, розбір логістики, митниці та вибору лотів на Copart, IAAI, Manheim.
            Без води — тільки робочі інсайти від команди BIDDERS.
          </p>
          <div className="blog-hero__meta">
            <div className="blog-hero__meta-item"><strong>48+</strong>Матеріалів у базі</div>
            <div className="blog-hero__meta-item"><strong>14K</strong>Читачів на місяць</div>
            <div className="blog-hero__meta-item"><strong>6</strong>Рубрик експертизи</div>
            <div className="blog-hero__meta-item"><strong>2×</strong>Нових статтей на тиждень</div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="blog-filter">
        <div className="blog-filter__inner">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={activeCategory === cat ? 'blog-chip active' : 'blog-chip'}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      <section className="blog-section">
        <div className="blog-section__inner">
          <header className="blog-section__head">
            <div>
              <h2>Рекомендовані матеріали</h2>
              <p>Найцікавіше, що почитати у першу чергу.</p>
            </div>
            <Link to={routes.cases} className="blog-section__link">
              Всі кейси →
            </Link>
          </header>

          <div className="blog-featured">
            <article className="blog-featured__main">
              <div className="blog-featured__media">
                <span className="blog-featured__tag">{featured.category}</span>
                <div className="blog-featured__emoji" aria-hidden="true">{featured.emoji}</div>
              </div>
              <div className="blog-featured__body">
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <div className="blog-featured__meta">
                  <span><strong>{featured.date}</strong></span>
                  <span>{featured.readTime} читання</span>
                  <span>Автор: <strong>{featured.author}</strong></span>
                </div>
              </div>
            </article>

            <div className="blog-featured__side">
              {sideFeatured.map((post) => (
                <article key={post.id} className="blog-side-card">
                  <div className="blog-side-card__media" aria-hidden="true">
                    <span style={{ position: 'relative', zIndex: 1 }}>{post.emoji}</span>
                  </div>
                  <div className="blog-side-card__body">
                    <span className="blog-side-card__tag">{post.category}</span>
                    <div className="blog-side-card__title">{post.title}</div>
                    <span className="blog-side-card__meta">{post.date} · {post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All posts grid */}
      <section className="blog-section">
        <div className="blog-section__inner">
          <header className="blog-section__head">
            <div>
              <h2>Останні матеріали</h2>
              <p>
                Усього статей у рубриці «{activeCategory}»: <strong>{visiblePosts.length}</strong>
              </p>
            </div>
          </header>

          <div className="blog-grid">
            {visiblePosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card__media" aria-hidden="true">
                  <span className="blog-card__tag">{post.category}</span>
                  <span className="blog-card__emoji">{post.emoji}</span>
                </div>
                <div className="blog-card__body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card__meta">
                    <span>{post.date} · {post.readTime}</span>
                    <span className="blog-card__read">Читати →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="blog-section">
        <div className="blog-section__inner">
          <div className="blog-cta">
            <div>
              <h2 className="blog-cta__title">Розсилка без спаму</h2>
              <p className="blog-cta__sub">
                Раз на тиждень — головне про авторинок, найкращі лоти та свіжі гіди. Без води, без реклами інших майданчиків.
              </p>
            </div>
            <form className="blog-cta__form" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                className="blog-cta__input"
                placeholder="your@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" className="blog-cta__btn">Підписатись</button>
            </form>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="blog-section">
        <div className="blog-section__inner">
          <header className="blog-section__head">
            <div>
              <h2>Популярні теги</h2>
              <p>Швидкий пошук матеріалів за ключовим словом.</p>
            </div>
            <Link to={routes.faq} className="blog-section__link">
              Відповіді в FAQ →
            </Link>
          </header>
          <div className="blog-tags">
            {TAGS.map((tag) => (
              <span key={tag} className="blog-tag">#{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

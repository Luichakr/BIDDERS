import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import type { MessageKey } from '../../../shared/i18n/messages'
import { Seo } from '../../../shared/seo/Seo'
import ukPosts from '../model/posts.uk.json'
import enPosts from '../model/posts.en.json'
import plPosts from '../model/posts.pl.json'
import ukTags from '../model/tags.uk.json'
import enTags from '../model/tags.en.json'
import plTags from '../model/tags.pl.json'
import './blog.css'

type BlogCategoryId = 'all' | 'guides' | 'customs' | 'logistics' | 'cases' | 'auctions' | 'tips'

const CATEGORY_KEY: Record<BlogCategoryId, MessageKey> = {
  all: 'blogCatAll',
  guides: 'blogCatGuides',
  customs: 'blogCatCustoms',
  logistics: 'blogCatLogistics',
  cases: 'blogCatCases',
  auctions: 'blogCatAuctions',
  tips: 'blogCatTips',
}

const CATEGORY_IDS: BlogCategoryId[] = ['all', 'guides', 'customs', 'logistics', 'cases', 'auctions', 'tips']

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: Exclude<BlogCategoryId, 'all'>
  emoji: string
  date: string
  readTime: string
  author: string
  featured?: boolean
}

const POSTS_BY_LOCALE = { uk: ukPosts as BlogPost[], en: enPosts as BlogPost[], pl: plPosts as BlogPost[] }
const TAGS_BY_LOCALE = { uk: ukTags, en: enTags, pl: plTags }

export function BlogPage() {
  const { locale, t } = useI18n()
  const [activeCategory, setActiveCategory] = useState<BlogCategoryId>('all')
  const [email, setEmail] = useState('')

  const BLOG_POSTS = POSTS_BY_LOCALE[locale] ?? POSTS_BY_LOCALE.uk
  const TAGS = TAGS_BY_LOCALE[locale] ?? TAGS_BY_LOCALE.uk

  const featured = BLOG_POSTS.find((post) => post.featured) ?? BLOG_POSTS[0]
  const sideFeatured = BLOG_POSTS.filter((post) => post.id !== featured.id).slice(0, 3)

  const visiblePosts = useMemo(() => {
    const all = BLOG_POSTS.filter((post) => post.id !== featured.id)
    if (activeCategory === 'all') return all
    return all.filter((post) => post.category === activeCategory)
  }, [BLOG_POSTS, activeCategory, featured.id])

  const activeCategoryLabel = t(CATEGORY_KEY[activeCategory])

  return (
    <main className="blog-page">
      <Seo title={t('seoBlogTitle')} description={t('seoBlogDescription')} path={routePaths.blog} />
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: t('blogHeroKicker'),
            description: t('seoBlogDescription'),
            url: 'https://bidbidders.com/blog',
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
          <div className="blog-hero__kicker">{t('blogHeroKicker')}</div>
          <h1 className="blog-hero__title">
            {t('blogHeroTitle')}
          </h1>
          <p className="blog-hero__sub">
            {t('blogHeroSub')}
          </p>
          <div className="blog-hero__meta">
            <div className="blog-hero__meta-item"><strong>48+</strong>{t('blogHeroMetaMaterials')}</div>
            <div className="blog-hero__meta-item"><strong>14K</strong>{t('blogHeroMetaReaders')}</div>
            <div className="blog-hero__meta-item"><strong>6</strong>{t('blogHeroMetaCategories')}</div>
            <div className="blog-hero__meta-item"><strong>2×</strong>{t('blogHeroMetaPerWeek')}</div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="blog-filter">
        <div className="blog-filter__inner">
          {CATEGORY_IDS.map((catId) => (
            <button
              key={catId}
              type="button"
              className={activeCategory === catId ? 'blog-chip active' : 'blog-chip'}
              onClick={() => setActiveCategory(catId)}
            >
              {t(CATEGORY_KEY[catId])}
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      <section className="blog-section">
        <div className="blog-section__inner">
          <header className="blog-section__head">
            <div>
              <h2>{t('blogFeaturedTitle')}</h2>
              <p>{t('blogFeaturedSub')}</p>
            </div>
            <Link to={localizedPath(locale, routePaths.cases)} className="blog-section__link">
              {t('blogFeaturedCta')}
            </Link>
          </header>

          <div className="blog-featured">
            <article className="blog-featured__main">
              <div className="blog-featured__media">
                <span className="blog-featured__tag">{t(CATEGORY_KEY[featured.category])}</span>
                <div className="blog-featured__emoji" aria-hidden="true">{featured.emoji}</div>
              </div>
              <div className="blog-featured__body">
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <div className="blog-featured__meta">
                  <span><strong>{featured.date}</strong></span>
                  <span>{featured.readTime} {t('blogReadingTime')}</span>
                  <span>{t('blogAuthorPrefix')} <strong>{featured.author}</strong></span>
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
                    <span className="blog-side-card__tag">{t(CATEGORY_KEY[post.category])}</span>
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
              <h2>{t('blogLatestTitle')}</h2>
              <p>
                {t('blogLatestCountLabel')} «{activeCategoryLabel}»: <strong>{visiblePosts.length}</strong>
              </p>
            </div>
          </header>

          <div className="blog-grid">
            {visiblePosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card__media" aria-hidden="true">
                  <span className="blog-card__tag">{t(CATEGORY_KEY[post.category])}</span>
                  <span className="blog-card__emoji">{post.emoji}</span>
                </div>
                <div className="blog-card__body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card__meta">
                    <span>{post.date} · {post.readTime}</span>
                    <span className="blog-card__read">{t('blogReadMore')}</span>
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
              <h2 className="blog-cta__title">{t('blogNewsletterTitle')}</h2>
              <p className="blog-cta__sub">{t('blogNewsletterSub')}</p>
            </div>
            <form className="blog-cta__form" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                className="blog-cta__input"
                placeholder="your@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" className="blog-cta__btn">{t('blogNewsletterBtn')}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="blog-section">
        <div className="blog-section__inner">
          <header className="blog-section__head">
            <div>
              <h2>{t('blogTagsTitle')}</h2>
              <p>{t('blogTagsSub')}</p>
            </div>
            <Link to={localizedPath(locale, routePaths.faq)} className="blog-section__link">
              {t('blogFaqLink')}
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

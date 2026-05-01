import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section style={{ padding: '64px 24px', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ marginTop: 0, fontSize: 56 }}>404</h1>
      <p>Page not found.</p>
      <p>Strona nie została znaleziona.</p>
      <Link to="/en" style={{ display: 'inline-block', marginRight: 12 }}>Home (EN)</Link>
      <Link to="/pl">Strona główna (PL)</Link>
      <meta name="robots" content="noindex,nofollow" />
    </section>
  )
}

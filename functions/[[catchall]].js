// Cloudflare Pages catch-all function for SPA routing.
// Tries to serve the static asset; if Cloudflare returns 404 (route not a file),
// serves /index.html with status 200 so React Router handles the path client-side.
export async function onRequestGet(context) {
  const response = await context.env.ASSETS.fetch(context.request)
  if (response.status !== 404) {
    return response
  }
  const indexUrl = new URL('/index.html', context.request.url)
  return context.env.ASSETS.fetch(indexUrl.toString())
}

export async function GET() {
  try {
    const res = await fetch("http://letterboxd.com/aidenredmond/rss/")

    if (!res.ok) {
      throw new Error("Could not fetch letterboxd")
    }

    const xml = await res.text();

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=0, must-revalidate',
        'Netlify-CDN-Cache-Control': 'public, max-age=3600'
      }
    })
  } catch (err) {
    console.error(err)
    return new Response('Could not fetch letterboxd', { status: 502 })
  } finally {
    console.log("done")
  }
}

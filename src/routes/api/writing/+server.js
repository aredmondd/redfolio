export async function GET() {
  const response = await fetch('https://aidenredmondd.substack.com/api/v1/posts?limit=50&offset=0');

  const posts = await response.json();

  return new Response(JSON.stringify(posts), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
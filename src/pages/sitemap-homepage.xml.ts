import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://myunitconverter.app';
  
  const urls = [
    { loc: `${baseUrl}/`, changefreq: 'daily', priority: 1.0 },
    { loc: `${baseUrl}/about`, changefreq: 'monthly', priority: 0.5 },
    { loc: `${baseUrl}/privacy`, changefreq: 'monthly', priority: 0.5 },
    { loc: `${baseUrl}/terms`, changefreq: 'monthly', priority: 0.5 },
    { loc: `${baseUrl}/contact`, changefreq: 'monthly', priority: 0.5 }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff'
    }
  });
};

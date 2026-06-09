import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://myunitconverter.app';
  
  const sitemaps = [
    '/sitemap-homepage.xml',
    '/sitemap-categories.xml',
    '/sitemap-pairs-a-f.xml',
    '/sitemap-pairs-g-m.xml',
    '/sitemap-pairs-n-z.xml'
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(loc => `  <sitemap>
    <loc>${baseUrl}${loc}</loc>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff'
    }
  });
};

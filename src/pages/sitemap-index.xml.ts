import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://myunitconverter.app';
  
  const sitemaps = [
    '/sitemap-0.xml',
    '/sitemap-1.xml',
    '/sitemap-2.xml',
    '/sitemap-3.xml',
    '/sitemap-niche.xml',
    '/sitemap-longtail.xml'
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

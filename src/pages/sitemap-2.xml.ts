import type { APIRoute } from 'astro';
import { getAllPairs } from '../data/converters';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://myunitconverter.app';
  const pairs = getAllPairs();
  
  const filtered = pairs.filter(p => {
    const firstChar = p.slug.charAt(0).toLowerCase();
    return firstChar >= 'g' && firstChar <= 'm';
  });

  const urls = filtered.map(p => ({
    loc: `${baseUrl}/${p.slug}`,
    changefreq: 'monthly',
    priority: 0.6
  }));

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

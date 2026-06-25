import type { APIRoute } from 'astro';
import { ingredients } from '../data/ingredientDensity';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://myunitconverter.app';

  // 1. Ingredients pages
  const ingredientUrls = [];
  for (const ing of ingredients) {
    ingredientUrls.push(`${baseUrl}/cups-to-grams-${ing.slug}`);
    ingredientUrls.push(`${baseUrl}/tablespoons-to-grams-${ing.slug}`);
    ingredientUrls.push(`${baseUrl}/grams-to-cups-${ing.slug}`);
  }

  // 2. Static niche pages
  const staticNicheSlugs = [
    '/cooking-baking',
    '/engineering-trade',
    '/scientific-lab',
    '/construction-diy',
    '/sizing-automotive',
    '/finance-business',
    '/simple-interest-calculator',
    '/compound-interest-calculator',
    '/sales-tax-calculator',
    '/discount-calculator',
    '/salary-to-hourly-calculator',
    '/recipe-scale-calculator',
    '/baking-conversion-chart',
    '/awg-to-mm2-wire-gauge-calculator',
    '/mm2-to-awg-calculator',
    '/torque-converter-ft-lb-to-nm',
    '/bolt-torque-spec-calculator',
    '/pipe-size-converter-nominal-to-actual',
    '/psi-to-bar-to-kpa-converter',
    '/flow-rate-converter-gpm-to-lpm',
    '/hardness-converter-rockwell-brinell-vickers',
    '/steel-weight-calculator-kg-per-meter',
    '/concrete-mix-ratio-calculator',
    '/rebar-weight-calculator',
    '/thread-pitch-converter-metric-unc-unf',
    '/oven-temperature-converter-c-to-f',
    '/gas-mark-to-celsius-to-fahrenheit',
    '/fan-oven-temperature-converter',
    '/candy-making-temperature-stages-chart',
    '/meat-internal-temperature-guide-c-to-f',
    '/proof-temperature-for-bread-c-to-f',
    '/molarity-calculator',
    '/concentration-converter-ppm-to-mgL',
    '/ph-to-hydrogen-concentration-calculator',
    '/spectrophotometry-absorbance-to-transmittance',
    '/osmolality-to-osmolarity-converter',
    '/brix-to-specific-gravity-calculator',
    '/proof-to-abv-alcohol-converter',
    '/specific-gravity-calculator',
    '/board-feet-calculator',
    '/square-footage-calculator',
    '/mulch-coverage-calculator',
    '/paint-coverage-calculator-sq-ft-per-gallon',
    '/concrete-volume-calculator-bags-to-cubic-feet',
    '/gravel-weight-calculator-tons-to-cubic-yards',
    '/lumber-linear-feet-to-board-feet',
    '/roofing-square-calculator',
    '/tile-coverage-calculator'
  ];

  const allUrls = [
    ...staticNicheSlugs.map(slug => `${baseUrl}${slug}`),
    ...ingredientUrls
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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

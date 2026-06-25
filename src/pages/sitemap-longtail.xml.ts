import type { APIRoute } from 'astro';
import { categories } from '../lib/conversions';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://myunitconverter.app';
  const urls: string[] = [];

  // 1. General Fraction pages (length, weight, volume, area)
  const activeCategories = ['length', 'weight', 'volume', 'area'];
  for (const category of categories) {
    if (activeCategories.includes(category.id)) {
      const units = category.units;
      for (let i = 0; i < units.length; i++) {
        for (let j = 0; j < units.length; j++) {
          if (i !== j) {
            urls.push(`${baseUrl}/${units[i].slug}-to-${units[j].slug}-fraction`);
          }
        }
      }
    }
  }

  // 2. Specific Value Standard pages
  const popularPairs = [
    { from: "cm", to: "inches" },
    { from: "inches", to: "cm" },
    { from: "kg", to: "lbs" },
    { from: "lbs", to: "kg" },
    { from: "celsius", to: "fahrenheit" },
    { from: "fahrenheit", to: "celsius" },
    { from: "mm", to: "inches" },
    { from: "inches", to: "mm" },
    { from: "meters", to: "feet" },
    { from: "feet", to: "meters" },
    { from: "km", to: "miles" },
    { from: "miles", to: "km" }
  ];
  const standardValues = [1, 2, 3, 5, 8, 10, 15, 20, 25, 30, 45, 50, 75, 100, 120, 150, 180, 200, 250, 500];
  
  for (const pair of popularPairs) {
    for (const val of standardValues) {
      urls.push(`${baseUrl}/${val}-${pair.from}-to-${pair.to}`);
    }
  }

  // 3. Specific Value Fraction pages
  const popularFractionPairs = [
    { from: "mm", to: "inches" },
    { from: "cm", to: "inches" },
    { from: "inches", to: "mm" },
    { from: "inches", to: "cm" },
    { from: "meters", to: "feet" },
    { from: "feet", to: "meters" }
  ];
  const fractionValues = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 30, 45, 50, 75, 100, 120, 127, 200];
  for (const pair of popularFractionPairs) {
    for (const val of fractionValues) {
      urls.push(`${baseUrl}/${val}-${pair.from}-to-${pair.to}-fraction`);
    }
  }

  // 4. Compound conversions & their specific value pages
  const compoundPairs = [
    '/feet-and-inches-to-cm',
    '/cm-to-feet-and-inches',
    '/pounds-and-ounces-to-kg',
    '/kg-to-pounds-and-ounces',
    '/hours-minutes-seconds-to-seconds',
    '/seconds-to-hours-minutes-seconds'
  ];
  compoundPairs.forEach(p => urls.push(`${baseUrl}${p}`));

  // Compound height specific values (5'0" to 6'6")
  for (let f = 5; f <= 6; f++) {
    const maxIn = f === 6 ? 6 : 11;
    for (let i = 0; i <= maxIn; i++) {
      urls.push(`${baseUrl}/${f}-feet-${i}-inches-to-cm`);
    }
  }

  // Compound weight specific values (5 to 10 lbs, 4oz increments)
  for (let l = 5; l <= 10; l++) {
    for (let o = 0; o < 16; o += 4) {
      urls.push(`${baseUrl}/${l}-lbs-${o}-ounces-to-kg`);
    }
  }

  // 5. Context-aware conversion pages
  const contextPages = [
    '/ring-size-converter-us-to-uk',
    '/shoe-size-converter-us-to-eu',
    '/dress-size-converter-us-to-uk',
    '/tire-size-calculator'
  ];
  contextPages.forEach(p => urls.push(`${baseUrl}${p}`));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
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

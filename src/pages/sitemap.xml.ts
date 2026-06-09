import type { APIRoute } from 'astro';
import { categories } from '../lib/conversions';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://myunitconverter.app';
  const urls: { loc: string; changefreq: string; priority: number }[] = [];

  // 1. Home Page
  urls.push({ loc: `${baseUrl}/`, changefreq: 'weekly', priority: 1.0 });

  // 2. Static Pages
  const staticPages = ['/about', '/privacy', '/terms', '/contact'];
  for (const page of staticPages) {
    urls.push({ loc: `${baseUrl}${page}`, changefreq: 'monthly', priority: 0.5 });
  }

  // 3. Category Pages
  for (const category of categories) {
    urls.push({ loc: `${baseUrl}/${category.id}-converter`, changefreq: 'monthly', priority: 0.8 });
  }

  // 4. Unit-to-Unit Pages (from [unitA]-to-[unitB].astro getStaticPaths)
  for (const category of categories) {
    const units = category.units;
    for (const unitA of units) {
      for (const unitB of units) {
        if (unitA.id !== unitB.id) {
          urls.push({
            loc: `${baseUrl}/${unitA.id}-to-${unitB.id}`,
            changefreq: 'monthly',
            priority: 0.6
          });
        }
      }
    }
  }

  // 5. Short alias / priority pairs
  const shortAliasMap: Record<string, string> = {
    "cm": "centimeter",
    "inches": "inch",
    "inch": "inch",
    "kg": "kilogram",
    "lbs": "pound",
    "pound": "pound",
    "mm": "millimeter",
    "meters": "meter",
    "feet": "foot",
    "foot": "foot",
    "km": "kilometer",
    "miles": "mile",
    "grams": "gram",
    "ounces": "ounce",
    "oz": "ounce",
    "liters": "liter",
    "gallons": "gallon-us",
    "gallon": "gallon-us",
    "mph": "mile-per-hour",
    "kph": "kilometer-per-hour",
    "yards": "yard",
    "yard": "yard",
    "acres": "acre",
    "sq-ft": "square-foot",
    "celsius": "celsius",
    "fahrenheit": "fahrenheit",
  };

  const priorityPairs = [
    ["cm", "inches"],
    ["kg", "lbs"],
    ["celsius", "fahrenheit"],
    ["mm", "inches"],
    ["meters", "feet"],
    ["km", "miles"],
    ["feet", "cm"],
    ["grams", "ounces"],
    ["inches", "cm"],
    ["lbs", "kg"],
    ["fahrenheit", "celsius"],
    ["miles", "km"],
    ["liters", "gallons"],
    ["gallons", "liters"],
    ["mph", "kph"],
    ["kph", "mph"],
    ["meters", "yards"],
    ["yards", "meters"],
    ["oz", "grams"],
    ["feet", "inches"],
    ["acres", "sq-ft"]
  ];

  for (const [aliasA, aliasB] of priorityPairs) {
    const idA = shortAliasMap[aliasA];
    const idB = shortAliasMap[aliasB];
    if (idA && idB) {
      const category = categories.find(cat => 
        cat.units.some(u => u.id === idA) && cat.units.some(u => u.id === idB)
      );
      if (category) {
        const unitA = category.units.find(u => u.id === idA);
        const unitB = category.units.find(u => u.id === idB);
        if (unitA && unitB) {
          if (aliasA !== idA || aliasB !== idB) {
            urls.push({
              loc: `${baseUrl}/${aliasA}-to-${aliasB}`,
              changefreq: 'monthly',
              priority: 0.6
            });
          }
        }
      }
    }
  }

  // 6. Convert route Pages
  for (const category of categories) {
    const units = category.units;
    for (const unitA of units) {
      for (const unitB of units) {
        if (unitA.id !== unitB.id) {
          urls.push({
            loc: `${baseUrl}/convert/${category.id}/${unitA.id}/to/${unitB.id}`,
            changefreq: 'monthly',
            priority: 0.5
          });
        }
      }
    }
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff'
    }
  });
};

# Prompt 01 — Homepage UI
# myunitconverter.app
# Paste this into Cursor / v0.dev / Claude

---

## CONTEXT

Build the homepage for **myunitconverter.app** — a fast, clean, free unit converter tool
targeting global users (students, engineers, travelers, cooks).

Tech stack:
- Astro 4 with TypeScript
- Tailwind CSS (dark mode via `class` strategy — toggle with a button)
- React island ONLY for interactive parts (converter widget)
- No unnecessary JS — everything static by default

---

## WHAT TO BUILD IN THIS PROMPT

**Only the homepage** (`src/pages/index.astro`) plus the shared layout.

Files to create:
```
src/
├── layouts/
│   └── BaseLayout.astro        ← shared layout with SEO head, nav, footer
├── pages/
│   └── index.astro             ← homepage
├── components/
│   ├── ThemeToggle.astro       ← dark/light mode toggle button
│   ├── CategoryCard.astro      ← card for each converter category
│   └── SearchBar.astro         ← live filter for categories
└── styles/
    └── global.css              ← base styles + CSS variables
```

---

## DESIGN DIRECTION

**Visual identity:**
- Clean, minimal, utility-focused — like Linear or Vercel's docs
- Signature element: a subtle animated gradient border on the active/hovered category card
- NOT a warm cream site. NOT dark-neon. Cool neutral grays with a single accent color.
- Accent color: `#6366f1` (indigo) — used sparingly on CTAs, active states, icons
- Background light: `#ffffff` with `#f8f8f8` for cards
- Background dark: `#0f0f0f` with `#1a1a1a` for cards
- Text light: `#111111` primary, `#6b7280` secondary
- Text dark: `#f5f5f5` primary, `#9ca3af` secondary
- Border light: `#e5e7eb`
- Border dark: `#2a2a2a`

**Typography:**
- Display/headings: `Inter` (Google Fonts) — weight 600-700
- Body: `Inter` — weight 400-500
- Data/numbers: `JetBrains Mono` — for unit symbols and values
- Type scale: hero 48px → section title 24px → card title 16px → body 14px

**Layout:**
- Max width container: `1100px`, centered, `px-4` padding
- Nav: logo left, theme toggle right — nothing else
- Hero: headline + subheadline + quick converter (the 6 most popular conversions as pill links)
- Category grid: 3 columns desktop, 2 tablet, 1 mobile
- Footer: minimal — just copyright + privacy + about links

---

## BaseLayout.astro

```astro
---
export interface Props {
  title: string;
  description: string;
  canonical?: string;
}
const { title, description, canonical } = Astro.props;
const canonicalURL = canonical || new URL(Astro.url.pathname, Astro.site).href;
---
<!DOCTYPE html>
<html lang="en" class="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalURL} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:type" content="website" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

  <!-- Google AdSense (add after approval) -->
  <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossorigin="anonymous"></script> -->

  <!-- Theme init: prevent flash of wrong theme -->
  <script is:inline>
    const theme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  </script>
</head>
<body class="bg-white dark:bg-[#0f0f0f] text-[#111111] dark:text-[#f5f5f5] transition-colors duration-200">
  
  <!-- NAV -->
  <nav class="border-b border-[#e5e7eb] dark:border-[#2a2a2a] sticky top-0 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-sm z-50">
    <div class="max-w-[1100px] mx-auto px-4 h-14 flex items-center justify-between">
      <a href="/" class="font-bold text-lg tracking-tight">
        my<span class="text-indigo-500">unit</span>converter
      </a>
      <ThemeToggle />
    </div>
  </nav>

  <!-- MAIN CONTENT -->
  <main>
    <slot />
  </main>

  <!-- FOOTER -->
  <footer class="border-t border-[#e5e7eb] dark:border-[#2a2a2a] mt-20 py-8">
    <div class="max-w-[1100px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#6b7280] dark:text-[#9ca3af]">
      <p>© 2025 myunitconverter.app — Free forever</p>
      <div class="flex gap-6">
        <a href="/about" class="hover:text-indigo-500 transition-colors">About</a>
        <a href="/privacy" class="hover:text-indigo-500 transition-colors">Privacy</a>
        <a href="/contact" class="hover:text-indigo-500 transition-colors">Contact</a>
      </div>
    </div>
  </footer>

</body>
</html>
```

---

## ThemeToggle.astro

```astro
---
---
<button
  id="theme-toggle"
  aria-label="Toggle dark mode"
  class="w-9 h-9 rounded-lg border border-[#e5e7eb] dark:border-[#2a2a2a] flex items-center justify-center hover:bg-[#f8f8f8] dark:hover:bg-[#1a1a1a] transition-colors"
>
  <!-- Sun icon (shown in dark mode) -->
  <svg class="hidden dark:block w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
  </svg>
  <!-- Moon icon (shown in light mode) -->
  <svg class="block dark:hidden w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
  </svg>
</button>

<script>
  const btn = document.getElementById('theme-toggle');
  btn?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
</script>
```

---

## index.astro (Homepage)

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import CategoryCard from '../components/CategoryCard.astro';

const categories = [
  {
    id: "length",
    name: "Length",
    icon: "📏",
    description: "Meters, feet, inches, miles, km",
    popular: ["meters-to-feet", "cm-to-inches", "km-to-miles"],
    count: 12,
    slug: "length"
  },
  {
    id: "weight",
    name: "Weight & Mass",
    icon: "⚖️",
    description: "Kilograms, pounds, ounces, grams",
    popular: ["kg-to-lbs", "grams-to-ounces", "pounds-to-kg"],
    count: 10,
    slug: "weight"
  },
  {
    id: "temperature",
    name: "Temperature",
    icon: "🌡️",
    description: "Celsius, Fahrenheit, Kelvin",
    popular: ["celsius-to-fahrenheit", "fahrenheit-to-celsius"],
    count: 4,
    slug: "temperature"
  },
  {
    id: "volume",
    name: "Volume",
    icon: "🧪",
    description: "Liters, gallons, cups, ml",
    popular: ["liters-to-gallons", "ml-to-cups", "gallons-to-liters"],
    count: 14,
    slug: "volume"
  },
  {
    id: "speed",
    name: "Speed",
    icon: "⚡",
    description: "km/h, mph, m/s, knots",
    popular: ["kmh-to-mph", "mph-to-kmh"],
    count: 8,
    slug: "speed"
  },
  {
    id: "area",
    name: "Area",
    icon: "🗺️",
    description: "Square meters, feet, acres, hectares",
    popular: ["sqm-to-sqft", "acres-to-sqft", "hectares-to-acres"],
    count: 10,
    slug: "area"
  },
  {
    id: "data",
    name: "Data Storage",
    icon: "💾",
    description: "KB, MB, GB, TB, bits, bytes",
    popular: ["mb-to-gb", "gb-to-tb", "kb-to-mb"],
    count: 12,
    slug: "data"
  },
  {
    id: "time",
    name: "Time",
    icon: "⏱️",
    description: "Seconds, minutes, hours, days",
    popular: ["hours-to-minutes", "days-to-hours", "minutes-to-seconds"],
    count: 8,
    slug: "time"
  },
  {
    id: "energy",
    name: "Energy",
    icon: "⚡",
    description: "Joules, calories, kWh, BTU",
    popular: ["joules-to-calories", "kwh-to-joules"],
    count: 10,
    slug: "energy"
  },
  {
    id: "pressure",
    name: "Pressure",
    icon: "🔧",
    description: "Pa, bar, PSI, atm",
    popular: ["psi-to-bar", "bar-to-psi", "atm-to-pa"],
    count: 8,
    slug: "pressure"
  },
  {
    id: "cooking",
    name: "Cooking",
    icon: "🍳",
    description: "Cups, tablespoons, teaspoons, ml",
    popular: ["cups-to-ml", "tablespoons-to-teaspoons"],
    count: 10,
    slug: "cooking"
  },
  {
    id: "angle",
    name: "Angle",
    icon: "📐",
    description: "Degrees, radians, gradians",
    popular: ["degrees-to-radians", "radians-to-degrees"],
    count: 6,
    slug: "angle"
  },
];

const popularLinks = [
  { label: "cm → inches", href: "/convert/cm-to-inches" },
  { label: "kg → lbs", href: "/convert/kg-to-lbs" },
  { label: "°C → °F", href: "/convert/celsius-to-fahrenheit" },
  { label: "miles → km", href: "/convert/miles-to-km" },
  { label: "liters → gallons", href: "/convert/liters-to-gallons" },
  { label: "MB → GB", href: "/convert/mb-to-gb" },
];
---

<BaseLayout
  title="Free Unit Converter — myunitconverter.app"
  description="Free online unit converter for length, weight, temperature, volume, speed, area, data, energy and more. Instant, accurate, no signup required."
>

  <!-- HERO SECTION -->
  <section class="max-w-[1100px] mx-auto px-4 pt-16 pb-12 text-center">
    <h1 class="text-4xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
      Convert any unit,<br/>
      <span class="text-indigo-500">instantly.</span>
    </h1>
    <p class="text-[#6b7280] dark:text-[#9ca3af] text-lg mb-8 max-w-xl mx-auto">
      Free online unit converter for length, weight, temperature, volume, speed, and 50+ more. No ads interrupting you. Just the answer.
    </p>

    <!-- Popular quick links -->
    <div class="flex flex-wrap justify-center gap-2 mb-4">
      {popularLinks.map(link => (
        <a
          href={link.href}
          class="px-3 py-1.5 text-sm rounded-full border border-[#e5e7eb] dark:border-[#2a2a2a] hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-colors font-mono"
        >
          {link.label}
        </a>
      ))}
    </div>
  </section>

  <!-- AD SLOT 1 (top banner — activate after AdSense approval) -->
  <!--
  <div class="max-w-[1100px] mx-auto px-4 mb-8 flex justify-center">
    <ins class="adsbygoogle" data-ad-client="ca-pub-XXXX" data-ad-slot="XXXX" data-ad-format="horizontal" style="display:block;width:728px;height:90px;"></ins>
  </div>
  -->

  <!-- SEARCH BAR -->
  <div class="max-w-[1100px] mx-auto px-4 mb-8">
    <div class="relative max-w-md mx-auto">
      <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z"/>
      </svg>
      <input
        id="category-search"
        type="text"
        placeholder="Search categories..."
        class="w-full pl-9 pr-4 py-2.5 rounded-lg border border-[#e5e7eb] dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
      />
    </div>
  </div>

  <!-- CATEGORY GRID -->
  <section class="max-w-[1100px] mx-auto px-4 pb-16">
    <div id="category-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map(cat => (
        <CategoryCard category={cat} />
      ))}
    </div>
    <!-- Empty state -->
    <p id="no-results" class="hidden text-center text-[#9ca3af] py-12 text-sm">
      No categories found. Try a different search.
    </p>
  </section>

</BaseLayout>

<!-- Search filter script -->
<script>
  const input = document.getElementById('category-search') as HTMLInputElement;
  const grid = document.getElementById('category-grid');
  const noResults = document.getElementById('no-results');
  const cards = grid?.querySelectorAll('[data-category-name]');

  input?.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    let visibleCount = 0;

    cards?.forEach(card => {
      const name = card.getAttribute('data-category-name')?.toLowerCase() || '';
      const desc = card.getAttribute('data-category-desc')?.toLowerCase() || '';
      const match = !query || name.includes(query) || desc.includes(query);
      (card as HTMLElement).style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    if (noResults) {
      noResults.classList.toggle('hidden', visibleCount > 0);
    }
  });
</script>
```

---

## CategoryCard.astro

```astro
---
export interface Props {
  category: {
    id: string;
    name: string;
    icon: string;
    description: string;
    popular: string[];
    count: number;
    slug: string;
  }
}
const { category } = Astro.props;
---

<a
  href={`/category/${category.slug}`}
  data-category-name={category.name}
  data-category-desc={category.description}
  class="group block p-5 rounded-xl border border-[#e5e7eb] dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/5"
>
  <!-- Header -->
  <div class="flex items-start justify-between mb-3">
    <div class="flex items-center gap-2.5">
      <span class="text-2xl" aria-hidden="true">{category.icon}</span>
      <h2 class="font-semibold text-base">{category.name}</h2>
    </div>
    <span class="text-xs text-[#9ca3af] border border-[#e5e7eb] dark:border-[#2a2a2a] px-2 py-0.5 rounded-full">
      {category.count} units
    </span>
  </div>

  <!-- Description -->
  <p class="text-sm text-[#6b7280] dark:text-[#9ca3af] mb-4 leading-relaxed">
    {category.description}
  </p>

  <!-- Popular converters -->
  <div class="flex flex-wrap gap-1.5">
    {category.popular.slice(0, 3).map(slug => (
      <span class="text-xs font-mono px-2 py-0.5 rounded bg-[#f8f8f8] dark:bg-[#0f0f0f] text-[#6b7280] dark:text-[#9ca3af] group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:group-hover:bg-indigo-500/10 dark:group-hover:text-indigo-400 transition-colors">
        {slug.replace(/-/g, ' ')}
      </span>
    ))}
  </div>

  <!-- Arrow -->
  <div class="mt-4 flex items-center text-xs text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
    View all converters
    <svg class="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </div>
</a>
```

---

## tailwind.config.mjs

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',   // ← CRITICAL: enables dark: classes via JS toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
```

---

## astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://myunitconverter.app',
  integrations: [
    tailwind(),
    react(),        // For the interactive Converter widget (island)
    sitemap(),      // Auto-generates /sitemap-index.xml
  ],
  output: 'static', // Full static build — perfect for Vercel/Netlify free tier
});
```

---

## package.json dependencies to install

```bash
npm create astro@latest myunitconverter -- --template minimal --typescript strict
cd myunitconverter
npx astro add tailwind react sitemap
npm install
```

---

## WHAT THIS PROMPT PRODUCES

- Homepage with hero, popular quick-links, searchable category grid
- Full dark/light mode with no flash on load (localStorage + inline script trick)
- Sticky nav with blur backdrop
- Responsive grid: 3col → 2col → 1col
- Category cards with hover effects (indigo border, arrow reveal)
- Search filter that works without JS frameworks
- Footer with legal pages (required for AdSense)
- Sitemap auto-generation configured
- AdSense slots pre-placed but commented out (activate after approval)

---

## NEXT PROMPTS (in order)

1. **Prompt 02** — Individual converter page (`/convert/[slug].astro`) with the interactive React island
2. **Prompt 03** — `lib/conversions.ts` with all unit data for all 12 categories  
3. **Prompt 04** — Category listing page (`/category/[slug].astro`)
4. **Prompt 05** — SEO article template + FAQ schema JSON-LD
5. **Prompt 06** — About, Privacy, Contact pages (required for AdSense)
6. **Prompt 07** — Performance audit + sitemap submission checklist

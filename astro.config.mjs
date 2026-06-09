import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://myunitconverter.app',
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const url = item.url;
        if (url === 'https://myunitconverter.app/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (url.includes('-converter')) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else if (url.includes('-to-')) {
          item.changefreq = 'monthly';
          item.priority = 0.6;
        } else if (url.includes('/blog/')) {
          item.changefreq = 'weekly';
          item.priority = 0.5;
        } else if (url.includes('/about') || url.includes('/privacy') || url.includes('/terms') || url.includes('/contact')) {
          item.changefreq = 'monthly';
          item.priority = 0.5;
        }
        return item;
      }
    }),
  ],
  adapter: vercel(),
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  output: 'static',
});

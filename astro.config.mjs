import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://myunitconverter.app',
  integrations: [
    react(),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  redirects: {
    '/flow_rate-converter': '/flow-rate-converter',
    '/fuel_consumption-converter': '/fuel-consumption-converter',
    '/data_transfer-converter': '/data-transfer-converter',
  },
  output: 'static',
});


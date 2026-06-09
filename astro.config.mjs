import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://myunitconverter.app',
  integrations: [
    react(),
  ],
  trailingSlash: 'never',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  redirects: {
    '/flow_rate-converter': '/flow-rate-converter',
    '/fuel_consumption-converter': '/fuel-consumption-converter',
    '/data_transfer-converter': '/data-transfer-converter',
    
    // Category redirects
    '/length': '/length-converter',
    '/length-conversion': '/length-converter',
    '/weight': '/weight-converter',
    '/weight-conversion': '/weight-converter',
    '/temperature': '/temperature-converter',
    '/temperature-conversion': '/temperature-converter',
    '/volume': '/volume-converter',
    '/volume-conversion': '/volume-converter',
    '/area': '/area-converter',
    '/area-conversion': '/area-converter',
    '/speed': '/speed-converter',
    '/speed-conversion': '/speed-converter',
    '/time': '/time-converter',
    '/time-conversion': '/time-converter',
    '/data': '/data-converter',
    '/data-conversion': '/data-converter',

    // Unit Pair redirects
    '/cm-to-in': '/cm-to-inches',
    '/cm-to-inch': '/cm-to-inches',
    '/centimeter-to-inch': '/cm-to-inches',
    '/centimeter-to-inches': '/cm-to-inches',
    '/inches-to-centimeter': '/inches-to-cm',
    '/inch-to-cm': '/inches-to-cm',
    '/kg-to-lb': '/kg-to-lbs',
    '/kilogram-to-pound': '/kg-to-lbs',
    '/pound-to-kg': '/lbs-to-kg',
    '/celsius-to-fahr': '/celsius-to-fahrenheit',
    '/fahrenheit-to-celcius': '/fahrenheit-to-celsius',
    '/mm-to-inch': '/mm-to-inches',
    '/millimeter-to-inch': '/mm-to-inches',
    '/meters-to-foot': '/meters-to-feet',
    '/meter-to-foot': '/meters-to-feet',
    '/feet-to-meter': '/feet-to-meters',
    '/km-to-mile': '/km-to-miles',
    '/kilometer-to-mile': '/km-to-miles',
    '/miles-to-kilometer': '/miles-to-km',
    '/liters-to-gallon': '/liters-to-gallons',
    '/liter-to-gallon': '/liters-to-gallons',
    '/gallon-to-liter': '/gallons-to-liters',
    '/grams-to-ounce': '/grams-to-ounces',
    '/gram-to-ounce': '/grams-to-ounces',
    '/ounce-to-gram': '/ounces-to-grams',
    '/mph-to-kmh': '/mph-to-kph',
    '/kph-to-mph': '/kph-to-mph',
    '/acres-to-sq-ft': '/acres-to-sqft',
    '/square-foot-to-acre': '/sqft-to-acres',
    '/megabyte-to-gigabyte': '/mb-to-gb',
    '/gigabyte-to-megabyte': '/gb-to-mb',
    '/horsepower-to-kilowatt': '/hp-to-kw',
    '/kilowatt-to-horsepower': '/kw-to-hp'
  },
  output: 'static',
});


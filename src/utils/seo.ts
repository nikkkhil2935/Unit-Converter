export interface SEOData {
  title: string;
  description: string;
  h1: string;
  h2variants: string[];
  keywords: string[];
}

export function getPairSEO(from: any, to: any, category: any): SEOData {
  // Title variants - rotated based on character code hashing of slugs
  const hash = (from.slug.charCodeAt(0) + to.slug.charCodeAt(0)) % 3;
  const titles = [
    `Convert ${from.name} to ${to.name} — ${from.symbol} to ${to.symbol} Converter`,
    `${from.name} to ${to.name} Converter | ${from.symbol} to ${to.symbol}`,
    `${from.symbol} to ${to.symbol} — ${from.name} to ${to.name} Calculator`,
  ];
  const title = titles[hash];

  // Description variant - unique per page
  const description = 
    `Convert ${from.name} to ${to.name} instantly. ` +
    `Use our free ${from.symbol} to ${to.symbol} calculator — ` +
    `see the exact formula, a full conversion table from ` +
    `1–1000 ${from.symbol}, and common conversion examples. ` +
    `No signup required.`;

  // H1 - matches search query
  const h1 = `${from.name} to ${to.name} Converter`;

  // H2 variants
  const h2variants = [
    `How to Convert ${from.name} to ${to.name}`,
    `${from.symbol} to ${to.symbol} Formula and Examples`,
    `${from.name} to ${to.name}: Quick Reference Table`,
  ];

  // Keywords
  const keywords = [
    `${from.slug} to ${to.slug}`,
    `${from.symbol} to ${to.symbol}`,
    `convert ${from.slug} to ${to.slug}`,
    `${from.slug} to ${to.slug} converter`,
    `${from.slug} to ${to.slug} calculator`,
    `${from.name.toLowerCase()} to ${to.name.toLowerCase()}`,
    `how many ${to.name.toLowerCase()} in a ${from.name.toLowerCase()}`,
    `how to convert ${from.slug} to ${to.slug}`,
    `${from.slug} in ${to.slug}`,
    `1 ${from.slug} to ${to.slug}`,
  ];

  return { title, description, h1, h2variants, keywords };
}

// 30 priority conversions predefined context map
const predefinedContext: Record<string, string> = {
  "cm-to-inches": "Centimeters to inches is one of the most common conversions for clothing sizes, screen sizes, and everyday measurements between metric and imperial countries.",
  "inches-to-cm": "Converting inches to centimeters is standard when translating imperial design layouts, screen dimensions, and apparel sizes to the metric system.",
  "kg-to-lbs": "Kilograms to pounds conversions are essential for international shipping, fitness tracking, and food recipes between countries using different measurement systems.",
  "lbs-to-kg": "Pounds to kilograms conversions are widely used in aviation weight balance, fitness weightlifting logs, and global package logistics.",
  "celsius-to-fahrenheit": "Converting Celsius to Fahrenheit is a common daily calculation for travelers checking local weather forecasts and cooks translating recipes from international publications.",
  "fahrenheit-to-celsius": "Fahrenheit to Celsius conversion is vital for understanding temperatures in metric countries, scientific reporting, and baking recipes.",
  "mm-to-inches": "Millimeters to inches conversions are crucial in precision manufacturing, engineering blueprints, and machinery parts specifications where fractions of an inch matter.",
  "inches-to-mm": "Converting inches to millimeters is essential in machining, industrial design, and woodworking to adapt imperial measurements to global metric standards.",
  "meters-to-feet": "Meters to feet conversions are highly useful in construction projects, track and field sports analytics, and architectural building planning.",
  "feet-to-meters": "Converting feet to meters is key for international real estate listings, marine depth reporting, and aviation altitude definitions.",
  "km-to-miles": "Kilometers to miles conversions are essential for road trip planning, vehicle odometer readings, and long-distance athletics tracking.",
  "miles-to-km": "Converting miles to kilometers helps drivers navigate highways in metric countries, calculate travel speeds, and compare running race distances.",
  "meters-to-yards": "Meters to yards conversions are common in American football, fabric textiles shopping, and golf course distance tracking.",
  "yards-to-meters": "Converting yards to meters is standard in international track events, landscaping projects, and fabric retail measurements.",
  "liters-to-gallons": "Liters to gallons conversions are commonly performed to compare fuel efficiency, water utility volumes, and bulk fluid transport capacities.",
  "gallons-to-liters": "Converting gallons to liters is critical for automotive diagnostics, chemical formulations, and purchasing liquid goods in metric countries.",
  "grams-to-ounces": "Grams to ounces conversions are vital in kitchen baking, postal weight calculations, and comparing nutritional values on food packaging.",
  "ounces-to-grams": "Converting ounces to grams is commonly used by chefs, baristas, and jewellers to weigh ingredients or metals with high precision.",
  "mph-to-kph": "Miles per hour to kilometers per hour conversions are helpful for understanding speed limits abroad and comparing automotive acceleration specs.",
  "kph-to-mph": "Converting kilometers per hour to miles per hour is essential for import car dashboard calibrations and navigating highways in the United States and United Kingdom.",
  "feet-to-inches": "Feet to inches conversions are fundamental in construction, height measurement, and home improvement layouts using imperial measurements.",
  "inches-to-feet": "Converting inches to feet simplifies structural dimensions and tall measurements by expressing total inches in a standard feet-and-inches format.",
  "acres-to-sqft": "Acres to square feet conversions are critical for real estate transactions, agricultural land calculations, and suburban property mapping.",
  "sqft-to-acres": "Converting square feet to acres is standard in land development, farming planning, and checking the size of large residential properties.",
  "mb-to-gb": "Megabytes to gigabytes conversions are key for understanding data limits, estimating file transfer times, and managing phone or computer storage.",
  "gb-to-mb": "Converting gigabytes to megabytes helps calculate how many songs, photos, or documents will fit onto a flash drive or cloud storage allocation.",
  "hp-to-kw": "Horsepower to kilowatts conversions are widely used in the automotive and electrical industries to describe engine outputs and generator capacities.",
  "kw-to-hp": "Converting kilowatts to horsepower helps compare electric motor ratings against traditional combustion engines in cars and industrial machinery.",
  "psi-to-bar": "Pounds per square inch (PSI) to bar conversions are standard in tire pressure checks, scuba diving equipment ratings, and HVAC system monitoring.",
  "bar-to-psi": "Converting bar to PSI is essential for understanding pressure readings on European machinery, water pumps, and high-pressure compressors."
};

export function getRealWorldContext(from: any, to: any, category: any): string {
  const key = `${from.slug}-to-${to.slug}`;
  if (predefinedContext[key]) {
    return predefinedContext[key];
  }
  
  // High-quality fallback generator
  return `Conversions between ${from.name} (${from.symbol}) and ${to.name} (${to.symbol}) are essential in the ${category.name.toLowerCase()} category. This tool provides a quick, free, and accurate way to convert ${from.name.toLowerCase()}s to ${to.name.toLowerCase()}s for academic, professional, or personal calculations. Check the detailed conversion table and formula explanation below for more context.`;
}

// Helper to provide real world equivalents in the conversion tables
export function getEquivalent(val: number, slug: string): string {
  if (val <= 0) return "N/A";
  
  switch (slug) {
    // Lengths
    case "meters":
    case "meter":
      if (val < 0.01) return "width of a pinhead";
      if (val < 0.1) return "width of a credit card";
      if (val < 0.5) return "length of a keyboard";
      if (val < 2) return "height of an average guitar";
      if (val < 5) return "length of a compact car";
      if (val < 20) return "length of a city bus";
      if (val < 100) return "height of a wind turbine";
      if (val < 500) return "height of the Empire State Building";
      return "length of several soccer fields";
      
    case "cm":
    case "centimeters":
    case "centimeter":
      if (val < 0.5) return "thickness of a coin";
      if (val < 2) return "width of a paperclip";
      if (val < 5) return "width of a postage stamp";
      if (val < 15) return "length of a pen";
      if (val < 30) return "width of a standard envelope";
      if (val < 100) return "length of a baseball bat";
      if (val < 300) return "height of a soccer goal";
      return "length of a pickup truck";
      
    case "mm":
    case "millimeters":
    case "millimeter":
      if (val < 1) return "thickness of a sheet of paper";
      if (val < 3) return "thickness of an ID card";
      if (val < 10) return "width of a green pea";
      if (val < 30) return "width of a postage stamp";
      return "width of a small smartphone";

    case "inches":
    case "inch":
      if (val < 1) return "width of a paperclip";
      if (val < 5) return "length of a credit card";
      if (val < 12) return "length of a standard ruler";
      if (val < 40) return "height of a guitar";
      if (val < 100) return "width of a double bed";
      return "length of a shipping container";
      
    case "feet":
    case "foot":
      if (val < 1) return "width of an iPad";
      if (val < 3) return "length of a standard skateboard";
      if (val < 6) return "height of a typical adult";
      if (val < 15) return "length of a sedan";
      if (val < 50) return "length of a semi-trailer";
      return "height of a skyscraper";

    case "km":
    case "kilometer":
    case "kilometers":
      if (val < 1) return "a 5-minute jog";
      if (val < 2) return "a 12-minute walk";
      if (val < 10) return "length of a large island";
      return "average highway travel distance";

    case "miles":
    case "mile":
      if (val < 1) return "a 15-minute walk";
      if (val < 5) return "a 5K running race";
      if (val < 20) return "width of a major metropolis";
      return "distance between neighboring towns";

    // Weight/Mass
    case "kg":
    case "kilograms":
    case "kilogram":
      if (val < 0.1) return "weight of a lemon";
      if (val < 0.5) return "weight of a soccer ball";
      if (val < 2) return "weight of a bag of sugar";
      if (val < 10) return "weight of a bowling ball";
      if (val < 50) return "weight of a large dog";
      if (val < 100) return "weight of a washing machine";
      return "weight of a small car";

    case "grams":
    case "gram":
      if (val < 1) return "weight of a paperclip";
      if (val < 5) return "weight of a penny";
      if (val < 20) return "weight of a AAA battery";
      if (val < 100) return "weight of a deck of cards";
      return "weight of a tablet device";

    case "lbs":
    case "pound":
    case "pounds":
      if (val < 1) return "weight of a shoe";
      if (val < 5) return "weight of a brick";
      if (val < 15) return "weight of a bowling ball";
      if (val < 100) return "weight of an office chair";
      return "weight of a refrigerator";

    // Volume
    case "liters":
    case "liter":
      if (val < 0.5) return "volume of a soda can";
      if (val < 1.5) return "volume of a milk carton";
      if (val < 5) return "volume of a large soda bottle";
      if (val < 20) return "volume of a car fuel tank";
      return "volume of a large aquarium";

    case "ml":
    case "milliliters":
    case "milliliter":
      if (val < 5) return "a single teaspoon";
      if (val < 15) return "a single tablespoon";
      if (val < 100) return "a standard double espresso";
      return "a regular coffee mug";

    case "gallons":
    case "gallon":
      if (val < 1) return "large container of milk";
      if (val < 5) return "large bucket of paint";
      if (val < 20) return "size of a small bathtub";
      return "size of a backyard pool";

    // Data
    case "mb":
    case "megabytes":
      if (val < 5) return "a compressed high-res image";
      if (val < 50) return "a single audio album";
      return "a short high-definition video";

    case "gb":
    case "gigabytes":
      if (val < 2) return "about 1 hour of streaming video";
      if (val < 50) return "size of a major video game";
      return "storage of a modern smartphone";

    // Default Fallback
    default:
      if (val < 1) return "fractional unit measurement";
      if (val < 10) return "standard single unit scale";
      return "multiple unit increments";
  }
}

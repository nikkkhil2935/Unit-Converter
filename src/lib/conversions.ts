import { categories as rawCategories } from '../data/converters';

export interface Unit {
  id: string;
  name: string;
  symbol: string;
  factor: number;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  baseUnit: string;
  units: Unit[];
  popularPairs: [string, string][];
  slug: string;
  color: string;
  topPairs: [string, string][];
  relatedCategories: string[];
}

// Map the raw categories to legacy Category interface for full backwards compatibility
export const categories: Category[] = rawCategories.map(cat => ({
  id: cat.id,
  slug: cat.slug,
  name: cat.name,
  icon: cat.icon,
  description: cat.description,
  color: cat.color,
  baseUnit: cat.baseUnit,
  units: cat.units.map(u => ({
    id: u.id,
    slug: u.slug,
    name: u.name,
    symbol: u.symbol,
    factor: u.factor
  })),
  popularPairs: cat.topPairs,
  topPairs: cat.topPairs,
  relatedCategories: cat.relatedCategories
}));

// Helper to look up a category
export function getCategory(id: string): Category | undefined {
  return categories.find(c => c.id === id || c.slug === id);
}

// Global unit convert utility
export function convert(value: number, from: string, to: string, categoryId: string): number {
  if (isNaN(value)) return NaN;
  if (from === to) return value;

  // 1. Special Temperature Conversion (Non-linear)
  if (categoryId === "temperature") {
    let kelvin = value;
    if (from === "celsius") kelvin = value + 273.15;
    else if (from === "fahrenheit") kelvin = (value - 32) * (5 / 9) + 273.15;

    if (to === "celsius") return kelvin - 273.15;
    if (to === "fahrenheit") return (kelvin - 273.15) * (9 / 5) + 32;
    return kelvin;
  }

  // 2. Special Fuel Consumption Conversion (Inverse-linear relationships)
  if (categoryId === "fuel-consumption") {
    // Standardize to L/100km
    let l100km = value;
    if (from === "mpg-us") l100km = 235.214583 / value;
    else if (from === "mpg-uk") l100km = 282.480936 / value;
    else if (from === "km-l") l100km = 100 / value;

    if (to === "mpg-us") return 235.214583 / l100km;
    if (to === "mpg-uk") return 282.480936 / l100km;
    if (to === "km-l") return 100 / l100km;
    return l100km;
  }

  // 3. Linear conversions
  const category = getCategory(categoryId);
  if (!category) return NaN;

  const fromUnit = category.units.find(u => u.id === from || u.slug === from);
  const toUnit = category.units.find(u => u.id === to || u.slug === to);
  if (!fromUnit || !toUnit) return NaN;

  const baseValue = value * fromUnit.factor;
  return baseValue / toUnit.factor;
}

// Generate the math formula explanation string
export function getFormulaExplanation(fromId: string, toId: string, categoryId: string): string {
  if (fromId === toId) return "No conversion needed.";

  if (categoryId === "temperature") {
    if (fromId === "celsius" && toId === "fahrenheit") return "°F = (°C × 9/5) + 32";
    if (fromId === "fahrenheit" && toId === "celsius") return "°C = (°F - 32) × 5/9";
    if (fromId === "celsius" && toId === "kelvin") return "K = °C + 273.15";
    if (fromId === "kelvin" && toId === "celsius") return "°C = K - 273.15";
    if (fromId === "fahrenheit" && toId === "kelvin") return "K = (°F - 32) × 5/9 + 273.15";
    if (fromId === "kelvin" && toId === "fahrenheit") return "°F = (K - 273.15) × 9/5 + 32";
  }

  if (categoryId === "fuel-consumption") {
    if (fromId === "mpg-us" && toId === "l100km") return "L/100km = 235.215 ÷ mpg (US)";
    if (fromId === "l100km" && toId === "mpg-us") return "mpg (US) = 235.215 ÷ (L/100km)";
    if (fromId === "mpg-uk" && toId === "l100km") return "L/100km = 282.481 ÷ mpg (UK)";
    if (fromId === "l100km" && toId === "mpg-uk") return "mpg (UK) = 282.481 ÷ (L/100km)";
    if (fromId === "km-l" && toId === "l100km") return "L/100km = 100 ÷ (km/L)";
    if (fromId === "l100km" && toId === "km-l") return "km/L = 100 ÷ (L/100km)";
  }

  const category = getCategory(categoryId);
  const fromUnit = category?.units.find(u => u.id === fromId || u.slug === fromId);
  const toUnit = category?.units.find(u => u.id === toId || u.slug === toId);
  if (!fromUnit || !toUnit) return "";

  const factor = fromUnit.factor / toUnit.factor;
  
  // Format factor nicely
  const factorStr = factor < 0.00001 || factor > 10000000
    ? factor.toExponential(6)
    : Number(factor.toFixed(9)).toString(); // strips trailing zeros

  return `${toUnit.symbol} = ${fromUnit.symbol} × ${factorStr}`;
}

// Synonyms map to resolve natural language search queries
export const UNIT_SYNONYMS: Record<string, { unitId: string; categoryId: string }> = {};

// Populate UNIT_SYNONYMS programmatically for stability and coverage
categories.forEach(cat => {
  cat.units.forEach(unit => {
    const keys = [
      unit.id.toLowerCase(),
      unit.slug.toLowerCase(),
      unit.symbol.toLowerCase(),
      unit.name.toLowerCase(),
      unit.name.toLowerCase() + "s", // basic plural
      unit.name.toLowerCase().replace(/\s+/g, ""), // strip spaces
      unit.symbol.toLowerCase().replace("°", "") // temp degree symbol strip
    ];
    
    // Add specific common synonyms
    if (unit.id === "centimeter") keys.push("cm", "cms", "centimeters", "centimeter", "centimetres");
    if (unit.id === "meter") keys.push("m", "meters", "metres");
    if (unit.id === "kilometer") keys.push("km", "kms", "kilometers", "kilometres");
    if (unit.id === "millimeter") keys.push("mm", "mms", "millimeters", "millimetres");
    if (unit.id === "inch") keys.push("in", "inch", "inches", "\"", "inchs");
    if (unit.id === "foot") keys.push("ft", "foot", "feet", "'");
    if (unit.id === "mile") keys.push("mi", "miles");
    
    if (unit.id === "kilogram") keys.push("kg", "kgs", "kilo", "kilograms");
    if (unit.id === "gram") keys.push("g", "gs", "grams");
    if (unit.id === "pound") keys.push("lb", "lbs", "pound", "pounds");
    if (unit.id === "ounce") keys.push("oz", "ozs", "ounce", "ounces");
    if (unit.id === "stone") keys.push("st", "stone", "stones");
    
    if (unit.id === "celsius") keys.push("c", "celcius", "celsius", "°c", "degree c", "degrees c");
    if (unit.id === "fahrenheit") keys.push("f", "fahrenheit", "°f", "degree f", "degrees f");
    if (unit.id === "kelvin") keys.push("k", "kelvin");
    
    if (unit.id === "liter") keys.push("l", "liter", "liters", "litre", "litres");
    if (unit.id === "milliliter") keys.push("ml", "mls", "milliliter", "milliliters", "millilitres");
    if (unit.id === "gallon-us") keys.push("gal", "gallon", "gallons");
    if (unit.id === "cup-us") keys.push("cup", "cups");
    if (unit.id === "fluid-ounce-us") keys.push("fl oz", "fluid ounce", "fluid ounces", "floz");
    
    if (unit.id === "hour") keys.push("h", "hr", "hrs", "hour", "hours");
    if (unit.id === "minute") keys.push("min", "mins", "minute", "minutes");
    if (unit.id === "second") keys.push("s", "sec", "secs", "second", "seconds");
    if (unit.id === "day") keys.push("d", "day", "days");
    
    if (unit.id === "megabyte") keys.push("mb", "mbs", "megabytes", "megs");
    if (unit.id === "gigabyte") keys.push("gb", "gbs", "gigabytes", "gigs");
    if (unit.id === "terabyte") keys.push("tb", "tbs", "terabytes");
    if (unit.id === "kilobyte") keys.push("kb", "kbs", "kilobytes");
    
    keys.forEach(k => {
      if (k) UNIT_SYNONYMS[k.trim()] = { unitId: unit.id, categoryId: cat.id };
    });
  });
});

export interface ParsedSearch {
  value: number;
  fromUnit: Unit;
  toUnit: Unit;
  category: Category;
  result: number;
}

// Client-side NLP parsing for quick search box
export function parseSearchQuery(query: string): ParsedSearch | undefined {
  let cleaned = query.toLowerCase().trim();
  
  // Strip common conversational prefixes
  cleaned = cleaned.replace(/^(convert|what is|how many|show me|find)\s+/i, "");
  
  // Match patterns like "5 miles to km", "5miles to km", "2.5 kg in lbs", "100c = f"
  const regex = /^([\d.-]+)\s*([a-zA-Z°'"\s]+?)\s*(?:\s+(?:to|in|into|=|as)\s+|\s*=\s*|\s+)\s*([a-zA-Z°'"\s]+)$/i;
  
  const match = cleaned.match(regex);
  if (!match) return undefined;
  
  const value = parseFloat(match[1]);
  if (isNaN(value)) return undefined;
  
  const fromRaw = match[2].trim();
  const toRaw = match[3].trim();
  
  const fromResolved = UNIT_SYNONYMS[fromRaw] || UNIT_SYNONYMS[fromRaw.replace(/s$/, "")];
  const toResolved = UNIT_SYNONYMS[toRaw] || UNIT_SYNONYMS[toRaw.replace(/s$/, "")];
  
  if (!fromResolved || !toResolved) return undefined;
  
  // Must be in same category
  if (fromResolved.categoryId !== toResolved.categoryId) return undefined;
  
  const category = getCategory(fromResolved.categoryId);
  if (!category) return undefined;
  
  const fromUnit = category.units.find(u => u.id === fromResolved.unitId);
  const toUnit = category.units.find(u => u.id === toResolved.unitId);
  
  if (!fromUnit || !toUnit) return undefined;
  
  const result = convert(value, fromUnit.id, toUnit.id, category.id);
  
  return {
    value,
    fromUnit,
    toUnit,
    category,
    result
  };
}

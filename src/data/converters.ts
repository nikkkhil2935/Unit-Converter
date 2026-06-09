export interface Unit {
  slug: string;
  id: string; // legacy compatibility
  name: string;
  symbol: string;
  factor: number;
}

export interface Category {
  slug: string;
  id: string; // legacy compatibility
  name: string;
  description: string;
  icon: string;
  color: string;
  baseUnit: string;
  units: Unit[];
  topPairs: [string, string][];
  relatedCategories: string[];
}

export const categories: Category[] = [
  {
    slug: "length",
    id: "length",
    name: "Length",
    description: "Convert between meters, feet, inches, cm, mm, miles, yards, and more length units.",
    icon: "ruler",
    color: "#0070f3",
    baseUnit: "meter",
    units: [
      { slug: "meters", id: "meter", name: "Meter", symbol: "m", factor: 1 },
      { slug: "km", id: "kilometer", name: "Kilometer", symbol: "km", factor: 1000 },
      { slug: "cm", id: "centimeter", name: "Centimeter", symbol: "cm", factor: 0.01 },
      { slug: "mm", id: "millimeter", name: "Millimeter", symbol: "mm", factor: 0.001 },
      { slug: "micrometers", id: "micrometer", name: "Micrometer", symbol: "µm", factor: 1e-6 },
      { slug: "nanometers", id: "nanometer", name: "Nanometer", symbol: "nm", factor: 1e-9 },
      { slug: "miles", id: "mile", name: "Mile", symbol: "mi", factor: 1609.344 },
      { slug: "yards", id: "yard", name: "Yard", symbol: "yd", factor: 0.9144 },
      { slug: "feet", id: "foot", name: "Foot", symbol: "ft", factor: 0.3048 },
      { slug: "inches", id: "inch", name: "Inch", symbol: "in", factor: 0.0254 },
      { slug: "nautical-miles", id: "nautical-mile", name: "Nautical Mile", symbol: "nmi", factor: 1852 },
      { slug: "decimeters", id: "decimeter", name: "Decimeter", symbol: "dm", factor: 0.1 },
      { slug: "gaj", id: "gaj", name: "Gaj", symbol: "gaj", factor: 0.9144 },
      { slug: "hath", id: "hath", name: "Hath (Cubit)", symbol: "hath", factor: 0.4572 },
      { slug: "kosh", id: "kosh", name: "Kosh", symbol: "kosh", factor: 3000 },
      { slug: "furlongs", id: "furlong", name: "Furlong", symbol: "fur", factor: 201.168 },
      { slug: "chains", id: "chain", name: "Chain", symbol: "ch", factor: 20.1168 },
      { slug: "links", id: "link", name: "Link", symbol: "li", factor: 0.201168 },
      { slug: "rods", id: "rod", name: "Rod", symbol: "rd", factor: 5.0292 }
    ],
    topPairs: [
      ["cm", "inches"], ["km", "miles"], ["meters", "feet"],
      ["mm", "inches"], ["feet", "cm"], ["inches", "cm"],
      ["lbs", "kg"], ["meters", "yards"], ["yards", "meters"],
      ["feet", "inches"], ["inches", "feet"]
    ],
    relatedCategories: ["area", "volume", "speed"]
  },
  {
    slug: "weight",
    id: "weight",
    name: "Weight & Mass",
    description: "Convert between kilograms, pounds, ounces, grams, stones, and tons.",
    icon: "weight",
    color: "#7928ca",
    baseUnit: "kilogram",
    units: [
      { slug: "kg", id: "kilogram", name: "Kilogram", symbol: "kg", factor: 1 },
      { slug: "grams", id: "gram", name: "Gram", symbol: "g", factor: 0.001 },
      { slug: "mg", id: "milligram", name: "Milligram", symbol: "mg", factor: 1e-6 },
      { slug: "mcg", id: "microgram", name: "Microgram", symbol: "µg", factor: 1e-9 },
      { slug: "lbs", id: "pound", name: "Pound", symbol: "lb", factor: 0.45359237 },
      { slug: "ounces", id: "ounce", name: "Ounce", symbol: "oz", factor: 0.028349523125 },
      { slug: "stone", id: "stone", name: "Stone", symbol: "st", factor: 6.35029318 },
      { slug: "tons", id: "ton-us", name: "US Ton", symbol: "ton", factor: 907.18474 },
      { slug: "metric-tons", id: "ton-metric", name: "Metric Ton", symbol: "t", factor: 1000 },
      { slug: "carats", id: "carat", name: "Carat", symbol: "ct", factor: 0.0002 }
    ],
    topPairs: [
      ["kg", "lbs"], ["lbs", "kg"], ["grams", "ounces"],
      ["ounces", "grams"], ["lbs", "stone"], ["stone", "lbs"]
    ],
    relatedCategories: ["density", "cooking", "force"]
  },
  {
    slug: "temperature",
    id: "temperature",
    name: "Temperature",
    description: "Convert between Celsius, Fahrenheit, and Kelvin temperature scales.",
    icon: "thermometer",
    color: "#ff4d4d",
    baseUnit: "kelvin",
    units: [
      { slug: "kelvin", id: "kelvin", name: "Kelvin", symbol: "K", factor: 1 },
      { slug: "celsius", id: "celsius", name: "Celsius", symbol: "°C", factor: 1 },
      { slug: "fahrenheit", id: "fahrenheit", name: "Fahrenheit", symbol: "°F", factor: 1 }
    ],
    topPairs: [
      ["celsius", "fahrenheit"], ["fahrenheit", "celsius"],
      ["celsius", "kelvin"], ["kelvin", "celsius"]
    ],
    relatedCategories: ["energy", "pressure", "time"]
  },
  {
    slug: "volume",
    id: "volume",
    name: "Volume",
    description: "Convert between liters, gallons, milliliters, cups, quarts, and cubic units.",
    icon: "beaker",
    color: "#50e3c2",
    baseUnit: "liter",
    units: [
      { slug: "liters", id: "liter", name: "Liter", symbol: "L", factor: 1 },
      { slug: "ml", id: "milliliter", name: "Milliliter", symbol: "mL", factor: 0.001 },
      { slug: "gallons", id: "gallon-us", name: "US Gallon", symbol: "gal", factor: 3.785411784 },
      { slug: "quarts", id: "quart-us", name: "US Quart", symbol: "qt", factor: 0.946352946 },
      { slug: "pints", id: "pint-us", name: "US Pint", symbol: "pt", factor: 0.473176473 },
      { slug: "cups", id: "cup-us", name: "US Cup", symbol: "cup", factor: 0.236588236 },
      { slug: "fluid-ounces", id: "fluid-ounce-us", name: "US Fluid Ounce", symbol: "fl oz", factor: 0.0295735295625 },
      { slug: "tablespoons", id: "tablespoon-us", name: "US Tablespoon", symbol: "tbsp", factor: 0.01478676478125 },
      { slug: "teaspoons", id: "teaspoon-us", name: "US Teaspoon", symbol: "tsp", factor: 0.00492892159375 },
      { slug: "cubic-meters", id: "cubic-meter", name: "Cubic Meter", symbol: "m³", factor: 1000 },
      { slug: "cubic-feet", id: "cubic-foot", name: "Cubic Foot", symbol: "ft³", factor: 28.316846592 },
      { slug: "cubic-inches", id: "cubic-inch", name: "Cubic Inch", symbol: "in³", factor: 0.016387064 }
    ],
    topPairs: [
      ["liters", "gallons"], ["gallons", "liters"],
      ["ml", "fluid-ounces"], ["fluid-ounces", "ml"],
      ["cups", "ml"], ["liters", "cubic-feet"]
    ],
    relatedCategories: ["cooking", "length", "area"]
  },
  {
    slug: "area",
    id: "area",
    name: "Area",
    description: "Convert between square meters, square feet, acres, hectares, and regional land units.",
    icon: "map",
    color: "#eb367f",
    baseUnit: "square-meter",
    units: [
      { slug: "sq-meters", id: "square-meter", name: "Square Meter", symbol: "m²", factor: 1 },
      { slug: "sq-km", id: "square-kilometer", name: "Square Kilometer", symbol: "km²", factor: 1000000 },
      { slug: "sq-cm", id: "square-centimeter", name: "Square Centimeter", symbol: "cm²", factor: 0.0001 },
      { slug: "sq-mm", id: "square-millimeter", name: "Square Millimeter", symbol: "mm²", factor: 0.000001 },
      { slug: "sq-miles", id: "square-mile", name: "Square Mile", symbol: "mi²", factor: 2589988.11 },
      { slug: "sq-yards", id: "square-yard", name: "Square Yard", symbol: "yd²", factor: 0.83612736 },
      { slug: "sqft", id: "square-foot", name: "Square Foot", symbol: "ft²", factor: 0.09290304 },
      { slug: "sq-inches", id: "square-inch", name: "Square Inch", symbol: "in²", factor: 0.00064516 },
      { slug: "acres", id: "acre", name: "Acre", symbol: "ac", factor: 4046.8564224 },
      { slug: "hectares", id: "hectare", name: "Hectare", symbol: "ha", factor: 10000 },
      { slug: "cents", id: "cent", name: "Cent", symbol: "cent", factor: 40.468564224 },
      { slug: "gunthas", id: "guntha", name: "Guntha", symbol: "guntha", factor: 101.17141056 },
      { slug: "grounds", id: "ground", name: "Ground", symbol: "ground", factor: 222.967296 },
      { slug: "kanals", id: "kanal", name: "Kanal", symbol: "kanal", factor: 505.8570528 },
      { slug: "marlas", id: "marla", name: "Marla", symbol: "marla", factor: 25.29285264 },
      { slug: "bigha-standard", id: "bigha-standard", name: "Bigha (Standard)", symbol: "bigha", factor: 2529.285264 },
      { slug: "bigha-bengal", id: "bigha-bengal", name: "Bigha (Bengal)", symbol: "bigha (Bengal)", factor: 1337.803776 },
      { slug: "katha-bengal", id: "katha-bengal", name: "Katha (Bengal)", symbol: "katha (Bengal)", factor: 66.8901888 },
      { slug: "katha-bihar", id: "katha-bihar", name: "Katha (Bihar)", symbol: "katha (Bihar)", factor: 126.4642632 },
      { slug: "biswa", id: "biswa", name: "Biswa", symbol: "biswa", factor: 126.4642632 },
      { slug: "sq-gaj", id: "gaj", name: "Gaj", symbol: "gaj", factor: 0.83612736 },
      { slug: "ankanam", id: "ankanam", name: "Ankanam", symbol: "ankanam", factor: 6.68901888 },
      { slug: "roods", id: "rood", name: "Rood", symbol: "rood", factor: 1011.7141056 },
      { slug: "dhur", id: "dhur", name: "Dhur (Bihar)", symbol: "dhur", factor: 6.3232 },
      { slug: "chatak", id: "chatak", name: "Chatak (Bengal)", symbol: "chatak", factor: 16.7225 },
      { slug: "lessa", id: "lessa", name: "Lessa (Assam)", symbol: "lessa", factor: 13.378 },
      { slug: "killa", id: "killa", name: "Killa (Punjab)", symbol: "killa", factor: 4046.8564224 },
      { slug: "pura", id: "pura", name: "Pura (Assam)", symbol: "pura", factor: 5351.215 },
      { slug: "tsubo", id: "tsubo", name: "Tsubo (Japan)", symbol: "tsubo", factor: 3.30578 },
      { slug: "mu", id: "mu", name: "Mu (China)", symbol: "mu", factor: 666.6667 },
      { slug: "rai", id: "rai", name: "Rai (Thailand)", symbol: "rai", factor: 1600 },
      { slug: "ngan", id: "ngan", name: "Ngan (Thailand)", symbol: "ngan", factor: 400 },
      { slug: "dunam", id: "dunam", name: "Dunam (Metric)", symbol: "dunam", factor: 1000 },
      { slug: "feddan", id: "feddan", name: "Feddan (Egypt)", symbol: "feddan", factor: 4200.83 }
    ],
    topPairs: [
      ["sq-meters", "sqft"], ["sqft", "sq-meters"],
      ["acres", "sqft"], ["hectares", "acres"],
      ["sq-miles", "sq-km"], ["sq-meters", "acres"]
    ],
    relatedCategories: ["length", "volume", "typography"]
  },
  {
    slug: "speed",
    id: "speed",
    name: "Speed",
    description: "Convert speed units including mph, km/h, knots, and mach.",
    icon: "speedometer",
    color: "#00dfd8",
    baseUnit: "meter-per-second",
    units: [
      { slug: "m-s", id: "meter-per-second", name: "Meter per Second", symbol: "m/s", factor: 1 },
      { slug: "kph", id: "kilometer-per-hour", name: "Kilometer per Hour", symbol: "km/h", factor: 1 / 3.6 },
      { slug: "mph", id: "mile-per-hour", name: "Mile per Hour", symbol: "mph", factor: 0.44704 },
      { slug: "knots", id: "knot", name: "Knot", symbol: "kn", factor: 0.514444 },
      { slug: "mach", id: "mach", name: "Mach", symbol: "Mach", factor: 340.3 }
    ],
    topPairs: [
      ["kph", "mph"], ["mph", "kph"],
      ["m-s", "kph"], ["knots", "mph"]
    ],
    relatedCategories: ["time", "torque", "flow-rate"]
  },
  {
    slug: "time",
    id: "time",
    name: "Time",
    description: "Convert time measurements like seconds, minutes, hours, days, weeks, and years.",
    icon: "clock",
    color: "#f9cb28",
    baseUnit: "second",
    units: [
      { slug: "seconds", id: "second", name: "Second", symbol: "s", factor: 1 },
      { slug: "milliseconds", id: "millisecond", name: "Millisecond", symbol: "ms", factor: 0.001 },
      { slug: "microseconds", id: "microsecond", name: "Microsecond", symbol: "µs", factor: 1e-6 },
      { slug: "nanoseconds", id: "nanosecond", name: "Nanosecond", symbol: "ns", factor: 1e-9 },
      { slug: "minutes", id: "minute", name: "Minute", symbol: "min", factor: 60 },
      { slug: "hours", id: "hour", name: "Hour", symbol: "h", factor: 3600 },
      { slug: "days", id: "day", name: "Day", symbol: "d", factor: 86400 },
      { slug: "weeks", id: "week", name: "Week", symbol: "wk", factor: 604800 },
      { slug: "months", id: "month", name: "Month (Avg)", symbol: "mo", factor: 2629743.83 },
      { slug: "years", id: "year", name: "Year", symbol: "yr", factor: 31556925.96 }
    ],
    topPairs: [
      ["hours", "minutes"], ["minutes", "seconds"],
      ["days", "hours"], ["weeks", "days"], ["years", "months"]
    ],
    relatedCategories: ["speed", "frequency", "data-transfer"]
  },
  {
    slug: "data",
    id: "data",
    name: "Data Storage",
    description: "Convert between bits, bytes, kilobytes, megabytes, gigabytes, and terabytes.",
    icon: "database",
    color: "#0070f3",
    baseUnit: "byte",
    units: [
      { slug: "bits", id: "bit", name: "Bit", symbol: "b", factor: 0.125 },
      { slug: "bytes", id: "byte", name: "Byte", symbol: "B", factor: 1 },
      { slug: "kb", id: "kilobyte", name: "Kilobyte", symbol: "KB", factor: 1000 },
      { slug: "mb", id: "megabyte", name: "Megabyte", symbol: "MB", factor: 1000000 },
      { slug: "gb", id: "gigabyte", name: "Gigabyte", symbol: "GB", factor: 1000000000 },
      { slug: "tb", id: "terabyte", name: "Terabyte", symbol: "TB", factor: 1000000000000 },
      { slug: "pb", id: "petabyte", name: "Petabyte", symbol: "PB", factor: 1000000000000000 }
    ],
    topPairs: [
      ["mb", "gb"], ["gb", "tb"], ["kb", "mb"],
      ["bytes", "kb"], ["gb", "mb"]
    ],
    relatedCategories: ["data-transfer", "typography", "time"]
  },
  {
    slug: "energy",
    id: "energy",
    name: "Energy",
    description: "Convert energy values between joules, calories, watt-hours, and BTUs.",
    icon: "zap",
    color: "#ff0080",
    baseUnit: "joule",
    units: [
      { slug: "joules", id: "joule", name: "Joule", symbol: "J", factor: 1 },
      { slug: "kj", id: "kilojoule", name: "Kilojoule", symbol: "kJ", factor: 1000 },
      { slug: "calories", id: "calorie", name: "Calorie", symbol: "cal", factor: 4.184 },
      { slug: "kcal", id: "kilocalorie", name: "Kilocalorie", symbol: "kcal", factor: 4184 },
      { slug: "wh", id: "watt-hour", name: "Watt-hour", symbol: "Wh", factor: 3600 },
      { slug: "kwh", id: "kilowatt-hour", name: "Kilowatt-hour", symbol: "kWh", factor: 3600000 },
      { slug: "btu", id: "btu", name: "BTU", symbol: "BTU", factor: 1055.056 },
      { slug: "therms", id: "therm", name: "Therm", symbol: "therm", factor: 1.055e8 }
    ],
    topPairs: [
      ["joules", "calories"], ["kwh", "joules"],
      ["kcal", "joules"], ["btu", "kwh"]
    ],
    relatedCategories: ["power", "pressure", "temperature"]
  },
  {
    slug: "pressure",
    id: "pressure",
    name: "Pressure",
    description: "Convert pressure units including pascals, bar, PSI, and atmospheres.",
    icon: "gauge",
    color: "#eb367f",
    baseUnit: "pascal",
    units: [
      { slug: "pascals", id: "pascal", name: "Pascal", symbol: "Pa", factor: 1 },
      { slug: "kpa", id: "kilopascal", name: "Kilopascal", symbol: "kPa", factor: 1000 },
      { slug: "bar", id: "bar", name: "Bar", symbol: "bar", factor: 100000 },
      { slug: "mbar", id: "millibar", name: "Millibar", symbol: "mbar", factor: 100 },
      { slug: "psi", id: "psi", name: "PSI (Pounds/sq in)", symbol: "psi", factor: 6894.75729 },
      { slug: "atm", id: "atmosphere", name: "Atmosphere", symbol: "atm", factor: 101325 },
      { slug: "torr", id: "torr", name: "Torr", symbol: "Torr", factor: 133.322368 }
    ],
    topPairs: [
      ["psi", "bar"], ["bar", "psi"],
      ["atm", "pascals"], ["kpa", "psi"]
    ],
    relatedCategories: ["force", "torque", "density"]
  },
  {
    slug: "angle",
    id: "angle",
    name: "Angle",
    description: "Convert angular measurements between degrees, radians, and gradians.",
    icon: "angle",
    color: "#50e3c2",
    baseUnit: "degree",
    units: [
      { slug: "degrees", id: "degree", name: "Degree", symbol: "°", factor: 1 },
      { slug: "radians", id: "radian", name: "Radian", symbol: "rad", factor: 180 / Math.PI },
      { slug: "gradians", id: "gradian", name: "Gradian", symbol: "grad", factor: 0.9 },
      { slug: "arcminutes", id: "arcminute", name: "Arcminute", symbol: "arcmin", factor: 1 / 60 },
      { slug: "arcseconds", id: "arcsecond", name: "Arcsecond", symbol: "arcsec", factor: 1 / 3600 }
    ],
    topPairs: [
      ["degrees", "radians"], ["radians", "degrees"],
      ["degrees", "gradians"]
    ],
    relatedCategories: ["typography", "length", "area"]
  },
  {
    slug: "power",
    id: "power",
    name: "Power",
    description: "Convert power metrics like watts, kilowatts, and horsepower.",
    icon: "zap",
    color: "#ff4d4d",
    baseUnit: "watt",
    units: [
      { slug: "watts", id: "watt", name: "Watt", symbol: "W", factor: 1 },
      { slug: "kw", id: "kilowatt", name: "Kilowatt", symbol: "kW", factor: 1000 },
      { slug: "mw", id: "megawatt", name: "Megawatt", symbol: "MW", factor: 1000000 },
      { slug: "hp", id: "horsepower", name: "Horsepower (HP)", symbol: "hp", factor: 745.699872 },
      { slug: "btu-hr", id: "btu-per-hour", name: "BTU per Hour", symbol: "BTU/h", factor: 0.293071 }
    ],
    topPairs: [
      ["kw", "hp"], ["hp", "kw"],
      ["watts", "kw"]
    ],
    relatedCategories: ["energy", "voltage", "current"]
  },
  {
    slug: "force",
    id: "force",
    name: "Force",
    description: "Convert force units such as newtons, dynes, and pound-force.",
    icon: "activity",
    color: "#7928ca",
    baseUnit: "newton",
    units: [
      { slug: "newtons", id: "newton", name: "Newton", symbol: "N", factor: 1 },
      { slug: "kn", id: "kilonewton", name: "Kilonewton", symbol: "kN", factor: 1000 },
      { slug: "dynes", id: "dyne", name: "Dyne", symbol: "dyn", factor: 0.00001 },
      { slug: "lbf", id: "pound-force", name: "Pound-force", symbol: "lbf", factor: 4.448222 },
      { slug: "kgf", id: "kilogram-force", name: "Kilogram-force", symbol: "kgf", factor: 9.80665 }
    ],
    topPairs: [
      ["newtons", "lbf"], ["lbf", "newtons"],
      ["kn", "newtons"]
    ],
    relatedCategories: ["weight", "pressure", "torque"]
  },
  {
    slug: "frequency",
    id: "frequency",
    name: "Frequency",
    description: "Convert frequencies between hertz, kilohertz, megahertz, and gigahertz.",
    icon: "pulse",
    color: "#00dfd8",
    baseUnit: "hertz",
    units: [
      { slug: "hertz", id: "hertz", name: "Hertz", symbol: "Hz", factor: 1 },
      { slug: "khz", id: "kilohertz", name: "Kilohertz", symbol: "kHz", factor: 1000 },
      { slug: "mhz", id: "megahertz", name: "Megahertz", symbol: "MHz", factor: 1000000 },
      { slug: "ghz", id: "gigahertz", name: "Gigahertz", symbol: "GHz", factor: 1000000000 },
      { slug: "rpm", id: "rpm", name: "RPM (Revolutions/min)", symbol: "rpm", factor: 1 / 60 }
    ],
    topPairs: [
      ["hertz", "khz"], ["mhz", "ghz"],
      ["rpm", "hertz"]
    ],
    relatedCategories: ["time", "speed", "data-transfer"]
  },
  {
    slug: "torque",
    id: "torque",
    name: "Torque",
    description: "Convert torque metrics between newton-meters and pound-feet.",
    icon: "settings",
    color: "#ff0080",
    baseUnit: "newton-meter",
    units: [
      { slug: "nm", id: "newton-meter", name: "Newton-meter", symbol: "N·m", factor: 1 },
      { slug: "lb-ft", id: "pound-foot", name: "Pound-foot", symbol: "lb·ft", factor: 1.355818 },
      { slug: "lb-in", id: "pound-inch", name: "Pound-inch", symbol: "lb·in", factor: 0.1129848 },
      { slug: "kg-m", id: "kilogram-meter", name: "Kilogram-meter", symbol: "kg·m", factor: 9.80665 }
    ],
    topPairs: [
      ["nm", "lb-ft"], ["lb-ft", "nm"]
    ],
    relatedCategories: ["force", "pressure", "power"]
  },
  {
    slug: "density",
    id: "density",
    name: "Density",
    description: "Convert density values like g/cm³ and kilograms per cubic meter.",
    icon: "box",
    color: "#0070f3",
    baseUnit: "kilogram-per-cubic-meter",
    units: [
      { slug: "kg-m3", id: "kilogram-per-cubic-meter", name: "Kilogram / Cubic Meter", symbol: "kg/m³", factor: 1 },
      { slug: "g-cm3", id: "gram-per-cubic-centimeter", name: "Gram / Cubic Centimeter", symbol: "g/cm³", factor: 1000 },
      { slug: "lb-ft3", id: "pound-per-cubic-foot", name: "Pound / Cubic Foot", symbol: "lb/ft³", factor: 16.018463 },
      { slug: "lb-in3", id: "pound-per-cubic-inch", name: "Pound / Cubic Inch", symbol: "lb/in³", factor: 27679.9 }
    ],
    topPairs: [
      ["kg-m3", "g-cm3"], ["lb-ft3", "kg-m3"]
    ],
    relatedCategories: ["weight", "volume", "flow-rate"]
  },
  {
    slug: "flow-rate",
    id: "flow-rate",
    name: "Flow Rate",
    description: "Convert flow rate values including liters per minute and GPM.",
    icon: "droplet",
    color: "#50e3c2",
    baseUnit: "liter-per-minute",
    units: [
      { slug: "l-min", id: "liter-per-minute", name: "Liter / Minute", symbol: "L/min", factor: 1 },
      { slug: "l-s", id: "liter-per-second", name: "Liter / Second", symbol: "L/s", factor: 60 },
      { slug: "m3-s", id: "cubic-meter-per-second", name: "Cubic Meter / Second", symbol: "m³/s", factor: 60000 },
      { slug: "gpm", id: "gallon-per-minute-us", name: "US Gallon / Minute", symbol: "gpm", factor: 3.785412 },
      { slug: "cfs", id: "cubic-foot-per-second", name: "Cubic Foot / Second", symbol: "cfs", factor: 1699.011 }
    ],
    topPairs: [
      ["l-min", "gpm"], ["m3-s", "l-s"]
    ],
    relatedCategories: ["volume", "speed", "density"]
  },
  {
    slug: "fuel-consumption",
    id: "fuel-consumption",
    name: "Fuel Consumption",
    description: "Convert fuel economy ratings like MPG and L/100km.",
    icon: "activity",
    color: "#ff4d4d",
    baseUnit: "l100km",
    units: [
      { slug: "l100km", id: "l100km", name: "Liters / 100 Kilometers", symbol: "L/100km", factor: 1 },
      { slug: "mpg-us", id: "mpg-us", name: "Miles per Gallon (US)", symbol: "mpg (US)", factor: 1 },
      { slug: "mpg-uk", id: "mpg-uk", name: "Miles per Gallon (UK)", symbol: "mpg (UK)", factor: 1 },
      { slug: "km-l", id: "km-l", name: "Kilometers / Liter", symbol: "km/L", factor: 1 }
    ],
    topPairs: [
      ["mpg-us", "l100km"], ["l100km", "mpg-us"],
      ["mpg-us", "mpg-uk"], ["km-l", "mpg-us"]
    ],
    relatedCategories: ["speed", "volume", "energy"]
  },
  {
    slug: "illumination",
    id: "illumination",
    name: "Illumination",
    description: "Convert illumination levels between lux, foot-candles, and phots.",
    icon: "sun",
    color: "#f9cb28",
    baseUnit: "lux",
    units: [
      { slug: "lux", id: "lux", name: "Lux", symbol: "lx", factor: 1 },
      { slug: "foot-candle", id: "foot-candle", name: "Foot-candle", symbol: "fc", factor: 10.76391 },
      { slug: "phot", id: "phot", name: "Phot", symbol: "ph", factor: 10000 }
    ],
    topPairs: [
      ["lux", "foot-candle"], ["foot-candle", "lux"]
    ],
    relatedCategories: ["power", "voltage", "energy"]
  },
  {
    slug: "typography",
    id: "typography",
    name: "Typography",
    description: "Convert typographical measurements between pixels, points, and picas.",
    icon: "type",
    color: "#eb367f",
    baseUnit: "point",
    units: [
      { slug: "points", id: "point", name: "Point (DTP)", symbol: "pt", factor: 1 },
      { slug: "picas", id: "pica", name: "Pica (DTP)", symbol: "pc", factor: 12 },
      { slug: "pixels", id: "pixel", name: "Pixel", symbol: "px", factor: 0.75 },
      { slug: "inches", id: "inch", name: "Inch", symbol: "in", factor: 72 },
      { slug: "mm", id: "millimeter", name: "Millimeter", symbol: "mm", factor: 2.83464567 }
    ],
    topPairs: [
      ["pixels", "points"], ["points", "pixels"],
      ["inches", "pixels"]
    ],
    relatedCategories: ["length", "area", "data"]
  },
  {
    slug: "cooking",
    id: "cooking",
    name: "Cooking (Volume)",
    description: "Convert cooking units between cups, tablespoons, teaspoons, and milliliters.",
    icon: "cook",
    color: "#50e3c2",
    baseUnit: "cup-us",
    units: [
      { slug: "cups", id: "cup-us", name: "US Cup", symbol: "cup", factor: 1 },
      { slug: "tablespoons", id: "tablespoon-us", name: "US Tablespoon", symbol: "tbsp", factor: 1 / 16 },
      { slug: "teaspoons", id: "teaspoon-us", name: "US Teaspoon", symbol: "tsp", factor: 1 / 48 },
      { slug: "ml", id: "milliliter", name: "Milliliter", symbol: "mL", factor: 1 / 236.588236 },
      { slug: "fluid-ounces", id: "fluid-ounce-us", name: "US Fluid Ounce", symbol: "fl oz", factor: 1 / 8 },
      { slug: "pints", id: "pint-us", name: "US Pint", symbol: "pt", factor: 2 },
      { slug: "quarts", id: "quart-us", name: "US Quart", symbol: "qt", factor: 4 },
      { slug: "gallons", id: "gallon-us", name: "US Gallon", symbol: "gal", factor: 16 }
    ],
    topPairs: [
      ["cups", "ml"], ["tablespoons", "teaspoons"],
      ["fluid-ounces", "cups"], ["ml", "tablespoons"]
    ],
    relatedCategories: ["volume", "weight", "temperature"]
  },
  {
    slug: "data-transfer",
    id: "data-transfer",
    name: "Data Transfer Rate",
    description: "Convert data rates like bits per second, megabits per second, and bytes per second.",
    icon: "globe",
    color: "#0070f3",
    baseUnit: "bps",
    units: [
      { slug: "bps", id: "bps", name: "Bit per Second", symbol: "bps", factor: 1 },
      { slug: "kbps", id: "kbps", name: "Kilobit per Second", symbol: "kbps", factor: 1000 },
      { slug: "mbps", id: "Mbps", name: "Megabit per Second", symbol: "Mbps", factor: 1000000 },
      { slug: "gbps", id: "Gbps", name: "Gigabit per Second", symbol: "Gbps", factor: 1000000000 },
      { slug: "tbps", id: "Tbps", name: "Terabit per Second", symbol: "Tbps", factor: 1000000000000 },
      { slug: "Bps", id: "Bps", name: "Byte per Second", symbol: "B/s", factor: 8 },
      { slug: "KBps", id: "KBps", name: "Kilobyte per Second", symbol: "KB/s", factor: 8000 },
      { slug: "MBps", id: "MBps", name: "Megabyte per Second", symbol: "MB/s", factor: 8000000 },
      { slug: "GBps", id: "GBps", name: "Gigabyte per Second", symbol: "GB/s", factor: 8000000000 },
      { slug: "TBps", id: "TBps", name: "Terabyte per Second", symbol: "TB/s", factor: 8000000000000 }
    ],
    topPairs: [
      ["mbps", "gbps"], ["kbps", "mbps"],
      ["MBps", "mbps"], ["mbps", "MBps"]
    ],
    relatedCategories: ["data", "time", "frequency"]
  },
  {
    slug: "voltage",
    id: "voltage",
    name: "Electric Voltage",
    description: "Convert electrical voltage including volts, millivolts, and kilovolts.",
    icon: "bolt",
    color: "#ff0080",
    baseUnit: "volt",
    units: [
      { slug: "volts", id: "volt", name: "Volt", symbol: "V", factor: 1 },
      { slug: "millivolts", id: "millivolt", name: "Millivolt", symbol: "mV", factor: 0.001 },
      { slug: "microvolts", id: "microvolt", name: "Microvolt", symbol: "µV", factor: 0.000001 },
      { slug: "kilovolts", id: "kilovolt", name: "Kilovolt", symbol: "kV", factor: 1000 },
      { slug: "megavolts", id: "megavolt", name: "Megavolt", symbol: "MV", factor: 1000000 }
    ],
    topPairs: [
      ["volts", "millivolts"], ["millivolts", "volts"],
      ["kilovolts", "volts"]
    ],
    relatedCategories: ["current", "power", "illumination"]
  },
  {
    slug: "current",
    id: "current",
    name: "Electric Current",
    description: "Convert electric current measurements between amperes, milliamperes, and microamperes.",
    icon: "activity",
    color: "#00dfd8",
    baseUnit: "ampere",
    units: [
      { slug: "amps", id: "ampere", name: "Ampere", symbol: "A", factor: 1 },
      { slug: "milliamps", id: "milliampere", name: "Milliampere", symbol: "mA", factor: 0.001 },
      { slug: "microamps", id: "microampere", name: "Microampere", symbol: "µA", factor: 0.000001 },
      { slug: "kiloamps", id: "kiloampere", name: "Kiloampere", symbol: "kA", factor: 1000 }
    ],
    topPairs: [
      ["amps", "milliamps"], ["milliamps", "amps"],
      ["microamps", "milliamps"]
    ],
    relatedCategories: ["voltage", "power", "illumination"]
  }
];

export function getAllPairs() {
  const pairs: { category: Category; from: Unit; to: Unit; slug: string }[] = [];
  for (const category of categories) {
    const units = category.units;
    for (let i = 0; i < units.length; i++) {
      for (let j = 0; j < units.length; j++) {
        if (i !== j) {
          pairs.push({
            category,
            from: units[i],
            to: units[j],
            slug: `${units[i].slug}-to-${units[j].slug}`
          });
        }
      }
    }
  }
  return pairs;
}

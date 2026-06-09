export interface Unit {
  id: string;
  name: string;
  symbol: string;
  factor: number; // multiply by this to convert to base unit
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  baseUnit: string;
  units: Unit[];
  popularPairs: [string, string][];
}

export const categories: Category[] = [
  {
    id: "length",
    name: "Length",
    icon: "📏",
    description: "Meters, feet, inches, miles, kilometers, and more",
    baseUnit: "meter",
    units: [
      { id: "meter", name: "Meter", symbol: "m", factor: 1 },
      { id: "kilometer", name: "Kilometer", symbol: "km", factor: 1000 },
      { id: "centimeter", name: "Centimeter", symbol: "cm", factor: 0.01 },
      { id: "millimeter", name: "Millimeter", symbol: "mm", factor: 0.001 },
      { id: "micrometer", name: "Micrometer", symbol: "µm", factor: 1e-6 },
      { id: "nanometer", name: "Nanometer", symbol: "nm", factor: 1e-9 },
      { id: "mile", name: "Mile", symbol: "mi", factor: 1609.344 },
      { id: "yard", name: "Yard", symbol: "yd", factor: 0.9144 },
      { id: "foot", name: "Foot", symbol: "ft", factor: 0.3048 },
      { id: "inch", name: "Inch", symbol: "in", factor: 0.0254 },
      { id: "nautical-mile", name: "Nautical Mile", symbol: "nmi", factor: 1852 },
      { id: "decimeter", name: "Decimeter", symbol: "dm", factor: 0.1 },
      { id: "gaj", name: "Gaj", symbol: "gaj", factor: 0.9144 },
      { id: "hath", name: "Hath (Cubit)", symbol: "hath", factor: 0.4572 },
      { id: "kosh", name: "Kosh", symbol: "kosh", factor: 3000 },
      { id: "furlong", name: "Furlong", symbol: "fur", factor: 201.168 },
      { id: "chain", name: "Chain", symbol: "ch", factor: 20.1168 },
      { id: "link", name: "Link", symbol: "li", factor: 0.201168 },
      { id: "rod", name: "Rod", symbol: "rd", factor: 5.0292 }
    ],
    popularPairs: [
      ["centimeter", "inch"],
      ["meter", "foot"],
      ["kilometer", "mile"],
      ["mile", "kilometer"],
      ["inch", "centimeter"],
      ["foot", "meter"]
    ]
  },
  {
    id: "weight",
    name: "Weight & Mass",
    icon: "⚖️",
    description: "Kilograms, pounds, ounces, grams, and tons",
    baseUnit: "kilogram",
    units: [
      { id: "kilogram", name: "Kilogram", symbol: "kg", factor: 1 },
      { id: "gram", name: "Gram", symbol: "g", factor: 0.001 },
      { id: "milligram", name: "Milligram", symbol: "mg", factor: 1e-6 },
      { id: "microgram", name: "Microgram", symbol: "µg", factor: 1e-9 },
      { id: "pound", name: "Pound", symbol: "lb", factor: 0.45359237 },
      { id: "ounce", name: "Ounce", symbol: "oz", factor: 0.028349523125 },
      { id: "stone", name: "Stone", symbol: "st", factor: 6.35029318 },
      { id: "ton-us", name: "US Ton", symbol: "ton", factor: 907.18474 },
      { id: "ton-metric", name: "Metric Ton", symbol: "t", factor: 1000 },
      { id: "carat", name: "Carat", symbol: "ct", factor: 0.0002 }
    ],
    popularPairs: [
      ["kilogram", "pound"],
      ["pound", "kilogram"],
      ["gram", "ounce"],
      ["ounce", "gram"],
      ["pound", "stone"],
      ["stone", "pound"]
    ]
  },
  {
    id: "temperature",
    name: "Temperature",
    icon: "🌡️",
    description: "Celsius, Fahrenheit, and Kelvin",
    baseUnit: "kelvin",
    units: [
      { id: "kelvin", name: "Kelvin", symbol: "K", factor: 1 },
      { id: "celsius", name: "Celsius", symbol: "°C", factor: 1 },
      { id: "fahrenheit", name: "Fahrenheit", symbol: "°F", factor: 1 }
    ],
    popularPairs: [
      ["celsius", "fahrenheit"],
      ["fahrenheit", "celsius"],
      ["celsius", "kelvin"],
      ["kelvin", "celsius"]
    ]
  },
  {
    id: "volume",
    name: "Volume",
    icon: "🧪",
    description: "Liters, gallons, milliliters, cups, and cubic units",
    baseUnit: "liter",
    units: [
      { id: "liter", name: "Liter", symbol: "L", factor: 1 },
      { id: "milliliter", name: "Milliliter", symbol: "mL", factor: 0.001 },
      { id: "gallon-us", name: "US Gallon", symbol: "gal", factor: 3.785411784 },
      { id: "quart-us", name: "US Quart", symbol: "qt", factor: 0.946352946 },
      { id: "pint-us", name: "US Pint", symbol: "pt", factor: 0.473176473 },
      { id: "cup-us", name: "US Cup", symbol: "cup", factor: 0.236588236 },
      { id: "fluid-ounce-us", name: "US Fluid Ounce", symbol: "fl oz", factor: 0.0295735295625 },
      { id: "tablespoon-us", name: "US Tablespoon", symbol: "tbsp", factor: 0.01478676478125 },
      { id: "teaspoon-us", name: "US Teaspoon", symbol: "tsp", factor: 0.00492892159375 },
      { id: "cubic-meter", name: "Cubic Meter", symbol: "m³", factor: 1000 },
      { id: "cubic-foot", name: "Cubic Foot", symbol: "ft³", factor: 28.316846592 },
      { id: "cubic-inch", name: "Cubic Inch", symbol: "in³", factor: 0.016387064 }
    ],
    popularPairs: [
      ["liter", "gallon-us"],
      ["gallon-us", "liter"],
      ["milliliter", "fluid-ounce-us"],
      ["fluid-ounce-us", "milliliter"],
      ["cup-us", "milliliter"],
      ["liter", "cubic-foot"]
    ]
  },
  {
    id: "area",
    name: "Area",
    icon: "🗺️",
    description: "Square meters, square feet, acres, and hectares",
    baseUnit: "square-meter",
    units: [
      { id: "square-meter", name: "Square Meter", symbol: "m²", factor: 1 },
      { id: "square-kilometer", name: "Square Kilometer", symbol: "km²", factor: 1000000 },
      { id: "square-centimeter", name: "Square Centimeter", symbol: "cm²", factor: 0.0001 },
      { id: "square-millimeter", name: "Square Millimeter", symbol: "mm²", factor: 0.000001 },
      { id: "square-mile", name: "Square Mile", symbol: "mi²", factor: 2589988.11 },
      { id: "square-yard", name: "Square Yard", symbol: "yd²", factor: 0.83612736 },
      { id: "square-foot", name: "Square Foot", symbol: "ft²", factor: 0.09290304 },
      { id: "square-inch", name: "Square Inch", symbol: "in²", factor: 0.00064516 },
      { id: "acre", name: "Acre", symbol: "ac", factor: 4046.8564224 },
      { id: "hectare", name: "Hectare", symbol: "ha", factor: 10000 },
      { id: "cent", name: "Cent", symbol: "cent", factor: 40.468564224 },
      { id: "guntha", name: "Guntha", symbol: "guntha", factor: 101.17141056 },
      { id: "ground", name: "Ground", symbol: "ground", factor: 222.967296 },
      { id: "kanal", name: "Kanal", symbol: "kanal", factor: 505.8570528 },
      { id: "marla", name: "Marla", symbol: "marla", factor: 25.29285264 },
      { id: "bigha-standard", name: "Bigha (Standard)", symbol: "bigha", factor: 2529.285264 },
      { id: "bigha-bengal", name: "Bigha (Bengal)", symbol: "bigha (Bengal)", factor: 1337.803776 },
      { id: "katha-bengal", name: "Katha (Bengal)", symbol: "katha (Bengal)", factor: 66.8901888 },
      { id: "katha-bihar", name: "Katha (Bihar)", symbol: "katha (Bihar)", factor: 126.4642632 },
      { id: "biswa", name: "Biswa", symbol: "biswa", factor: 126.4642632 },
      { id: "gaj", name: "Gaj", symbol: "gaj", factor: 0.83612736 },
      { id: "ankanam", name: "Ankanam", symbol: "ankanam", factor: 6.68901888 },
      { id: "rood", name: "Rood", symbol: "rood", factor: 1011.7141056 },
      { id: "dhur", name: "Dhur (Bihar)", symbol: "dhur", factor: 6.3232 },
      { id: "chatak", name: "Chatak (Bengal)", symbol: "chatak", factor: 16.7225 },
      { id: "lessa", name: "Lessa (Assam)", symbol: "lessa", factor: 13.378 },
      { id: "killa", name: "Killa (Punjab)", symbol: "killa", factor: 4046.8564224 },
      { id: "pura", name: "Pura (Assam)", symbol: "pura", factor: 5351.215 },
      { id: "tsubo", name: "Tsubo (Japan)", symbol: "tsubo", factor: 3.30578 },
      { id: "mu", name: "Mu (China)", symbol: "mu", factor: 666.6667 },
      { id: "rai", name: "Rai (Thailand)", symbol: "rai", factor: 1600 },
      { id: "ngan", name: "Ngan (Thailand)", symbol: "ngan", factor: 400 },
      { id: "dunam", name: "Dunam (Metric)", symbol: "dunam", factor: 1000 },
      { id: "feddan", name: "Feddan (Egypt)", symbol: "feddan", factor: 4200.83 }
    ],
    popularPairs: [
      ["square-meter", "square-foot"],
      ["square-foot", "square-meter"],
      ["acre", "square-foot"],
      ["hectare", "acre"],
      ["square-mile", "square-kilometer"],
      ["square-meter", "acre"]
    ]
  },
  {
    id: "speed",
    name: "Speed",
    icon: "⚡",
    description: "Mph, km/h, knots, and mach",
    baseUnit: "meter-per-second",
    units: [
      { id: "meter-per-second", name: "Meter per Second", symbol: "m/s", factor: 1 },
      { id: "kilometer-per-hour", name: "Kilometer per Hour", symbol: "km/h", factor: 1 / 3.6 },
      { id: "mile-per-hour", name: "Mile per Hour", symbol: "mph", factor: 0.44704 },
      { id: "knot", name: "Knot", symbol: "kn", factor: 0.514444 },
      { id: "mach", name: "Mach", symbol: "Mach", factor: 340.3 }
    ],
    popularPairs: [
      ["kilometer-per-hour", "mile-per-hour"],
      ["mile-per-hour", "kilometer-per-hour"],
      ["meter-per-second", "kilometer-per-hour"],
      ["knot", "mph"]
    ]
  },
  {
    id: "time",
    name: "Time",
    icon: "⏱️",
    description: "Seconds, minutes, hours, days, and weeks",
    baseUnit: "second",
    units: [
      { id: "second", name: "Second", symbol: "s", factor: 1 },
      { id: "millisecond", name: "Millisecond", symbol: "ms", factor: 0.001 },
      { id: "microsecond", name: "Microsecond", symbol: "µs", factor: 1e-6 },
      { id: "nanosecond", name: "Nanosecond", symbol: "ns", factor: 1e-9 },
      { id: "minute", name: "Minute", symbol: "min", factor: 60 },
      { id: "hour", name: "Hour", symbol: "h", factor: 3600 },
      { id: "day", name: "Day", symbol: "d", factor: 86400 },
      { id: "week", name: "Week", symbol: "wk", factor: 604800 },
      { id: "month", name: "Month (Avg)", symbol: "mo", factor: 2629743.83 },
      { id: "year", name: "Year", symbol: "yr", factor: 31556925.96 }
    ],
    popularPairs: [
      ["hour", "minute"],
      ["minute", "second"],
      ["day", "hour"],
      ["week", "day"],
      ["year", "month"]
    ]
  },
  {
    id: "data",
    name: "Data Storage",
    icon: "💾",
    description: "Bits, bytes, kilobytes, megabytes, gigabytes, and terabytes",
    baseUnit: "byte",
    units: [
      { id: "bit", name: "Bit", symbol: "b", factor: 0.125 },
      { id: "byte", name: "Byte", symbol: "B", factor: 1 },
      { id: "kilobyte", name: "Kilobyte", symbol: "KB", factor: 1000 },
      { id: "megabyte", name: "Megabyte", symbol: "MB", factor: 1000000 },
      { id: "gigabyte", name: "Gigabyte", symbol: "GB", factor: 1000000000 },
      { id: "terabyte", name: "Terabyte", symbol: "TB", factor: 1000000000000 },
      { id: "petabyte", name: "Petabyte", symbol: "PB", factor: 1000000000000000 }
    ],
    popularPairs: [
      ["megabyte", "gigabyte"],
      ["gigabyte", "terabyte"],
      ["kilobyte", "megabyte"],
      ["byte", "kilobyte"],
      ["gigabyte", "megabyte"]
    ]
  },
  {
    id: "energy",
    name: "Energy",
    icon: "⚡",
    description: "Joules, calories, watt-hours, and BTUs",
    baseUnit: "joule",
    units: [
      { id: "joule", name: "Joule", symbol: "J", factor: 1 },
      { id: "kilojoule", name: "Kilojoule", symbol: "kJ", factor: 1000 },
      { id: "calorie", name: "Calorie", symbol: "cal", factor: 4.184 },
      { id: "kilocalorie", name: "Kilocalorie", symbol: "kcal", factor: 4184 },
      { id: "watt-hour", name: "Watt-hour", symbol: "Wh", factor: 3600 },
      { id: "kilowatt-hour", name: "Kilowatt-hour", symbol: "kWh", factor: 3600000 },
      { id: "btu", name: "BTU", symbol: "BTU", factor: 1055.056 },
      { id: "therm", name: "Therm", symbol: "therm", factor: 1.055e8 }
    ],
    popularPairs: [
      ["joules", "calories"],
      ["kilowatt-hour", "joule"],
      ["kilocalorie", "joule"],
      ["btu", "kilowatt-hour"]
    ]
  },
  {
    id: "pressure",
    name: "Pressure",
    icon: "🔧",
    description: "Pascals, bar, PSI, and atmospheres",
    baseUnit: "pascal",
    units: [
      { id: "pascal", name: "Pascal", symbol: "Pa", factor: 1 },
      { id: "kilopascal", name: "Kilopascal", symbol: "kPa", factor: 1000 },
      { id: "bar", name: "Bar", symbol: "bar", factor: 100000 },
      { id: "millibar", name: "Millibar", symbol: "mbar", factor: 100 },
      { id: "psi", name: "PSI (Pounds/sq in)", symbol: "psi", factor: 6894.75729 },
      { id: "atmosphere", name: "Atmosphere", symbol: "atm", factor: 101325 },
      { id: "torr", name: "Torr", symbol: "Torr", factor: 133.322368 }
    ],
    popularPairs: [
      ["psi", "bar"],
      ["bar", "psi"],
      ["atmosphere", "pascal"],
      ["kilopascal", "psi"]
    ]
  },
  {
    id: "angle",
    name: "Angle",
    icon: "📐",
    description: "Degrees, radians, and gradians",
    baseUnit: "degree",
    units: [
      { id: "degree", name: "Degree", symbol: "°", factor: 1 },
      { id: "radian", name: "Radian", symbol: "rad", factor: 180 / Math.PI },
      { id: "gradian", name: "Gradian", symbol: "grad", factor: 0.9 },
      { id: "arcminute", name: "Arcminute", symbol: "arcmin", factor: 1 / 60 },
      { id: "arcsecond", name: "Arcsecond", symbol: "arcsec", factor: 1 / 3600 }
    ],
    popularPairs: [
      ["degree", "radian"],
      ["radian", "degree"],
      ["degree", "gradian"]
    ]
  },
  {
    id: "power",
    name: "Power",
    icon: "🔌",
    description: "Watts, kilowatts, and horsepower",
    baseUnit: "watt",
    units: [
      { id: "watt", name: "Watt", symbol: "W", factor: 1 },
      { id: "kilowatt", name: "Kilowatt", symbol: "kW", factor: 1000 },
      { id: "megawatt", name: "Megawatt", symbol: "MW", factor: 1000000 },
      { id: "horsepower", name: "Horsepower (HP)", symbol: "hp", factor: 745.699872 },
      { id: "btu-per-hour", name: "BTU per Hour", symbol: "BTU/h", factor: 0.293071 }
    ],
    popularPairs: [
      ["kilowatt", "horsepower"],
      ["horsepower", "kilowatt"],
      ["watt", "kilowatt"]
    ]
  },
  {
    id: "force",
    name: "Force",
    icon: "🏋️",
    description: "Newtons, dynes, and pound-force",
    baseUnit: "newton",
    units: [
      { id: "newton", name: "Newton", symbol: "N", factor: 1 },
      { id: "kilonewton", name: "Kilonewton", symbol: "kN", factor: 1000 },
      { id: "dyne", name: "Dyne", symbol: "dyn", factor: 0.00001 },
      { id: "pound-force", name: "Pound-force", symbol: "lbf", factor: 4.448222 },
      { id: "kilogram-force", name: "Kilogram-force", symbol: "kgf", factor: 9.80665 }
    ],
    popularPairs: [
      ["newton", "pound-force"],
      ["pound-force", "newton"],
      ["kilonewton", "newton"]
    ]
  },
  {
    id: "frequency",
    name: "Frequency",
    icon: "📻",
    description: "Hertz, megahertz, and gigahertz",
    baseUnit: "hertz",
    units: [
      { id: "hertz", name: "Hertz", symbol: "Hz", factor: 1 },
      { id: "kilohertz", name: "Kilohertz", symbol: "kHz", factor: 1000 },
      { id: "megahertz", name: "Megahertz", symbol: "MHz", factor: 1000000 },
      { id: "gigahertz", name: "Gigahertz", symbol: "GHz", factor: 1000000000 },
      { id: "rpm", name: "RPM (Revolutions/min)", symbol: "rpm", factor: 1 / 60 }
    ],
    popularPairs: [
      ["hertz", "kilohertz"],
      ["megahertz", "gigahertz"],
      ["rpm", "hertz"]
    ]
  },
  {
    id: "torque",
    name: "Torque",
    icon: "🔩",
    description: "Newton-meters and pound-feet",
    baseUnit: "newton-meter",
    units: [
      { id: "newton-meter", name: "Newton-meter", symbol: "N·m", factor: 1 },
      { id: "pound-foot", name: "Pound-foot", symbol: "lb·ft", factor: 1.355818 },
      { id: "pound-inch", name: "Pound-inch", symbol: "lb·in", factor: 0.1129848 },
      { id: "kilogram-meter", name: "Kilogram-meter", symbol: "kg·m", factor: 9.80665 }
    ],
    popularPairs: [
      ["newton-meter", "pound-foot"],
      ["pound-foot", "newton-meter"]
    ]
  },
  {
    id: "density",
    name: "Density",
    icon: "🏺",
    description: "Gram/cm³ and kilograms per cubic meter",
    baseUnit: "kilogram-per-cubic-meter",
    units: [
      { id: "kilogram-per-cubic-meter", name: "Kilogram / Cubic Meter", symbol: "kg/m³", factor: 1 },
      { id: "gram-per-cubic-centimeter", name: "Gram / Cubic Centimeter", symbol: "g/cm³", factor: 1000 },
      { id: "pound-per-cubic-foot", name: "Pound / Cubic Foot", symbol: "lb/ft³", factor: 16.018463 },
      { id: "pound-per-cubic-inch", name: "Pound / Cubic Inch", symbol: "lb/in³", factor: 27679.9 }
    ],
    popularPairs: [
      ["kilogram-per-cubic-meter", "gram-per-cubic-centimeter"],
      ["pound-per-cubic-foot", "kilogram-per-cubic-meter"]
    ]
  },
  {
    id: "flow_rate",
    name: "Flow Rate",
    icon: "🚰",
    description: "Liters per minute and cubic meters per second",
    baseUnit: "liter-per-minute",
    units: [
      { id: "liter-per-minute", name: "Liter / Minute", symbol: "L/min", factor: 1 },
      { id: "liter-per-second", name: "Liter / Second", symbol: "L/s", factor: 60 },
      { id: "cubic-meter-per-second", name: "Cubic Meter / Second", symbol: "m³/s", factor: 60000 },
      { id: "gallon-per-minute-us", name: "US Gallon / Minute", symbol: "gpm", factor: 3.785412 },
      { id: "cubic-foot-per-second", name: "Cubic Foot / Second", symbol: "cfs", factor: 1699.011 }
    ],
    popularPairs: [
      ["liter-per-minute", "gallon-per-minute-us"],
      ["cubic-meter-per-second", "liter-per-second"]
    ]
  },
  {
    id: "fuel_consumption",
    name: "Fuel Consumption",
    icon: "🚗",
    description: "MPG and liters per 100 kilometers",
    baseUnit: "l100km",
    units: [
      { id: "l100km", name: "Liters / 100 Kilometers", symbol: "L/100km", factor: 1 },
      { id: "mpg-us", name: "Miles per Gallon (US)", symbol: "mpg (US)", factor: 1 },
      { id: "mpg-uk", name: "Miles per Gallon (UK)", symbol: "mpg (UK)", factor: 1 },
      { id: "km-l", name: "Kilometers / Liter", symbol: "km/L", factor: 1 }
    ],
    popularPairs: [
      ["mpg-us", "l100km"],
      ["l100km", "mpg-us"],
      ["mpg-us", "mpg-uk"],
      ["km-l", "mpg-us"]
    ]
  },
  {
    id: "illumination",
    name: "Illumination",
    icon: "💡",
    description: "Lux and foot-candles",
    baseUnit: "lux",
    units: [
      { id: "lux", name: "Lux", symbol: "lx", factor: 1 },
      { id: "foot-candle", name: "Foot-candle", symbol: "fc", factor: 10.76391 },
      { id: "phot", name: "Phot", symbol: "ph", factor: 10000 }
    ],
    popularPairs: [
      ["lux", "foot-candle"],
      ["foot-candle", "lux"]
    ]
  },
  {
    id: "typography",
    name: "Typography",
    icon: "🔤",
    description: "Pixels, points, and picas",
    baseUnit: "point",
    units: [
      { id: "point", name: "Point (DTP)", symbol: "pt", factor: 1 },
      { id: "pica", name: "Pica (DTP)", symbol: "pc", factor: 12 },
      { id: "pixel", name: "Pixel", symbol: "px", factor: 0.75 },
      { id: "inch", name: "Inch", symbol: "in", factor: 72 },
      { id: "millimeter", name: "Millimeter", symbol: "mm", factor: 2.83464567 }
    ],
    popularPairs: [
      ["pixel", "point"],
      ["point", "pixel"],
      ["inch", "pixel"]
    ]
  },
  {
    id: "cooking",
    name: "Cooking (Volume)",
    icon: "🍳",
    description: "Cups, tablespoons, teaspoons, and milliliters",
    baseUnit: "cup-us",
    units: [
      { id: "cup-us", name: "US Cup", symbol: "cup", factor: 1 },
      { id: "tablespoon-us", name: "US Tablespoon", symbol: "tbsp", factor: 1 / 16 },
      { id: "teaspoon-us", name: "US Teaspoon", symbol: "tsp", factor: 1 / 48 },
      { id: "milliliter", name: "Milliliter", symbol: "mL", factor: 1 / 236.588236 },
      { id: "fluid-ounce-us", name: "US Fluid Ounce", symbol: "fl oz", factor: 1 / 8 },
      { id: "pint-us", name: "US Pint", symbol: "pt", factor: 2 },
      { id: "quart-us", name: "US Quart", symbol: "qt", factor: 4 },
      { id: "gallon-us", name: "US Gallon", symbol: "gal", factor: 16 }
    ],
    popularPairs: [
      ["cup-us", "milliliter"],
      ["tablespoon-us", "teaspoon-us"],
      ["fluid-ounce-us", "cup-us"],
      ["milliliter", "tablespoon-us"]
    ]
  },
  {
    id: "data_transfer",
    name: "Data Transfer Rate",
    icon: "🌐",
    description: "Bits per second, megabits per second, and bytes per second",
    baseUnit: "bps",
    units: [
      { id: "bps", name: "Bit per Second", symbol: "bps", factor: 1 },
      { id: "kbps", name: "Kilobit per Second", symbol: "kbps", factor: 1000 },
      { id: "Mbps", name: "Megabit per Second", symbol: "Mbps", factor: 1000000 },
      { id: "Gbps", name: "Gigabit per Second", symbol: "Gbps", factor: 1000000000 },
      { id: "Tbps", name: "Terabit per Second", symbol: "Tbps", factor: 1000000000000 },
      { id: "Bps", name: "Byte per Second", symbol: "B/s", factor: 8 },
      { id: "KBps", name: "Kilobyte per Second", symbol: "KB/s", factor: 8000 },
      { id: "MBps", name: "Megabyte per Second", symbol: "MB/s", factor: 8000000 },
      { id: "GBps", name: "Gigabyte per Second", symbol: "GB/s", factor: 8000000000 },
      { id: "TBps", name: "Terabyte per Second", symbol: "TB/s", factor: 8000000000000 }
    ],
    popularPairs: [
      ["Mbps", "Gbps"],
      ["kbps", "Mbps"],
      ["MBps", "Mbps"],
      ["Mbps", "MBps"]
    ]
  },
  {
    id: "voltage",
    name: "Electric Voltage",
    icon: "⚡",
    description: "Volts, millivolts, and kilovolts",
    baseUnit: "volt",
    units: [
      { id: "volt", name: "Volt", symbol: "V", factor: 1 },
      { id: "millivolt", name: "Millivolt", symbol: "mV", factor: 0.001 },
      { id: "microvolt", name: "Microvolt", symbol: "µV", factor: 0.000001 },
      { id: "kilovolt", name: "Kilovolt", symbol: "kV", factor: 1000 },
      { id: "megavolt", name: "Megavolt", symbol: "MV", factor: 1000000 }
    ],
    popularPairs: [
      ["volt", "millivolt"],
      ["millivolt", "volt"],
      ["kilovolt", "volt"]
    ]
  },
  {
    id: "current",
    name: "Electric Current",
    icon: "🔌",
    description: "Amperes, milliamperes, and microamperes",
    baseUnit: "ampere",
    units: [
      { id: "ampere", name: "Ampere", symbol: "A", factor: 1 },
      { id: "milliampere", name: "Milliampere", symbol: "mA", factor: 0.001 },
      { id: "microampere", name: "Microampere", symbol: "µA", factor: 0.000001 },
      { id: "kiloampere", name: "Kiloampere", symbol: "kA", factor: 1000 }
    ],
    popularPairs: [
      ["ampere", "milliampere"],
      ["milliampere", "ampere"],
      ["microampere", "milliampere"]
    ]
  }
];

// Helper to look up a category
export function getCategory(id: string): Category | undefined {
  return categories.find(c => c.id === id);
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
  if (categoryId === "fuel_consumption") {
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

  const fromUnit = category.units.find(u => u.id === from);
  const toUnit = category.units.find(u => u.id === to);
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

  if (categoryId === "fuel_consumption") {
    if (fromId === "mpg-us" && toId === "l100km") return "L/100km = 235.215 ÷ mpg (US)";
    if (fromId === "l100km" && toId === "mpg-us") return "mpg (US) = 235.215 ÷ (L/100km)";
    if (fromId === "mpg-uk" && toId === "l100km") return "L/100km = 282.481 ÷ mpg (UK)";
    if (fromId === "l100km" && toId === "mpg-uk") return "mpg (UK) = 282.481 ÷ (L/100km)";
    if (fromId === "km-l" && toId === "l100km") return "L/100km = 100 ÷ (km/L)";
    if (fromId === "l100km" && toId === "km-l") return "km/L = 100 ÷ (L/100km)";
  }

  const category = getCategory(categoryId);
  const fromUnit = category?.units.find(u => u.id === fromId);
  const toUnit = category?.units.find(u => u.id === toId);
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
  // Groups: 1: Value (e.g. 5 or 2.5), 2: From Unit Raw, 3: Connector (to/in/into/=), 4: To Unit Raw
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

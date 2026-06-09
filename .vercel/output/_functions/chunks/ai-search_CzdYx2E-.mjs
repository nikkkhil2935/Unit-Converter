const categories = [
  {
    id: "length",
    name: "Length",
    icon: "📏",
    description: "Meters, feet, inches, miles, kilometers, and more",
    baseUnit: "meter",
    units: [
      { id: "meter", name: "Meter", symbol: "m", factor: 1 },
      { id: "kilometer", name: "Kilometer", symbol: "km", factor: 1e3 },
      { id: "centimeter", name: "Centimeter", symbol: "cm", factor: 0.01 },
      { id: "millimeter", name: "Millimeter", symbol: "mm", factor: 1e-3 },
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
      { id: "kosh", name: "Kosh", symbol: "kosh", factor: 3e3 },
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
      { id: "gram", name: "Gram", symbol: "g", factor: 1e-3 },
      { id: "milligram", name: "Milligram", symbol: "mg", factor: 1e-6 },
      { id: "microgram", name: "Microgram", symbol: "µg", factor: 1e-9 },
      { id: "pound", name: "Pound", symbol: "lb", factor: 0.45359237 },
      { id: "ounce", name: "Ounce", symbol: "oz", factor: 0.028349523125 },
      { id: "stone", name: "Stone", symbol: "st", factor: 6.35029318 },
      { id: "ton-us", name: "US Ton", symbol: "ton", factor: 907.18474 },
      { id: "ton-metric", name: "Metric Ton", symbol: "t", factor: 1e3 },
      { id: "carat", name: "Carat", symbol: "ct", factor: 2e-4 }
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
      { id: "milliliter", name: "Milliliter", symbol: "mL", factor: 1e-3 },
      { id: "gallon-us", name: "US Gallon", symbol: "gal", factor: 3.785411784 },
      { id: "quart-us", name: "US Quart", symbol: "qt", factor: 0.946352946 },
      { id: "pint-us", name: "US Pint", symbol: "pt", factor: 0.473176473 },
      { id: "cup-us", name: "US Cup", symbol: "cup", factor: 0.236588236 },
      { id: "fluid-ounce-us", name: "US Fluid Ounce", symbol: "fl oz", factor: 0.0295735295625 },
      { id: "tablespoon-us", name: "US Tablespoon", symbol: "tbsp", factor: 0.01478676478125 },
      { id: "teaspoon-us", name: "US Teaspoon", symbol: "tsp", factor: 0.00492892159375 },
      { id: "cubic-meter", name: "Cubic Meter", symbol: "m³", factor: 1e3 },
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
      { id: "square-kilometer", name: "Square Kilometer", symbol: "km²", factor: 1e6 },
      { id: "square-centimeter", name: "Square Centimeter", symbol: "cm²", factor: 1e-4 },
      { id: "square-millimeter", name: "Square Millimeter", symbol: "mm²", factor: 1e-6 },
      { id: "square-mile", name: "Square Mile", symbol: "mi²", factor: 258998811e-2 },
      { id: "square-yard", name: "Square Yard", symbol: "yd²", factor: 0.83612736 },
      { id: "square-foot", name: "Square Foot", symbol: "ft²", factor: 0.09290304 },
      { id: "square-inch", name: "Square Inch", symbol: "in²", factor: 64516e-8 },
      { id: "acre", name: "Acre", symbol: "ac", factor: 4046.8564224 },
      { id: "hectare", name: "Hectare", symbol: "ha", factor: 1e4 },
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
      { id: "dunam", name: "Dunam (Metric)", symbol: "dunam", factor: 1e3 },
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
      { id: "millisecond", name: "Millisecond", symbol: "ms", factor: 1e-3 },
      { id: "microsecond", name: "Microsecond", symbol: "µs", factor: 1e-6 },
      { id: "nanosecond", name: "Nanosecond", symbol: "ns", factor: 1e-9 },
      { id: "minute", name: "Minute", symbol: "min", factor: 60 },
      { id: "hour", name: "Hour", symbol: "h", factor: 3600 },
      { id: "day", name: "Day", symbol: "d", factor: 86400 },
      { id: "week", name: "Week", symbol: "wk", factor: 604800 },
      { id: "month", name: "Month (Avg)", symbol: "mo", factor: 262974383e-2 },
      { id: "year", name: "Year", symbol: "yr", factor: 3155692596e-2 }
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
      { id: "kilobyte", name: "Kilobyte", symbol: "KB", factor: 1e3 },
      { id: "megabyte", name: "Megabyte", symbol: "MB", factor: 1e6 },
      { id: "gigabyte", name: "Gigabyte", symbol: "GB", factor: 1e9 },
      { id: "terabyte", name: "Terabyte", symbol: "TB", factor: 1e12 },
      { id: "petabyte", name: "Petabyte", symbol: "PB", factor: 1e15 }
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
      { id: "kilojoule", name: "Kilojoule", symbol: "kJ", factor: 1e3 },
      { id: "calorie", name: "Calorie", symbol: "cal", factor: 4.184 },
      { id: "kilocalorie", name: "Kilocalorie", symbol: "kcal", factor: 4184 },
      { id: "watt-hour", name: "Watt-hour", symbol: "Wh", factor: 3600 },
      { id: "kilowatt-hour", name: "Kilowatt-hour", symbol: "kWh", factor: 36e5 },
      { id: "btu", name: "BTU", symbol: "BTU", factor: 1055.056 },
      { id: "therm", name: "Therm", symbol: "therm", factor: 1055e5 }
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
      { id: "kilopascal", name: "Kilopascal", symbol: "kPa", factor: 1e3 },
      { id: "bar", name: "Bar", symbol: "bar", factor: 1e5 },
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
      { id: "kilowatt", name: "Kilowatt", symbol: "kW", factor: 1e3 },
      { id: "megawatt", name: "Megawatt", symbol: "MW", factor: 1e6 },
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
      { id: "kilonewton", name: "Kilonewton", symbol: "kN", factor: 1e3 },
      { id: "dyne", name: "Dyne", symbol: "dyn", factor: 1e-5 },
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
      { id: "kilohertz", name: "Kilohertz", symbol: "kHz", factor: 1e3 },
      { id: "megahertz", name: "Megahertz", symbol: "MHz", factor: 1e6 },
      { id: "gigahertz", name: "Gigahertz", symbol: "GHz", factor: 1e9 },
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
      { id: "gram-per-cubic-centimeter", name: "Gram / Cubic Centimeter", symbol: "g/cm³", factor: 1e3 },
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
      { id: "cubic-meter-per-second", name: "Cubic Meter / Second", symbol: "m³/s", factor: 6e4 },
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
      { id: "phot", name: "Phot", symbol: "ph", factor: 1e4 }
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
      { id: "kbps", name: "Kilobit per Second", symbol: "kbps", factor: 1e3 },
      { id: "Mbps", name: "Megabit per Second", symbol: "Mbps", factor: 1e6 },
      { id: "Gbps", name: "Gigabit per Second", symbol: "Gbps", factor: 1e9 },
      { id: "Tbps", name: "Terabit per Second", symbol: "Tbps", factor: 1e12 },
      { id: "Bps", name: "Byte per Second", symbol: "B/s", factor: 8 },
      { id: "KBps", name: "Kilobyte per Second", symbol: "KB/s", factor: 8e3 },
      { id: "MBps", name: "Megabyte per Second", symbol: "MB/s", factor: 8e6 },
      { id: "GBps", name: "Gigabyte per Second", symbol: "GB/s", factor: 8e9 },
      { id: "TBps", name: "Terabyte per Second", symbol: "TB/s", factor: 8e12 }
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
      { id: "millivolt", name: "Millivolt", symbol: "mV", factor: 1e-3 },
      { id: "microvolt", name: "Microvolt", symbol: "µV", factor: 1e-6 },
      { id: "kilovolt", name: "Kilovolt", symbol: "kV", factor: 1e3 },
      { id: "megavolt", name: "Megavolt", symbol: "MV", factor: 1e6 }
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
      { id: "milliampere", name: "Milliampere", symbol: "mA", factor: 1e-3 },
      { id: "microampere", name: "Microampere", symbol: "µA", factor: 1e-6 },
      { id: "kiloampere", name: "Kiloampere", symbol: "kA", factor: 1e3 }
    ],
    popularPairs: [
      ["ampere", "milliampere"],
      ["milliampere", "ampere"],
      ["microampere", "milliampere"]
    ]
  }
];
function getCategory(id) {
  return categories.find((c) => c.id === id);
}
function convert(value, from, to, categoryId) {
  if (isNaN(value)) return NaN;
  if (from === to) return value;
  if (categoryId === "temperature") {
    let kelvin = value;
    if (from === "celsius") kelvin = value + 273.15;
    else if (from === "fahrenheit") kelvin = (value - 32) * (5 / 9) + 273.15;
    if (to === "celsius") return kelvin - 273.15;
    if (to === "fahrenheit") return (kelvin - 273.15) * (9 / 5) + 32;
    return kelvin;
  }
  if (categoryId === "fuel_consumption") {
    let l100km = value;
    if (from === "mpg-us") l100km = 235.214583 / value;
    else if (from === "mpg-uk") l100km = 282.480936 / value;
    else if (from === "km-l") l100km = 100 / value;
    if (to === "mpg-us") return 235.214583 / l100km;
    if (to === "mpg-uk") return 282.480936 / l100km;
    if (to === "km-l") return 100 / l100km;
    return l100km;
  }
  const category = getCategory(categoryId);
  if (!category) return NaN;
  const fromUnit = category.units.find((u) => u.id === from);
  const toUnit = category.units.find((u) => u.id === to);
  if (!fromUnit || !toUnit) return NaN;
  const baseValue = value * fromUnit.factor;
  return baseValue / toUnit.factor;
}
const UNIT_SYNONYMS = {};
categories.forEach((cat) => {
  cat.units.forEach((unit) => {
    const keys = [
      unit.id.toLowerCase(),
      unit.symbol.toLowerCase(),
      unit.name.toLowerCase(),
      unit.name.toLowerCase() + "s",
      // basic plural
      unit.name.toLowerCase().replace(/\s+/g, ""),
      // strip spaces
      unit.symbol.toLowerCase().replace("°", "")
      // temp degree symbol strip
    ];
    if (unit.id === "centimeter") keys.push("cm", "cms", "centimeters", "centimeter", "centimetres");
    if (unit.id === "meter") keys.push("m", "meters", "metres");
    if (unit.id === "kilometer") keys.push("km", "kms", "kilometers", "kilometres");
    if (unit.id === "millimeter") keys.push("mm", "mms", "millimeters", "millimetres");
    if (unit.id === "inch") keys.push("in", "inch", "inches", '"', "inchs");
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
    keys.forEach((k) => {
      if (k) UNIT_SYNONYMS[k.trim()] = { unitId: unit.id, categoryId: cat.id };
    });
  });
});
function parseSearchQuery(query) {
  let cleaned = query.toLowerCase().trim();
  cleaned = cleaned.replace(/^(convert|what is|how many|show me|find)\s+/i, "");
  const regex = /^([\d.-]+)\s*([a-zA-Z°'"\s]+?)\s*(?:\s+(?:to|in|into|=|as)\s+|\s*=\s*|\s+)\s*([a-zA-Z°'"\s]+)$/i;
  const match = cleaned.match(regex);
  if (!match) return void 0;
  const value = parseFloat(match[1]);
  if (isNaN(value)) return void 0;
  const fromRaw = match[2].trim();
  const toRaw = match[3].trim();
  const fromResolved = UNIT_SYNONYMS[fromRaw] || UNIT_SYNONYMS[fromRaw.replace(/s$/, "")];
  const toResolved = UNIT_SYNONYMS[toRaw] || UNIT_SYNONYMS[toRaw.replace(/s$/, "")];
  if (!fromResolved || !toResolved) return void 0;
  if (fromResolved.categoryId !== toResolved.categoryId) return void 0;
  const category = getCategory(fromResolved.categoryId);
  if (!category) return void 0;
  const fromUnit = category.units.find((u) => u.id === fromResolved.unitId);
  const toUnit = category.units.find((u) => u.id === toResolved.unitId);
  if (!fromUnit || !toUnit) return void 0;
  const result = convert(value, fromUnit.id, toUnit.id, category.id);
  return {
    value,
    fromUnit,
    toUnit,
    category,
    result
  };
}

const prerender = false;
const GET = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  if (!query) {
    return new Response(JSON.stringify({ error: 'Missing query parameter "q"' }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const localMatch = parseSearchQuery(query);
  if (localMatch) {
    return new Response(JSON.stringify({
      source: "local",
      success: true,
      value: localMatch.value,
      fromUnit: localMatch.fromUnit,
      toUnit: localMatch.toUnit,
      category: localMatch.category,
      result: localMatch.result
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({
      success: false,
      error: "Query not parsed locally, and AI service is not configured (missing ANTHROPIC_API_KEY)."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const schemaList = categories.map((cat) => ({
      category: cat.id,
      units: cat.units.map((u) => ({ id: u.id, name: u.name, symbol: u.symbol }))
    }));
    const prompt = `You are a strict JSON parser for a unit converter app.
Analyze the user's natural language query and map it to a specific conversion.

User query: "${query}"

Here are the supported categories and units in our system:
${JSON.stringify(schemaList, null, 2)}

Your output must be a valid JSON object matching the schema below.
If you cannot parse or map the units successfully, set "success" to false.
Do NOT output any markdown tags (like \`\`\`json), comments, or introductory text. Output ONLY the raw JSON string:

{
  "success": true or false,
  "value": number,
  "fromUnit": "the exact unit ID from our list",
  "toUnit": "the exact unit ID from our list",
  "categoryId": "the exact category ID from our list"
}`;
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 150,
        messages: [{ role: "user", content: prompt }]
      })
    });
    if (!response.ok) {
      const errText = await response.text();
      return new Response(JSON.stringify({
        success: false,
        error: `AI service returned error status: ${response.status}`,
        details: errText
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const data = await response.json();
    const textContent = data.content?.[0]?.text?.trim() || "";
    let aiParsed;
    try {
      aiParsed = JSON.parse(textContent);
    } catch (e) {
      return new Response(JSON.stringify({
        success: false,
        error: "Failed to parse AI response as JSON",
        raw: textContent
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!aiParsed || !aiParsed.success) {
      return new Response(JSON.stringify({
        success: false,
        error: "AI could not map the query to a valid conversion"
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const category = getCategory(aiParsed.categoryId);
    const fromUnit = category?.units.find((u) => u.id === aiParsed.fromUnit);
    const toUnit = category?.units.find((u) => u.id === aiParsed.toUnit);
    if (!category || !fromUnit || !toUnit) {
      return new Response(JSON.stringify({
        success: false,
        error: "AI returned unit IDs that are not present in our database"
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const result = convert(aiParsed.value, fromUnit.id, toUnit.id, category.id);
    return new Response(JSON.stringify({
      source: "ai-claude",
      success: true,
      value: aiParsed.value,
      fromUnit,
      toUnit,
      category,
      result
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: "An internal error occurred while calling the AI service",
      message: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

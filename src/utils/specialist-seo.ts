export interface SpecialistTool {
  label: string;
  href: string;
  desc: string;
}

export const specialistToolsByCategory: Record<string, SpecialistTool[]> = {
  "length": [
    { label: "AWG Wire to mm²", href: "/awg-to-mm2-wire-gauge-calculator", desc: "Convert American Wire Gauge sizes to metric area." },
    { label: "Shoe Size US/EU/UK", href: "/shoe-size-converter-us-to-eu", desc: "Convert international shoe sizes." },
    { label: "Tire Size Speedometer", href: "/tire-size-calculator", desc: "Calculate tire speedometer error margins." },
    { label: "Board Feet Calculator", href: "/board-feet-calculator", desc: "Calculate lumber volume in board feet." },
    { label: "Square Footage Calc", href: "/square-footage-calculator", desc: "Determine room area measurements." },
    { label: "Pipe Size Nom/Actual", href: "/pipe-size-converter-nominal-to-actual", desc: "Convert nominal pipe sizes to actual dimensions." },
    { label: "Thread Pitch Metric/UN", href: "/thread-pitch-converter-metric-unc-unf", desc: "Convert between metric and unified thread pitches." },
    { label: "Hardness Rockwell/Vickers", href: "/hardness-converter-rockwell-brinell-vickers", desc: "Convert Rockwell, Brinell, and Vickers hardness." }
  ],
  "weight": [
    { label: "Flour Cups to Grams", href: "/cups-to-grams-flour", desc: "Convert baking flour cups to grams." },
    { label: "Butter Cups to Grams", href: "/cups-to-grams-butter", desc: "Convert baking butter cups to grams." },
    { label: "Pounds & Ounces to kg", href: "/pounds-and-ounces-to-kg", desc: "Convert compound weight measurements." },
    { label: "Steel Weight Calc", href: "/steel-weight-calculator-kg-per-meter", desc: "Estimate steel bar or plate weights." },
    { label: "Rebar Weight Calc", href: "/rebar-weight-calculator", desc: "Calculate rebar linear weights and sizing." },
    { label: "Gravel Weight Tons/Yards", href: "/gravel-weight-calculator-tons-to-cubic-yards", desc: "Convert gravel volume to tons weight." }
  ],
  "volume": [
    { label: "Molarity Calculator", href: "/molarity-calculator", desc: "Compute solute molarity, molecular weight, or solvent volume." },
    { label: "Concentration ppm/mgL", href: "/concentration-converter-ppm-to-mgL", desc: "Convert solution concentrations." },
    { label: "Concrete Bags Volume", href: "/concrete-volume-calculator-bags-to-cubic-feet", desc: "Estimate concrete bags for volume." },
    { label: "Brix to Specific Gravity", href: "/brix-to-specific-gravity-calculator", desc: "Convert sugar concentrations." },
    { label: "Concrete Mix Ratios", href: "/concrete-mix-ratio-calculator", desc: "Compute cement, sand, and gravel quantities." }
  ],
  "temperature": [
    { label: "Oven Temp (C/F)", href: "/oven-temperature-converter-c-to-f", desc: "Convert kitchen baking oven temperatures." },
    { label: "Fan Oven Converter", href: "/fan-oven-temperature-converter", desc: "Adjust convection fan oven temperatures." },
    { label: "Gas Mark to C/F", href: "/gas-mark-to-celsius-to-fahrenheit", desc: "Convert cooking gas marks." },
    { label: "Bread Proof Temp", href: "/proof-temperature-for-bread-c-to-f", desc: "Adjust dough proofing temperatures." },
    { label: "Meat Internal Temp", href: "/meat-internal-temperature-guide-c-to-f", desc: "Check USDA internal meat cooking temperatures." },
    { label: "Candy Stage Temp", href: "/candy-making-temperature-stages-chart", desc: "Look up candy stages and boiling points." }
  ],
  "torque": [
    { label: "Torque ft-lb to Nm", href: "/torque-converter-ft-lb-to-nm", desc: "Convert torque forces." },
    { label: "Bolt Torque Specs", href: "/bolt-torque-spec-calculator", desc: "Look up fastener grade torque specs." }
  ],
  "pressure": [
    { label: "PSI/Bar/kPa Converter", href: "/psi-to-bar-to-kpa-converter", desc: "Convert pressure units." }
  ],
  "flow-rate": [
    { label: "Flow gpm to lpm", href: "/flow-rate-converter-gpm-to-lpm", desc: "Convert liquid flow rates." }
  ],
  "area": [
    { label: "Square Footage Calc", href: "/square-footage-calculator", desc: "Determine room area measurements." },
    { label: "Roofing Square Calc", href: "/roofing-square-calculator", desc: "Calculate roofing squares needed." },
    { label: "Tile Coverage Calc", href: "/tile-coverage-calculator", desc: "Estimate tiles and grout requirements." },
    { label: "Mulch Coverage Calc", href: "/mulch-coverage-calculator", desc: "Calculate mulch volume and weight." },
    { label: "Paint Coverage Calc", href: "/paint-coverage-calculator-sq-ft-per-gallon", desc: "Estimate gallons of paint required." }
  ],
  "density": [
    { label: "Brix to Specific Gravity", href: "/brix-to-specific-gravity-calculator", desc: "Convert sugar concentrations." },
    { label: "Specific Gravity Calc", href: "/specific-gravity-calculator", desc: "Convert specific gravity to density." },
    { label: "Concentration ppm/mgL", href: "/concentration-converter-ppm-to-mgL", desc: "Convert solution concentrations." }
  ],
  "speed": [
    { label: "Tire Size Speedometer", href: "/tire-size-calculator", desc: "Calculate tire speedometer error margins." }
  ],
  "time": [
    { label: "Time to Seconds Calc", href: "/hours-minutes-seconds-to-seconds", desc: "Convert hours, minutes, and seconds to total seconds." },
    { label: "Seconds to Time Calc", href: "/seconds-to-hours-minutes-seconds", desc: "Convert seconds to hours, minutes, and seconds format." }
  ]
};

export const specialistSeoContent: Record<string, { intro: string; details: string; keywords: string[] }> = {
  "length": {
    intro: "While basic length conversions between meters, centimeters, inches, and feet are useful for everyday measurements, specialized engineering, construction, and sizing applications require advanced, unit-specific calculations. Converting physical dimensions is crucial in professional fields to determine mechanical fits, electrical capacities, and material requirements.",
    details: "For instance, electrical engineers use AWG (American Wire Gauge) measurements to calculate cross-sectional wire area in metric square millimeters (mm²), which dictates safe current capacity. Woodworkers and lumber yards use the board feet formula to calculate volume rather than simple linear length. Home builders rely on square footage calculators to figure out spatial areas for drywall and flooring, while mechanics use nominal to actual pipe size charts to verify fittings. Additionally, automotive speedometer calibrations require custom tire diameter ratio checks. Using our niche length and sizing tools ensures your measurements convert cleanly to practical real-world targets.",
    keywords: ["AWG wire size chart", "board feet calculator", "square footage calculator", "tire size speedometer error", "nominal pipe size converter", "hardness rockwell brinell vickers", "thread pitch metric UN"]
  },
  "weight": {
    intro: "Standard weight and mass units like kilograms, pounds, grams, and ounces are used globally, but specific industries like culinary baking, metallurgy, and construction logistics demand much more detailed density and structural load conversions.",
    details: "In culinary arts, baking success relies on converting ingredient weight (grams) from volume (cups, tablespoons) because packing density differs between flour, butter, and white sugar. In heavy fabrication, steel weight calculators estimate raw beam or plate weights based on linear dimensions and metal grades, while rebar calculators determine structural reinforcement loading. For land developers, gravel weight calculators convert volume in cubic yards into tons to estimate hauling weights. Using these specialized weight calculators prevents structural calculation errors and material shipping underestimations.",
    keywords: ["cups to grams baking", "steel weight calculator kg/m", "rebar size weight chart", "gravel tons to yards", "pounds and ounces to kg", "baking ingredient density"]
  },
  "volume": {
    intro: "Fluid volumes (liters, gallons, milliliters, cubic feet, and cubic yards) are the standard in science, brewing, and masonry. However, professional calculations must translate these raw capacities into chemical concentrations or physical compound mixes.",
    details: "For example, laboratory technicians utilize molarity calculators to determine solute moles per liter of solvent volume, and solution concentration converters to switch between ppm (parts per million) and mg/L. Homebrewers and commercial vintners use Brix-to-Specific-Gravity calculators to assess sugar densities during fermentation. In civil construction, dry mix volumes of cement, sand, and gravel are converted into concrete bags needed for slab dimensions. These volume-specific calculators provide chemical, culinary, and construction professionals with precise mix ratios and volume-to-weight conversions.",
    keywords: ["molarity calculator chemistry", "ppm to mg/L conversion", "concrete bag volume calculator", "brix to specific gravity brewing", "concrete mix ratio ratios", "fermentation sugar density"]
  },
  "temperature": {
    intro: "Temperature conversions between Celsius (°C), Fahrenheit (°F), and Kelvin (K) are fundamental in science, but home cooking, baking, and professional catering require adjustments based on oven dynamics, sugar chemistry, and food safety standards.",
    details: "When cooking, standard oven settings must be adjusted for convection fan ovens, which circulate heat faster and require a 20°C (25°F) reduction in temperature. Traditional recipes specifying Gas Marks require conversions to standard Celsius or Fahrenheit. Confectioners monitor candy temperature stages (soft ball, hard crack) to ensure correct sugar crystallization, while bakers track dough proofing temperatures to control yeast fermentation. Furthermore, internal meat temperatures are monitored and converted to ensure USDA-approved safety thresholds are met. These dedicated calculators translate thermal readings into culinary precision.",
    keywords: ["convection fan oven temperature", "gas mark to celsius", "candy making stages temperature", "dough proofing temperature", "internal meat temperature guide", "cooking temp C to F"]
  },
  "torque": {
    intro: "Torque represents the rotational force applied to fasteners, typically measured in foot-pounds (ft-lb), inch-pounds (in-lb), or Newton-meters (N·m). Selecting and converting the correct torque values is crucial in mechanical assembly and vehicle servicing.",
    details: "An accurate torque conversion guarantees components are tightened according to tight manufacturer tolerances. Bolt torque specification calculators cross-reference fastener sizing and grades (such as Grade 5, Grade 8, or Metric 10.9) to determine safe tension levels without stripping threads. Our specialized torque calculators convert rotational forces and help mechanics apply the correct clamping pressure to engine bolts and wheel lugs.",
    keywords: ["foot pounds to Newton meters", "bolt torque specifications", "fastener grade torque limits", "mechanical torque calculator", "automotive torque torque conversion"]
  },
  "pressure": {
    intro: "Pressure represents force acting over a unit of area. Standard pressure scales like PSI, bar, kilopascals (kPa), and atmospheres (atm) are utilized in HVAC, hydraulics, automotive tire inflation, and pneumatic tool operations.",
    details: "Converting pressure ratings accurately is essential for equipment safety. For instance, European machinery gauges often use bar, whereas American compressors use PSI, necessitating quick conversions to prevent system over-pressurization. Our pressure calculators help technicians easily convert between scales, ensuring pressure vessels, hydraulic lines, and automotive tires are maintained at the correct operational levels.",
    keywords: ["PSI to bar calculator", "bar to kPa converter", "tire pressure unit conversion", "pneumatic pressure calculations", "vacuum atmospheric pressure"]
  },
  "flow-rate": {
    intro: "Flow rate calculations measure fluid velocity, expressing volume per unit time. Typically calculated in Gallons per Minute (GPM) or Liters per Minute (LPM), these measurements are fundamental in plumbing, irrigation, and hydraulic system design.",
    details: "Sizing a water pump or designing a sprinkler system requires translating fluid flow rates across metric and imperial systems. Flow calculators allow plumbers and civil engineers to determine if piping and valve sizes can handle specific GPM or LPM rates under pressure, optimizing fluid transport systems for peak output.",
    keywords: ["GPM to LPM converter", "gallons per minute to liters per minute", "water pump flow rate", "pipe size flow capacity", "hydraulic system flow calculator"]
  },
  "area": {
    intro: "Area conversions (square feet, square meters, acres, and hectares) are vital in real estate, landscaping, and construction. However, ordering materials requires converting flat surface measurements into material counts.",
    details: "In home remodeling, flat wall and floor square footages are converted by paint coverage calculators (estimating paint gallons needed) or tile calculators (estimating tile counts, accounting for grout lines and a 10% waste factor). For roofing jobs, surface area is measured in roofing 'squares' (1 square = 100 sq ft). Landscapers use area calculators to estimate bulk mulch and topsoil volume in cubic yards. These specialized calculators bridge the gap between flat dimensional area and commercial material purchasing.",
    keywords: ["roofing squares to square feet", "tile calculator waste margin", "paint coverage per gallon", "mulch volume calculator", "square footage calculator"]
  },
  "density": {
    intro: "Density (mass per unit volume) is a critical property in brewing, winemaking, chemistry, and material science. Converting density metrics helps track material purity and fermentation progress.",
    details: "In brewing and viticulture, liquid density is measured in Specific Gravity (SG) or degrees Brix to calculate sugar content and potential alcohol. Laboratory technicians convert solute concentration densities using ppm/mgL calculators. Our density tools automate the non-linear conversions between refractive indexes and relative density values, giving brewers and lab scientists instant, error-free results.",
    keywords: ["brix to specific gravity formula", "fermentation potential ABV", "sugar density hydrometer", "specific gravity density calculator", "solution concentration"]
  },
  "speed": {
    intro: "Speed measures distance traveled over time. While basic mph-to-kph conversion is standard for travel, automotive modifications require evaluating wheel speed calculations.",
    details: "When changing a vehicle's tire size (width, profile, or rim diameter), the overall circumference of the wheel changes. This alters the distance covered per rotation, causing speedometer error. A tire size speedometer calculator helps drivers identify speed error percentages relative to actual travel velocity, ensuring safety and legal speed limit compliance.",
    keywords: ["tire speedometer error", "mph to kph speedometer", "wheel speed calculator", "tire circumference speed difference"]
  },
  "time": {
    intro: "Time conversion helps synchronize logs, schedules, and calculations in software, sports timing, and payroll systems, translating complex hours-minutes-seconds formats into base units.",
    details: "For developers and audio-video editors, converting hours, minutes, and seconds into total seconds (and vice versa) is crucial for parsing timecodes, calculating runtimes, and computing accurate project pacing. These specialized time calculators eliminate manual arithmetic errors in temporal tracking.",
    keywords: ["time to seconds converter", "seconds to hours minutes seconds", "timecode calculation", "total seconds calculator"]
  }
};

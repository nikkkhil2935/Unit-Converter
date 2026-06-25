export interface FractionResult {
  whole: number;
  numerator: number;
  denominator: number;
  displayString: string;
}

function gcd(a: number, b: number): number {
  return b ? gcd(b, a % b) : a;
}

/**
 * Converts a decimal value to the nearest standard fraction.
 * Supported max denominators are 2, 4, 8, 16, 32, 64.
 */
export function decimalToFraction(val: number, maxDenominator: number = 16): FractionResult {
  const isNegative = val < 0;
  const absVal = Math.abs(val);
  
  let whole = Math.floor(absVal);
  const decimal = absVal - whole;
  
  // Find nearest numerator
  let numerator = Math.round(decimal * maxDenominator);
  let denominator = maxDenominator;
  
  if (numerator === 0) {
    return {
      whole: isNegative ? -whole : whole,
      numerator: 0,
      denominator: 1,
      displayString: `${isNegative ? '-' : ''}${whole}`
    };
  }
  
  if (numerator === maxDenominator) {
    whole += 1;
    return {
      whole: isNegative ? -whole : whole,
      numerator: 0,
      denominator: 1,
      displayString: `${isNegative ? '-' : ''}${whole}`
    };
  }
  
  // Simplify fraction using GCD
  const commonDivisor = gcd(numerator, denominator);
  numerator = numerator / commonDivisor;
  denominator = denominator / commonDivisor;
  
  let displayString = '';
  if (whole > 0) {
    displayString = `${whole} ${numerator}/${denominator}`;
  } else {
    displayString = `${numerator}/${denominator}`;
  }
  
  if (isNegative) {
    displayString = `-${displayString}`;
  }
  
  return {
    whole: isNegative ? -whole : whole,
    numerator,
    denominator,
    displayString
  };
}

/**
 * Formats a decimal conversion value (e.g. in inches) as a nice fraction string with symbol,
 * e.g. 11.81 in -> 11 13/16"
 */
export function formatAsFraction(inchesVal: number, maxDenominator: number = 16): string {
  if (isNaN(inchesVal) || !isFinite(inchesVal)) return 'N/A';
  const frac = decimalToFraction(inchesVal, maxDenominator);
  return `${frac.displayString}"`;
}

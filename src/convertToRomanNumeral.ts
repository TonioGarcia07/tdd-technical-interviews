/*
 * Exo 4: Convert to roman numerals
 *
 * ************************************************************************
 *
 * Given a number >0, convert it to the roman numeral.
 *
 * IE:     I  = 1
 *         IV = 4
 *         V  = 5
 *         IX = 9
 *         X  = 10
 *         XI = 11
 *         L  = 50
 *         C  = 100
 *         D  = 500
 *         M  = 1000
 *
 * ************************************************************************
 */

const CHARS = {
  [1]: "I",
  [5]: "V",
  [10]: "X",
  [50]: "L",
  [100]: "C",
  [500]: "D",
  [1000]: "M",
};

const convertDigit = (n: number, power: number): string => {
  if (n < 4) return CHARS[power].repeat(n);
  if (n === 4) return CHARS[power] + CHARS[power * 5];
  if (n === 5) return CHARS[power * 5];
  if (n < 9) return CHARS[power * 5] + CHARS[power].repeat(n - 5);
  if (n === 9) return CHARS[power] + CHARS[power * 10];
};

const convertToRomanNumeral = (n: number): string =>
  n
    .toString()
    .split("")
    .map((d, i) => convertDigit(+d, 10 ** (n.toString().length - i - 1)))
    .join("");

export default convertToRomanNumeral;

/**
 * Returns the first longest ascending substring
 */

const findLongestSubstring = (string: string): string => {
  let start = 0;
  let end = 1;
  let maxStart = 0;
  let maxEnd = 1;

  let prevChar = string[0];
  string
    .split("")
    .slice(1)
    .forEach((char: string, index: number) => {
      if (!prevChar || prevChar < char) {
        end += 1;
        if (maxEnd - maxStart < end - start) {
          maxEnd = end;
          maxStart = start;
        }
      } else {
        start = index + 1;
        end = start + 1;
      }
      prevChar = char;
    });
  return string.slice(maxStart, maxEnd);
};

export default findLongestSubstring;

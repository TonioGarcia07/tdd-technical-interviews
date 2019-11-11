/*
 * Exo 1: substring permutations
 *
 * ************************************************************************
 *
 * Given a smaller string s and a bigger string b, design an algorithm
 * to find all permutations of the shorter string within the longer one.
 * Return the array of the location of each permutation.
 *
 * ************************************************************************
 */

const findSubstringPermutations = (small: string, big: string): number[] => {
  if (big.startsWith(small)) {
    return [0];
  }
  return [];
};

export default findSubstringPermutations;

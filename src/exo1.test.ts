import findSubstringPermutations from "./exo1";

describe("findSubstringPermutations", () => {
  it("big startsWith small", () => {
    const result = findSubstringPermutations("ab", "abcdea");
    const expected = [0];

    expect(result).toEqual(expected);
  });
});

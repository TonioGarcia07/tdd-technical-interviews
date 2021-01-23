import findLongestSubstring from "./exo1";

it("findLongestSubstring", () => {
  expect(findLongestSubstring("hello")).toEqual("el");
  expect(findLongestSubstring("abcabcdeabcdef")).toEqual("abcdef");
  expect(findLongestSubstring("abcabcde")).toEqual("abcde");
  expect(findLongestSubstring("polyconseil")).toEqual("eil");
});

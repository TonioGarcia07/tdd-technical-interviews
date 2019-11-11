import findCommonElements from "./exo2";

describe("findCommonElements", () => {
  it("empty array", () => {
    const result = findCommonElements([], []);
    const expected = [];

    expect(result).toEqual(expected);
  });
});

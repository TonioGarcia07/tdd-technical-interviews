import functionToTest from "./exo1";

it("functionToTest", () => {
  const result = functionToTest("");
  const expected = "";

  expect(result).toEqual(expected);
});

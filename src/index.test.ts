import functionToTest from "./index";

it("functionToTest", () => {
  const result = functionToTest("");
  const expected = "";

  expect(result).toEqual(expected);
});

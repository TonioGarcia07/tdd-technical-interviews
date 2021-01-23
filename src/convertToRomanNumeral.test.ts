import convertToRomanNumeral from "./convertToRomanNumeral";

describe("convertToRomanNumeral", () => {
  it.each`
    num     | roman
    ${1}    | ${"I"}
    ${3}    | ${"III"}
    ${4}    | ${"IV"}
    ${5}    | ${"V"}
    ${9}    | ${"IX"}
    ${10}   | ${"X"}
    ${11}   | ${"XI"}
    ${19}   | ${"XIX"}
    ${50}   | ${"L"}
    ${100}  | ${"C"}
    ${105}  | ${"CV"}
    ${500}  | ${"D"}
    ${537}  | ${"DXXXVII"}
    ${528}  | ${"DXXVIII"}
    ${1000} | ${"M"}
    ${3999} | ${"MMMCMXCIX"}
  `("should return Home page when params are invalid", ({ num, roman }) => {
    const result = convertToRomanNumeral(num);
    expect(result).toBe(roman);
  });
});

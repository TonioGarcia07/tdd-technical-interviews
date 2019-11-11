import findTicTacToeWinner, { isWinner, validGame } from "./exo3";

describe("validGame", () => {
  it("invalid game, missing element", () => {
    const result = findTicTacToeWinner([
      ["x", "x"],
      ["x", "x", "o"],
      ["o", "o", ""]
    ]);

    expect(result).toBeFalsy();
  });

  it("invalid game: new letter", () => {
    const isValid = validGame([
      ["x", "x", "u"],
      ["x", "x", "o"],
      ["o", "o", ""]
    ]);

    expect(isValid).toBeFalsy();
  });

  it("invalid game: 3 letters", () => {
    const isValid = validGame([
      ["x", "x", "x"],
      ["x", "e", "o"],
      ["o", "o", "o"]
    ]);

    expect(isValid).toBeFalsy();
  });

  it("invalid game: too many 'x'", () => {
    const isValid = validGame([
      ["x", "x", "x"],
      ["x", "x", "o"],
      ["o", "o", ""]
    ]);

    expect(isValid).toBeFalsy();
  });

  it("valid game", () => {
    const isValid = validGame([
      ["x", "o", "x"],
      ["x", "x", "o"],
      ["o", "o", ""]
    ]);

    expect(isValid).toBeTruthy();
  });

  it("valid game: full", () => {
    const isValid = validGame([
      ["x", "o", "x"],
      ["x", "x", "o"],
      ["o", "o", "o"]
    ]);

    expect(isValid).toBeTruthy();
  });
});

describe("isWinner", () => {
  it("not winner", () => {
    const xWinner = isWinner(
      [["o", "o", "x"], ["x", "x", "o"], ["o", "o", "x"]],
      "x"
    );
    expect(xWinner).toBeFalsy();
  });
  it("first row", () => {
    const xWinner = isWinner(
      [["x", "x", "x"], ["o", "x", "o"], ["o", "o", ""]],
      "x"
    );
    expect(xWinner).toBeTruthy();
  });
  it("second row", () => {
    const xWinner = isWinner(
      [["o", "x", "o"], ["x", "x", "x"], ["o", "o", ""]],
      "x"
    );
    expect(xWinner).toBeTruthy();
  });
  it("third column", () => {
    const xWinner = isWinner(
      [["o", "x", "x"], ["x", "o", "x"], ["o", "o", "x"]],
      "x"
    );
    expect(xWinner).toBeTruthy();
  });
});

describe("findTicTacToeWinner", () => {
  it("x winner", () => {
    const result = findTicTacToeWinner([
      ["x", "x", "x"],
      ["o", "x", "o"],
      ["o", "o", ""]
    ]);

    expect(result).toBeTruthy();
  });

  it("x winner - other diagonal", () => {
    const result = findTicTacToeWinner([
      ["o", "x", "x"],
      ["o", "x", "o"],
      ["x", "o", ""]
    ]);

    expect(result).toBeTruthy();
  });

  it("x winner - diagonal", () => {
    const result = findTicTacToeWinner([
      ["x", "o", "x"],
      ["o", "x", "o"],
      ["o", "o", "x"]
    ]);

    expect(result).toBeTruthy();
  });
});

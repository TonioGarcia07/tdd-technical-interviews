import findTicTacToeWinner from "./exo3";

describe("findTicTacToeWinner", () => {
  it("first row", () => {
    const result = findTicTacToeWinner([
      ["x", "x", "x"],
      ["o", "x", "o"],
      ["o", "o", ""]
    ]);

    expect(result).toBeTruthy();
  });
});

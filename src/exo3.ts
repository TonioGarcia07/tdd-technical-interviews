/*
 * Exo 3: Tic-tac-toe
 *
 * ************************************************************************
 *
 * Given a game of tic-tac-toe (array of dimension 2), determine if there
 * is a winner.
 * Return true if there is a winner, false otherwise.
 *
 * ************************************************************************
 */

const findTicTacToeWinner = (game: string[][]): boolean => {
  return !game[0].find(el => el !== "x");
};

export default findTicTacToeWinner;

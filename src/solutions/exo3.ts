/*
 * Exo 2: Tic-tac-toe
 *
 * ************************************************************************
 *
 * Given a game of tic-tac-toe (array of dimension 2), determine if there
 * is a winner.
 * Return true if there is a winner, false otherwise.
 *
 * ************************************************************************
 *
 * Simple and fun problem but good to test ability to modularize, write
 * simple and well-documented code.
 */

export const validGame = (game: string[][]): boolean => {
  // Game invalid - incorrect dimensions
  if (game.find(row => row.length !== game.length)) {
    return false;
  }

  const letters = [...game[0], ...game[1], ...game[2]].filter(l => l !== "");
  const set = new Set(letters);
  // Game invalid - too many letters
  if (set.size > 2) {
    return false;
  }

  // Game invalid - one letter is present too often
  const hist = {};
  letters.forEach(letter => {
    if (!hist[letter]) {
      hist[letter] = 1;
    } else {
      hist[letter] += 1;
    }
  });

  const [a, b] = Object.values(hist);
  return Math.abs(a - b) < 2;
};

export const isWinner = (game: string[][], player: string): boolean => {
  const rowWinner = !!game.find(row => row.every(el => el === player));
  let colWinner = false;
  let diagWinner = true;
  let otherDiagWinner = true;

  for (let i = 0; i < game.length; i++) {
    colWinner = colWinner || game.map(row => row[i]).every(el => el === player);
    diagWinner = diagWinner && game[i][i] === player;
    otherDiagWinner =
      otherDiagWinner && game[i][game.length - 1 - i] === player;
  }

  return rowWinner || colWinner || diagWinner || otherDiagWinner;
};

const findTicTacToeWinner = (game: string[][]): boolean => {
  if (!validGame(game)) {
    return false;
  }

  const firstWinner = isWinner(game, "x");
  const secondWinner = isWinner(game, "o");
  return firstWinner || secondWinner;
};

export default findTicTacToeWinner;

// https://leetcode.com/problems/word-search/

// PROBLEM: Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell,
//  where "adjacent" cells are those horizontally or vertically neighboring.
//  The same letter cell may not be used more than once.

// let board = [["A", "B", "C", "E"],
//              ["S", "F", "C", "S"],
//              ["A", "D", "E", "E"]];

//EXAMPLE:Given word = "SEED", return true.
//        Given word = "ABCB", return false.
let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];

function findWord(board, search) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === search[0]) {
        //found our starting point
        let newCoord = checkNeighbors(board, [i, j], 0, search);
        if (newCoord) return true;
      }
    }
  }
  return false;
}

function checkNeighbors(board, posArr, count, word) {
  if (count === word.length - 1) return true;
  board[posArr[0]][posArr[1]] = "+";
  // CHECK NEIGHBORS
  if (
    board[posArr[0] - 1] &&
    board[posArr[0] - 1][posArr[1]] === word[count + 1]
  )
    if (checkNeighbors(board, [posArr[0] - 1, posArr[1]], count + 1, word))
      return true;
  if (
    board[posArr[0] + 1] &&
    board[posArr[0] + 1][posArr[1]] === word[count + 1]
  )
    if (checkNeighbors(board, [posArr[0] + 1, posArr[1]], count + 1, word))
      return true;
  if (board[posArr[0]] && board[posArr[0]][posArr[1] - 1] === word[count + 1])
    if (checkNeighbors(board, [posArr[0], posArr[1] - 1], count + 1, word))
      return true;
  if (board[posArr[0]] && board[posArr[0]][posArr[1] + 1] === word[count + 1])
    if (checkNeighbors(board, [posArr[0], posArr[1] + 1], count + 1, word))
      return true;
  board[posArr[0]][posArr[1]] = word[count];
  return false;
}

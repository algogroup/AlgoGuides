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
        let newCoord = checkNeighbors([i, j], 0, search);
        if (newCoord) return true;
      }
    }
  }
  function checkNeighbors(posArr, count, word) {
    if (count === word.length - 1) return true;
    board[posArr[0]][posArr[1]] = "+"; //Change letter to not use it again
    // CHECK NEIGHBORS
    if (
      board[posArr[0] - 1] &&
      board[posArr[0] - 1][posArr[1]] === word[count + 1]
    ) {
      if (checkNeighbors([posArr[0] - 1, posArr[1]], count + 1, word))
        continue
    }
    if (
      board[posArr[0] + 1] &&
      board[posArr[0] + 1][posArr[1]] === word[count + 1]
    ) {
      if (checkNeighbors([posArr[0] + 1, posArr[1]], count + 1, word))
        return true;
    }
    if (
      board[posArr[0]] &&
      board[posArr[0]][posArr[1] - 1] === word[count + 1]
    ) {
      if (checkNeighbors([posArr[0], posArr[1] - 1], count + 1, word))
        return true;
    }
    if (
      board[posArr[0]] &&
      board[posArr[0]][posArr[1] + 1] === word[count + 1]
    ) {
      if (checkNeighbors([posArr[0], posArr[1] + 1], count + 1, word))
        return true;
    }
    board[posArr[0]][posArr[1]] = word[count]; //reset letter
    return false;
  }
  return false;
}

console.log(findWord(board, "SEED"));

//PROBLEM:

// You are given a two-dimensiona array (matrix) of potentially unequal height and width containing only 0s and 1s.
// Each 0 represents land, and each 1 represents part of a river. A river consists of any number of adjacent 1s forming
// a river determine its size. Write a function that returns an array of the sizes of all rivers represented in the input
// matrix. Note that these sizes do not need to be in any particular order.

//EXAMPLE:

// Sample input:
// [
// [1,0,0,1,0],
// [1,0,1,0,0],
// [0,0,1,0,1],
// [1,0,1,0,1],
// [1,0,1,1,0]
// ]

// Sample output:
// [1,2,2,2,5]
// (1 length of 2 river,
// 3 length of 2 rivers,
// 1 length of 5 river)

let board = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
];

const rivers = arr => {
  let foundRivers = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let currentPlace = arr[i][j];
      if (currentPlace === 1) {
        foundRivers.push(findRivers(i, j));
      }
    }
  }
  function findRivers(i, j) {
    arr[i][j] = 0;
    let currentRiver = 1;
    if (arr[i][j + 1] && arr[i][j + 1] === 1) {
      currentRiver += findRivers(i, j + 1);
    }
    if (arr[i + 1] && arr[i + 1][j] === 1) {
      currentRiver += findRivers(i + 1, j);
    }
    if (arr[i - 1] && arr[i - 1][j] === 1) {
      currentRiver += findRivers(i - 1, j);
    }
    if (arr[i][j - 1] && arr[i][j - 1] === 1) {
      currentRiver += findRivers(i, j - 1);
    } else {
      return currentRiver;
    }
  }

  return foundRivers;
};
// function riverSizes(board) {
//   let rivers = [];
//   //find starting pts
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       if (board[i][j] === 1) {
//         board[i][j] === 0;
//         rivers.push(find(i, j, 1));
//       }
//     }
//   }
//   //   let count = 0;
//   function find(i, j, count) {
//     if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) {
//       return [false, count];
//     }
//     if (
//       //   i > 1 &&
//       board[i - 1] &&
//       board[i - 1][j] === 0 &&
//       board[i + 1] &&
//       board[i + 1][j] === 0 &&
//       board[i][j - 1] === 0 &&
//       board[i][j + 1] === 0
//     ) {
//       return [false, count];
//     }
//     if (find(i - 1, j, count++)[0]) return [false, count];
//     if (find(i + 1, j, count++)[0]) return [false, count];
//     if (find(i, j + 1, count++)[0]) return [false, count];
//     if (find(i, j - 1, count++)[0]) return [false, count];
//     if (board[i][j] === 1 && count > 1) {
//       return [true, count];
//     } else {
//       return [false, count];
//     }
//   }
//   return rivers;
// }

console.log(rivers(board));

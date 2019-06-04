// RIVER SIZES

// You are given a two-dimensiona array (matrix) of potentially unequal height and width containing only 0s and 1s. 
// Each 0 represents land, and each 1 represents part of a river. A river consists of any number of adjacent 1s forming 
// a river determine its size. Write a function that returns an array of the sizes of all rivers represented in the input 
// matrix. Note that these sizes do not need to be in any particular order.
/*
Sample input:
[
[1,0,0,1,0],
[1,0,1,0,0],
[0,0,1,0,1],
[1,0,1,0,1],
[1,0,1,1,0]
]

Sample output:
[1,2,2,2,5]
(1 length of 2 river,
3 length of 2 rivers,
1 length of 5 river)
*/

const rivers = (arr) => {

  let foundRivers = [] 
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j ++) {
      let currentPlace = arr[i][j]
      if (currentPlace === 1) { // loop throught the array until a river is found
        foundRivers.push(findRivers(i, j)) // call the helper function recursively on the river
      }
    }
  }

  function findRivers (i, j) {
    arr[i][j] = 0 // mark the river as counted
    let riverCount = 1 // count the river
    if (arr[i][j + 1] && arr[i][j + 1] === 1) {
      riverCount += findRivers(i, j + 1)
    } // if river continues east call findRivers on east coordinates and add it to the riverCount
    if (arr[i + 1] && arr[i + 1][j] === 1) {
      riverCount += findRivers(i + 1, j)
    } // if river continues north call findRivers on north coordinates and add it to the riverCount

    if (arr[i-1] && arr[i - 1][j] === 1) {
      riverCount += findRivers(i - 1, j)
    } // if river continues south call findRivers on south coordinates and add it to the riverCount

    if (arr[i][j - 1] && arr[i][j - 1] === 1) {
      riverCount += findRivers(i, j -1)
    } // if river continues west call findRivers on west coordinates and add it to the riverCount

    return riverCount
  }
  return foundRivers
}


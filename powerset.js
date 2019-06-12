function powerset(array) {
  const output = [];
  for (let i = 0; i < Math.pow(2, array.length); i++) {
    const subarray = [];
    for (let j = 0; j < array.length; j++) {
      if ((Math.pow(2, array.length) & i) > 0) {
        subarray.push(array[j]);
      }
    }
    output.push(subarray);
  }
  return output;
}



// console.log(Permutations());
// console.log(SubArray())[(1, 2, 3)];

// PERMUTATIONS: [[1,2,3][1,3,2][2,1,3][2,3,1][3,1,2][3,2,1]]
// SUBSET: [1] [2,3] [3,2]
// POWERSET: [[][1][2][3][1,2][1,3][2,3][1,2,3] Unique Only//Contains any length
// SUBARRAY: Contiguous

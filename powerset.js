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

//powerset alternative

function powerSet(arr) {
  const subs = [[]];
  for (let i = 0; i < arr.length; i++) {
    const subsLen = subs.length; //must readjust length
    for (let j = 0; j < subsLen; j++) {
      subs.push(subs[j].concat(arr[i]));
    }
  }
  return subs;
}

console.log(powerSet([1, 2, 3]));

// PERMUTATIONS: [[1,2,3][1,3,2][2,1,3][2,3,1][3,1,2][3,2,1]]
// SUBSET: [1] [2,3] [3,2]
// POWERSET: [[][1][2][3][1,2][1,3][2,3][1,2,3] Unique Only//Contains any length
// SUBARRAY: Contiguous

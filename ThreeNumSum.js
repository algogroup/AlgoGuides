// https://www.algoexpert.io/questions/Three%20Number%20Sum

// PROBLEM: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.

// EXAMPLE:
// Input: [12,3,1,2,-6,5,-8,6], 0
// Output: [[-8,2,6],[-8,3,5],[-6,1,5]]

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const tripletsArr = [];
  for (let i = 0; i < array.length - 2; i++) { //looping up to the third to last index
    const curVal = array[i];
    let lPointer = i + 1; //define left and right pointer
    let rPointer = array.length - 1;
    while (lPointer < rPointer) { //At each index, calculate value which when added to the curVal would sum up to targetsum
      const complementVal = targetSum - curVal;
      let twoSum = array[lPointer] + array[rPointer];
      if (twoSum > complementVal) { //depending on the value of twosum, which is the sum of two elements at left and right pointers,
        rPointer--;
      } else if (twoSum < complementVal) {  //either move the left or right pointer until you find the twosum which would equal to complementval
        lPointer++;
      } else {
        tripletsArr.push([curVal, array[lPointer], array[rPointer]]); //push the elements that sum up to target sum into the triplets array
        rPointer--;
      }
    }
  }
  return tripletsArr;
}

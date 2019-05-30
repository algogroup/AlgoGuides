/*
 You are given a non-empty array of integers. Each element Represents the maximum number of steps you canTake forward. For example, if the element at index 1 is 3, you can go from index 1 to index 2, 3, or 4. Write a function that returns the minimum number of jumps needed to reach the final index. Note that jumping from index i to index i + x always constitutes 1 jump, no matter howLarge x is.
 */

function minNumberOfJumps(arr) {
  let jumps = 0 // counter for jumps
	if (arr.length === 1) {
		return 0
  } // break case for when the array has been jumped through
  if (arr[0] >= arr.length - 1) {
    return 1 // break case for the last jump
  } else if (arr[0] <= arr.length - 1) {
    let bestJumpIndex = 0 
    let jumpValue = 0
    for (let i = 0; i <= arr[0]; i++) {
      if (arr[i] + i >= jumpValue) {
        jumpValue = arr[i] + i
        bestJumpIndex = i
      } // loop through each possible jump and add the index to its value to evaluate its trajectory
    }
    jumps ++
    return jumps + minNumberOfJumps(arr.slice(bestJump))
    // count the jump and run the function recursively to make the next jump
  }
}

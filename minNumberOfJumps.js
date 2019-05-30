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

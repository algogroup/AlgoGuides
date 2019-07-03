//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
//PROBLEM: Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

//EXAMPLE: Input: nums = [5,7,7,8,8,10], target = 8
//Output: [3,4]

//helper function, utilizing binary search
function check(arr, target) {
  let l = 0;
  let h = arr.length - 1;
  let mid = Math.floor(l + h / 2);
  if (arr.length === 0 || arr.length === 1) return -1; //edge cases
  do {
    if (arr[mid] === target) return mid;
    if (arr[l] === target) return l;
    if (arr[h] === target) return h; // if high, low, or mid is target, return it
    if (arr[mid] > target) h = mid;
    if (arr[mid] < target) l = mid;
    mid = Math.floor((l + h) / 2);
  } while (l !== h - 1 && mid !== h && mid !== l);
  return -1;
}

function searchRange(arr, tgt) {
  if (arr.length === 1 && arr[0] === tgt) return [0, 0]; //edge case
  let idx = check(arr, tgt); //call helper function
  if (idx === -1) return [-1, -1]; //if return from check function is -1, return [-1, -1]
  let left = idx;
  let right = idx;
  for (let i = 0; i < arr.length; i++) {
    if (arr[left] === tgt) left--; //push left and right once we find the index to see the full range
    if (arr[right] === tgt) right++;
    if (arr[left] !== tgt && arr[right] !== tgt) break; //break case if neither left nor right are no longer target
  }
  return [left + 1, right - 1];
}

console.log(
  searchRange(
    [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6, 6, 7, 8, 8],
    (target = 4)
  )
);
// Output: [10,12]

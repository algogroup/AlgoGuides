// https://leetcode.com/problems/search-insert-position/

// PROBLEM: Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You may assume no duplicates in the array.

// EXAMPLE:
// Input: [1,3,5,6], 5
// Output: 2
// Input: [1,3,5,6], 0
// Output: 0

var searchInsert = function(nums, target) {
  //if the target is greater than the last element in the array, return length of the array
  if (target > nums[nums.length - 1]) return nums.length;
  //initialize left pointer and right pointer
  let lPointer = 0;
  let rPointer = nums.length;
  let midPoint;
  while (lPointer <= rPointer) {
    //reassign value of midpoint at every iteration
    midPoint = Math.floor((lPointer + rPointer) / 2);
    //if element at midpoint in the array is equal to the target, return midpoint
    if (nums[midPoint] === target) return midPoint;
    else if (nums[midPoint] > target) {
      //if element at midpoint in the array is greater than the target, move the right pointer
      rPointer = midPoint - 1;
    } else if (nums[midPoint] < target) {
      //if element at midpoint in the array is less than the target, move the left pointer
      lPointer = midPoint + 1;
    }
  }
  if (lPointer > nums.length - 1) return nums.length;
  else if (rPointer < 0) return 0;
  else return lPointer;
};

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.

var searchInsert = function(nums, target) {
  if (target > nums[nums.length - 1]) return nums.length;
  let lPointer = 0;
  let rPointer = nums.length;
  let midPoint;
  while (lPointer <= rPointer) {
    midPoint = Math.floor((lPointer + rPointer) / 2);
    if (nums[midPoint] === target) return midPoint;
    else if (nums[midPoint] > target) {
      rPointer = midPoint - 1;
    } else if (nums[midPoint] < target) {
      lPointer = midPoint + 1;
    }
  }
  if (lPointer > nums.length - 1) return nums.length;
  else if (rPointer < 0) return 0;
  else return lPointer;
};

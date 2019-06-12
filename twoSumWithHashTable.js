//https://leetcode.com/problems/two-sum/

//Description: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Example:Given nums = [2, 7, 11, 15], target = 9,

function twoSum(arr, n) {
  let hash = {}; //set up hash table
  for (let i = 0; i < arr.length; i++) {
    if (n - arr[i] in hash) {
      //check to see if the number minus the current one you're iterating through is defined already in hash
      return [hash[n - arr[i]], i]; //return both indexes
    } else {
      hash[arr[i]] = i; // if not, add it to the hash, with the key as the number, and the value as the index
    }
  }
}

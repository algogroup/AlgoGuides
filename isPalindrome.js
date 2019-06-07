//Problem: Write a function that takes in a non-empty string and that returns a boolean representing whether or not the string is a palindrome. A palindrome is defined as a string that is written the same forward and backward.
//Sample: input string - "abcba" || result - true(it is palindrome)

function isPalindrome(string) {
  //initialize left and right pointers
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    //check to see if letters at left and right pointers are equal
    if (string[left] === string[right]) {
      //if so increment/decrement the pointers
      left++;
      right--;
    } else {
      return false;
    }
  }
  //if you have reached this point, it means the string is palindrome so return true
  return true;
}


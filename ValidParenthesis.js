//https://leetcode.com/problems/valid-parentheses/
//PROBLEM: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//EXAMPLE INPUT:
//console.log(parenthesis("(])")); => FALSE
//console.log(parenthesis("([)]")); => FALSE
//console.log(parenthesis("([])")); = TRUE

function parenthesis(str) {
  let stack = [];
  if (str.length === 1) return false;
  const pattern = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] in pattern) {
      stack.push(str[i]); //if current letter in str is in pattern, push
    } else if (pattern[stack[stack.length - 1]] === str[i]) {
      //else if its in our stack's last position, pop it off our stack
      stack.pop();
    } else {
      return false; //if its neither of these conditions, return false
    }
  }
  return stack.length ? false : true;
}

//must close in the same order in which they were opened

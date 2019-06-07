// Problem : https://leetcode.com/problems/add-two-numbers/
//           You are given two non-empty linked lists representing two non-negative integers.
//           The digits are stored in reverse order and each of their nodes contain a single digit.
//           Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// 104 ms, faster than 97.99% of JavaScript online submissions
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(); // pointer for output linked list
  let newHead = l3; // pointer to head of output list
  let carry = 0;

  while (l1 || l2) {
    let num1 = l1.val || 0;
    let num2 = l2.val || 0;
    let sum = num1 + num2; // find the sum of the parralel nodes

    if (sum >= 10) { // then carry
      l3.val = (sum % 10) + carry;
      carry = Math.floor(sum / 10); 
    } else { 
      l3.val = sum + carry;
      if (l3.val >= 10) { // carry again
        carry = Math.floor(l3.val / 10);
        l3.val = l3.val % 10;
      } else {
        carry = 0; // no carry
      }
    }

    if (l1.next || l2.next || carry) {
      l3.next = new ListNode(carry); 
    } // create a new node if necessary
    l1 = l1.next || 0;
    l2 = l2.next || 0;
    l3 = l3.next; // set pointers to next node for all linked lists
  }
  return newHead;
};

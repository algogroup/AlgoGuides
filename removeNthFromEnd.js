/*
 * PROBLEM: Given a linked list, remove the n-th node from the end of list and return its head.
 *
 * EXAMPLE: Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 * Given n will always be valid.
 *
 * * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 */

var removeNthFromEnd = function(head, n) {
  if (!head.next) return head.next;
  let beforeDeleted;
  let deleted;
  let tailPointer = head;

  while (tailPointer.next !== null) {
    if (n === 1) deleted = head;
    if (n === 0) beforeDeleted = head;

    if (deleted) deleted = deleted.next;
    if (beforeDeleted) beforeDeleted = beforeDeleted.next;
    tailPointer = tailPointer.next;
    n--;
  }
  if (deleted && beforeDeleted) beforeDeleted.next = deleted.next;
  else if (!beforeDeleted && !deleted) head = head.next;
  else if (beforeDeleted === undefined) head.next = deleted.next;
  return head;
};

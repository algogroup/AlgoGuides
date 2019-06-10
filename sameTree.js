//https://leetcode.com/problems/same-tree/
//PROBLEM: Given two binary trees, write a function to check if they are the same or not.
//        Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
//EXAMPLE:
// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true

// * function TreeNode(val) {
//     *     this.val = val;
//     *     this.left = this.right = null;
//     * }

var isSameTree = function(p, q) {
  if (p && q) {
    if (p.val === null && q.val === null) return true; //if both vals are null, the tree has ended and they are equivalent up until this point in the recursive calls
    if (q.val === null || p.val === null) return false; // if one or the other is null and the other isnt, they are not equivalent
    if (p.val !== q.val) return false; //if they are not equal return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); //evaluate both left and right recursively
  } else if (!p && !q) {
    return true; //if neither trees exist return true
  } else {
    return false;
  }
};

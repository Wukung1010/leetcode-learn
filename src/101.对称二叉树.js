/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const arr = [];
  arr.push(root);
  arr.push(root);
  while(arr.length !== 0) {
    const left = arr.pop();
    const right = arr.pop();
    if (!left && !right) {
      continue;
    } else if (!left || !right) {
      return false;
    } else if (left.val !== right.val) {
      return false;
    }
    arr.push(left.left);
    arr.push(right.right);
    arr.push(left.right);
    arr.push(right.left);
  }
  return true;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p && q) {
    if (p.val === q.val) {
      let sameLeft = false;
      let sameRight = false;
      if (p.left) {
        sameLeft = q.left && isSameTree(p.left, q.left);
      } else {
        sameLeft = !q.left
      }
      if (p.right) {
        sameRight = q.right && isSameTree(p.right, q.right);
      } else {
        sameRight = !q.right;
      }
      return !!(sameLeft && sameRight);
    }
    return false;
  } else if (p || q) {
    return false;
  }
  return true;
};
// @lc code=end

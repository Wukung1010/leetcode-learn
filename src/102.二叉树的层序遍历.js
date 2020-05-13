/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const result = [];
  function loop (node, dep, arr) {
    const a = arr[dep] || [];
    a.push(node.val);
    arr[dep] = a;
    if (node.left) {
      loop(node.left, dep + 1, arr);
    }
    if (node.right) {
      loop(node.right, dep + 1, arr);
    }
  }
  loop(root, 0, result);
  return result;
};
// @lc code=end


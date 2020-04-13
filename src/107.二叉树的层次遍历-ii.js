/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * BFC 广度遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  let arr = [root];
  const result = [];
  while(arr.length !== 0) {
    const newArr = [];
    const values = [];
    arr.forEach((item) => {
      values.push(item.val);
      if (item.left) {
        newArr.push(item.left);
      }
      if (item.right) {
        newArr.push(item.right);
      }
    });
    result.unshift(values);
    arr = newArr;
  }
  return result;
};
// @lc code=end


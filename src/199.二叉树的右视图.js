/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) {
    return [];
  }
  const result = [];
  let arr = [root];
  while(arr.length !== 0) {
      result.push(arr[arr.length - 1].val);
      const newArr = [];
      for(let i = 0; i < arr.length; i++) {
          const node = arr[i]
          if (node.left) {
              newArr.push(node.left)
          }
          if (node.right) {
              newArr.push(node.right)
          }
      }
      arr = newArr;
  }
  return result;
};
// @lc code=end


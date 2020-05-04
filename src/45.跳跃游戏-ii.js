/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let result = 0;
  let pos = nums.length - 1;
  while(pos !== 0) {
    for (let i = 0; i < pos; i++) {
      if ((nums[i] + i) >= pos) {
        result += 1;
        pos = i;
        break;
      }
    }
  }
  return result;
};
// @lc code=end


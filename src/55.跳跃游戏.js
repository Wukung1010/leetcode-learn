/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) {
      return false;
    }
    max = Math.max(max, nums[i] + i);
  }
  return true;
};

var canJump = function(nums) {
  if (nums.length === 1) {
    return true;
  }
  for (let i = 0; i < nums.length; i++) {
      if(nums[i] === 0) {
        if (i === 0) {
          return false;
        }
        for (let j = i - 1; j >= 0; j--) {
          if (nums[j] + j > i) {
            break;
          } else if (j === 0 && i !== nums.length - 1) {
            return false;
          }
        }
      }
  }
  return true;
}
// @lc code=end

canJump([2,0,0])
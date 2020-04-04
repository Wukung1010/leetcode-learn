/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * 双指针算法
 * 解题的关键在于调整思维模式
 * 每次计算的时候 应该专注于计算 当前点 这一个点能接多少水
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  while(left < right) {
    if (height[left] < height[right]) {
      if (leftMax < height[left]) {
        leftMax = height[left];
      } else {
        result += (leftMax - height[left]);
      }
      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        result += (rightMax - height[right]);
      }
      right--;
    }
  }
  return result;
};
// @lc code=end


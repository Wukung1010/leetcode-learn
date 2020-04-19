/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * 暴力算法
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    let temp = 0;
    for (let j = i; j < height.length; j++) {
      temp = Math.max(temp, Math.min(height[i], height[j]) * (j - i))
    }
    max = Math.max(max, temp);
  }
  return max;
};
// @lc code=end


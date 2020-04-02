/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * 算法 快慢双指针
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[result] = nums[i];
//       result++;
//     }
//   }
//   return result;
// };

/**
 * 双指针 优化版本
 *  1、将匹配的字符和数组末尾互换
 *  2、将数组长度减一
 */
var removeElement = function(nums, val) {
  let result = nums.length;
  let i = 0;
  while(i < result) {
    if (nums[i] === val) {
      const temp = nums[i];
      nums[i] = nums[result - 1];
      nums[result - 1] = temp;
      result--;
    } else {
      i++
    }
  }
  return result;
};
// @lc code=end


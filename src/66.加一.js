/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * 从右开始加一、进位
 * 计算超大数字的情况
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let add = true;
  let index = digits.length - 1;
  while (add && index >= 0) {
    const num = digits[index] + 1;
    add = num > 9;
    digits[index] = num % 10;
    index--;
  }
  add && digits.unshift(1);
  return digits;
};
// @lc code=end
/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let len = Math.max(a.length, b.length);
  let result = '';
  let add = false;
  for (let i = 0; i < len; i++) {
    const num = 
      (parseInt(a.charAt(a.length - 1 - i)) || 0)
      + (parseInt(b.charAt(b.length - 1 - i)) || 0)
      + (add ? 1: 0);
    add = num / 2 >= 1;
    result = num % 2 + result;
  }
  add && (result = '1' + result);
  return result;
};
// @lc code=end

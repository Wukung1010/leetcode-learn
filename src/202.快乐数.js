/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const s = new Set();
  s.add(n);
  while(n !== 1) {
    n = sum(n);
    if (s.has(n)) {
      return false;
    } else {
      s.add(n);
    }
  }
  return true;
};

var sum = function(n) {
  let result = 0;
  while(n / 10 > 0) {
    result += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return result;
}
// @lc code=end


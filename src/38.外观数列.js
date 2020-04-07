/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let result = '1';
  for (let i = 2; i <= n; i++) {
    let newStr = '';
    let flag = result.charAt(0), count = 1;
    for (let j = 1; j < result.length; j++) {
      const str = result.charAt(j);
      if (flag === str) {
        count += 1;
      } else {
        newStr += `${count}${flag}`;
        flag = str;
        count = 1;
      }
    }
    newStr += `${count}${flag}`;
    result = newStr;
  }
  return result;
};
// @lc code=end

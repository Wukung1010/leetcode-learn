/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = ['('];
  let len = 2 * n - 1;
  while(len > 0) {
    const newResult = [];
    result.forEach((item) => {
      newResult.push(item + '(');
      newResult.push(item + ')');
    });
    result = newResult;
    len -= 1;
  }
  result = result.filter((item) => {
    let count = 0;
    for (let i = 0; i < item.length; i++) {
      if (item.charAt(i) === '(') {
        count += 1;
      } else {
        count -= 1;
      }
      if (count < 0) {
        break;
      }
    }
    return count === 0;
  });
  return result;
};
// @lc code=end

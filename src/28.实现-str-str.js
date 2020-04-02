/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack === needle || needle.length === 0) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    const str = haystack.charAt(i);
    if (needle.startsWith(str) && haystack.substr(i, needle.length) === needle) {
      return i;
    }
  }
  return -1;
};
// @lc code=end


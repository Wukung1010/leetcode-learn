/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length;
  let map = {};
  let result = 0;
  let p = 0;
  for (let i = 0; i < s.length; i++) {
    const str = s.charAt(i);
    if (map[str] !== undefined && map[str] >= p) {
      result = Math.max(result, i - p);
      p = map[str] + 1;
      map[str] = i;
    } else {
      map[str] = i;
    }
  }
  result = Math.max(result, s.length - p);
  return result;
};
// @lc code=end

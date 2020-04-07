/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * 嗯 关键是trim
 * 这道题不咋地
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  s = s.split(' ');
  return s[s.length - 1].length;
};
// @lc code=end


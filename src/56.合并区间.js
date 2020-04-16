/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length < 2) return intervals;
  const result = [];
  intervals.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] === b[0]) {
      return 0;
    } else {
      return 1;
    }
  });
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] < intervals[i][0]) {
      result.push(intervals[i - 1]);
    } else {
      intervals[i][0] = intervals[i - 1][0];
      intervals[i][1] = Math.max(intervals[i - 1][1], intervals[i][1]);
    }
    if (i === intervals.length - 1) {
      result.push(intervals[i]);
    }
  }
  return result;
};
// @lc code=end

// merge([[1,3],[2,6],[8,10],[15,18]])
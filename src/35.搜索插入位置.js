/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * 算法 二分法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let begin = 0;
  let end = nums.length - 1;
  while (begin < end) {
    let mid = Math.floor((begin + end) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      begin = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if (nums[begin] >= target) {
    return begin;
  } else {
    return begin + 1;
  }
};
// @lc code=end


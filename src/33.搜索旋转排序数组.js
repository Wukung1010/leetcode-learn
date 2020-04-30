/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums.indexOf(target);
  if (nums[0] < nums[nums.length - 1]) {
    return midSearch(nums, target);
  } else {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] > nums[i]) {
        if (target >= nums[0]) {
          return midSearch(nums.slice(0, i), target);
        } else {
          let result = midSearch(nums.slice(i), target);
          if (result > -1) {
            return i + result;
          }
          return -1;
        }
      }
    }
  }
};

var midSearch = function (nums, target) {
  let left = 0;
  let right  = nums.length - 1;
  while(left <= right) {
    let mid = Math.ceil((left + right) / 2);
    if (nums[mid] === target) {
      return mid; 
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
// @lc code=end


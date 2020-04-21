/*
 * @lc app=leetcode.cn id=1248 lang=javascript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  let p1 = -1;
  let arr = [];
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 > 0) {
      arr.push(i);
      if (arr.length > k) {
        const left = arr[0] - p1;
        const right = arr[k] - arr[k - 1];
        result += (left * right);
        p1 = arr.shift();
      }
    }
    if (i === nums.length - 1 && arr.length === k) {
      const left = arr[0] - p1;
      const right = nums.length - arr[k - 1];
      result += (left * right);
    }
  }
  return result;
};
// @lc code=end


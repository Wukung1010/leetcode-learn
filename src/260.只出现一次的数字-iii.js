/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let a = 0;
  nums.forEach((item) => {
    a ^= item;
  });
  const diff = a & (-a);
  let num = 0;
  nums.forEach((item) => {
    if (diff & item) {
      num ^= item;
    }
  });
  return [num, a ^ num];
};
// @lc code=end

singleNumber([1,2,1,3,2,5])
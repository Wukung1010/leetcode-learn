/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * 算法 快慢双指针
 *  1、result是慢指针
 *  2、i是快指针
 *  3、如果快指针所在位置不等于慢指针，则将快指针的值赋值到慢指针的位置，慢指针加一
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let result = 0;
  let temp;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (temp !== num) {
      nums[result] = num;
      temp = num;
      result++;
    }
  }
  return result;
};
// @lc code=end


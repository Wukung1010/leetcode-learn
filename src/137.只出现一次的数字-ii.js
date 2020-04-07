/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   let a = 0;
//   let b = 0;
//   nums.forEach((item) => {
//     b = b ^ item & ~a;
//     a = a ^ item & ~b;
//   });
//   return b;
// };

/**
 * 方便理解
 */
var singleNumber = function(nums) {
  let one = 0;
  let two = 0;
  let three = 0;
  nums.forEach((item) => {
    two = two | (one & item); // one & item 判断是否出现过一次
    one = one ^ item; // 在one里面加上这一次
    three = two & one; // 如果一次里面和两次里面都有，则在三个里面加上
    one = one & ~three;
    two = two & ~three; // 如果第三个里面有，则在一和二里面全都删掉
  });
  return one;
};
// @lc code=end

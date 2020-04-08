/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * 
 * x2 = (x1 + x0/x1)/2
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//   if (x < 2) return x;
//   let x0 = x;
//   let x1 = x0;
//   let x2 = (x1 + x0 / x1) / 2;
//   while(Math.abs(x1 - x2) >= 1) {
//     x1 = x2;
//     x2 = (x1 + x0 / x1) / 2;
//   }
//   return parseInt(x2);
// };

// var mySqrt = function(x) {
//   if (x < 2) return x;
//   let left = parseInt(Math.pow(Math.E, Math.log(x) / 2));
//   let right = left + 1;
//   return right * right > x ? left : right;
// }

/**
 * 二分法
 * @param {} x 
 */
var mySqrt = function(x) {
  if (x < 2) return x;
  let left = 2;
  let right = x / 2;
  let point;
  while(left <= right) {
    point = left + parseInt((right - left) / 2);
    let temp = point * point;
    if (temp > x) {
      right = point - 1;
    } else if (temp < x) {
      left = point + 1;
    } else {
      return point;
    }
  }
  return parseInt(right);
}
// @lc code=end

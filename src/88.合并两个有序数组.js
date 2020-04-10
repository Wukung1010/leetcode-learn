/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//   for (let i = 0; i < m; i++) {
//     const num1 = nums1[i];
//     const num2 = nums2[0];
//     if (num1 > num2) {
//       nums1[i] = num2;
//       nums2[0] = num1;
//       for (let j = 1; j < n; j++) {
//         const a = nums2[j - 1];
//         const b = nums2[j];
//         if (a > b) {
//           nums2[j - 1] = b;
//           nums2[j] = a;
//         }
//       }
//     }
//   }
//   for (let i = m; i < m + n; i++) {
//     nums1[i] = nums2.shift();
//   }
// };

/**
 * 双指针 从后开始的算法
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = n + m - 1;
  while(p >= 0) {
    if (p1 >= 0 && p2 >= 0) {
      nums1[p--] = (nums1[p1] || 0) > (nums2[p2] || 0) ? nums1[p1--]: nums2[p2--];
    } else if (p1 >= 0) {
      nums1[p--] = nums1[p1--];
    } else {
      nums1[p--] = nums2[p2--];
    }
  }
}
// @lc code=end


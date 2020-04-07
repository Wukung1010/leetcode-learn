/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * 动态规划、贪心法
 * 算法的关键分两步
 *  1、算出每个节点的最优解，最优解就是到这一点的时候能算出来的最大值
 *  2、找出所有节点最优解的最优解
 *  这两步可以合并成一步                                                
 *  最优解->如果每个节点都是最优解，则当前节点计算最优解就可以分为两种情况：
 *    1、加上前一个节点是当前节点的最优解，对应的是加上当前节点的操作
 *    2、不加前一个节点是当前节点的最优解，对应的是从当前节点开始的操作
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let cache = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cache = Math.max(nums[i], cache + nums[i]);
    result = Math.max(result, cache);
  }
  return result;
};
// @lc code=end


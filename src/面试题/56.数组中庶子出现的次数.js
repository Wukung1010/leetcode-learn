/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let a = 0;
  let b = 0;
  let c = 0;
  nums.forEach((item) => {
    c ^= item;
  });
  let mark = 1;
  while((mark & c) === 0) {
    mark <<= 1;
  }
  nums.forEach((item) => {
    if ((mark & item) === 0) {
      a ^= item
    } else {
      b ^= item;
    }
  });
  return [a, b];
};
/**
 * 2020-04-01
 * 最长公共前缀
 */

/**
 * 1、创建游标
 * 2、便利查看游标所在位置字符是否相同
 * 3、相同游标右移，不同返回
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = '';
  let index = 0;
  if (strs.length < 1) return result;
  if (strs.length === 1) return strs[0];
  while (1) {
      let cache = '';
      let success = strs.every((item, i) => {
          if (item.length <= index) {
              return false;
          }
          let str = item.charAt(index);
          if (i === 0) {
              cache = str;
              return true;
          }
          return cache === str;
      });
      if (success) {
          index++;
          result += cache;
      } else {
          break;
      }
  }
  return result;
};
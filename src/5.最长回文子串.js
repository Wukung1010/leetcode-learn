/**
 * 2020-04-01
 * 最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */

/**
 * 算法：中心扩散
 *  1、遍历每个字母然后
 *  2、设置左点和右点，如果左右相同则右游标向右移动一位（左右相同中间部分肯定是回文）
 *  3、左右开始扩散
 *  4、比较回文大小
 *  5、结束
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const result = [0, 0];
  const len = s.length;
  for (let i = 0; i < len; i++) {
      let left = i;
      let right = i;
      while (right < len && s.charAt(right + 1) === s.charAt(left)) {
          right++;
      }
      while (left > 0 && right < len && s.charAt(left - 1) === s.charAt(right + 1)) {
          left--;
          right++;
      }
      if (right - left > result[1] - result[0]) {
          result[0] = left;
          result[1] = right;
      }
  }
  return s.substr(result[0], result[1] - result[0] + 1);
};
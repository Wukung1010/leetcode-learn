/**
 * 2020-04-01
 * 罗马数字转整数
 */

/**
 * 便利字符，如果字符对应的数字比右边小则减去，否则加上。
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0;
  let map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  for (let i = 0; i < s.length; i++) {
      const str = s.charAt(i);
      const next = s.charAt(i + 1);
      if (next && map[str] < map[next]) {
          result -= map[str];
      } else {
          result += map[str];
      }
  }
  return result;
};
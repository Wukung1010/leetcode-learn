/**
 * 2020-04-01
 * 有效的括号
 */

/**
 * 算法一
 *  使用栈来操作
 *  1、左括号推入
 *  2、右括号弹出
 *  3、比对弹出的左括号是否与右括号匹配
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  const left = ['(', '{', '['];
  const right = [')', '}', ']'];
  for (let i = 0; i < s.length; i++) {
      const str = s.charAt(i);
      if (left.indexOf(str) > -1) {
          stack.push(str);
      } else {
          const pre = stack.pop();
          if (right[left.indexOf(pre)] !== str) {
              return false;
          }
      }
  }
  return stack.length === 0;
};

/**
 * 算法二
 *  小技巧，一步一步的删除成对的括号，如果正好删完则全都匹配。
 *  但是实际js的效率会比算法一要低很多，其他服务端语言环境下，这种算法会更有效把
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  while(s.indexOf('{}') > -1 || s.indexOf('()') > -1 || s.indexOf('[]') > -1) {
      s = s.replace('{}', '');
      s = s.replace('()', '');
      s = s.replace('[]', '');
  }
  return s === '';
};
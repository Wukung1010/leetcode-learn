/**
 * 2020-04-01
 * 有效括号的嵌套深度
 */

/**
 * 说实话这个题目没看懂啥意思，看评论说主要是求按括号划分出来的A和B的深度最接近即可（0和1分别代表A和B）。
 *  1、先按照括号吧深度算出来
 *  2、按奇偶来划分出A和B这样深度最接近
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
  let deep = 0;
  let result = [];
  for (let i = 0; i < seq.length; i++) {
      const str = seq.charAt(i);
      if (str === '(') {
          result.push(deep % 2);
          deep += 1;
      } else {
          deep -= 1;
          result.push(deep % 2);
      }
  }
  return result;
};
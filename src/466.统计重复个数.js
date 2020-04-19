/*
 * @lc app=leetcode.cn id=466 lang=javascript
 *
 * [466] 统计重复个数
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
  // s1指针
  let p1 = 0;
  // s2指针
  let p2 = 0;
  // s2重复次数
  let count = 0;
  // 记录s2最后一个字符的出现在s1中的位置
  let map = {};
  while(p1 < s1.length * n1) {
    if (s1.charAt(p1 % s1.length) === s2.charAt(p2)) {
      p2++;
      if (p2 === s2.length) {
        // 重复加一
        count += 1;
        if (map[p1 % s1.length]) {
          // 一个循环的长度
          const loop = p1 - map[p1 % s1.length][0];
          // 剩下的部分中有能有多少个循环
          let lcount = Math.floor((s1.length * n1 - 1 - p1) / loop);
          // 加上次数
          count += (lcount * (count - map[p1 % s1.length][1]));
          // 指针快进
          p1 += lcount * loop;
        } else {
          map[p1 % s1.length] = [p1, count];
        }
        p2 = 0;
      }
    }
    p1++;
  }
  return Math.floor(count / n2);
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      let num = row[j];
      if (num === '1') {
        let size = 1;
        let next = true;
        while(next && matrix[i + size] && matrix[i][j + size]) {
          for (let ii = 0; ii <= size; ii++) {
            if (matrix[i + ii][j + size] === '0') {
              next = false;
              break;
            }
          }
          if (next) {
            for (let jj = 0; jj <= size; jj++) {
              if (matrix[i + size][j + jj] === '0') {
                next = false;
                break;
              }
            }
          }
          next && (size += 1);
        }
        result = Math.max(result, size);
      }
    }
  }
  return result * result;
};
// @lc code=end

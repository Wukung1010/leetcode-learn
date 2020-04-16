/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * 广度搜索
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// var updateMatrix = function(matrix) {
//   const n = matrix.length;
//   const m = matrix[0].length;
//   const dx = [1, 0, -1, 0];
//   const dy = [0, 1, 0, -1];
//   const dist = [];
//   const cache = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] === 0) {
//         const arr = dist[i] || [];
//         arr[j] = 0;
//         dist[i] = arr;
//         cache.push([i, j]);
//       }
//     }
//   }
//   while(cache.length > 0) {
//     const offset = cache.pop();
//     const num = dist[offset[0]][offset[1]];
//     for (let i = 0; i < 4; i++) {
//       const newX = dx[i] + offset[0];
//       const newY = dy[i] + offset[1];
//       if (newX >= 0 &&  newY >= 0 && newX < n && newY < m) {
//         const val = dist[newX] && dist[newX][newY];
//         if (val === undefined) {
//           const arr = dist[newX] || [];
//           arr[newY] = num + 1;
//           dist[newX] = arr;
//           cache.unshift([newX, newY]);
//         }
//       }
//     }
//   }

//   return dist;
// };

//一、dp常数优化版
let updateMatrix = (matrix)=> {
  let rows = matrix.length, cols = matrix[0].length
  let dp = new Array(rows).fill(Infinity).map(()=>new Array(cols).fill(Infinity))
  
  for(let r = 0; r < rows; r++){
    for (let c = 0; c < cols; c++) {
      if(matrix[r][c] === 0) dp[r][c] = 0
      else {
        if(r > 0) dp[r][c] = Math.min(dp[r][c], dp[r - 1][c] + 1)
        if(c > 0) dp[r][c] = Math.min(dp[r][c], dp[r][c - 1] + 1)
      }
    }
  }

  for(let r = rows - 1; r >= 0; r--){
    for (let c = cols - 1; c >= 0; c--) {
      if(r < rows - 1) dp[r][c] = Math.min(dp[r][c], dp[r + 1][c] + 1)
      if(c < cols - 1) dp[r][c] = Math.min(dp[r][c], dp[r][c + 1] + 1)
    }
  }
  return dp
};

// @lc code=end
/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * 暴力算法
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var gameOfLife = function(board) {
//   const result = [];
//   const dx = [1, 0, -1, 0, -1, -1, 1, 1];
//   const dy = [0, 1, 0, -1, 1, -1, -1, 1];
//   for (let i = 0; i < board.length; i++) {
//     const row = board[i];
//     const temp = [];
//     for (let j = 0; j < row.length; j++) {
//       const cell = row[j];
//       let round = 0;
//       for (let flag = 0; flag < 8; flag++) {
//         const newX = i + dx[flag];
//         const newY = j + dy[flag];
//         round += (board[newX] ? (board[newX][newY] || 0) : 0);
//       }
//       if (cell) {
//         if (round === 2 || round === 3) {
//           temp.push(1);
//         } else {
//           temp.push(0);
//         }
//       } else {
//         if (round === 3) {
//           temp.push(1);
//         } else {
//           temp.push(0);
//         }
//       }
//     }
//     result.push(temp);
//   }
//   result.forEach((row, i) => {
//     row.forEach((item, j) => {
//       board[i][j] = item;
//     })
//   })
// };

/**
 * 这个算法牛逼了
 *  只需要处理活细胞，活细胞会影响周围细胞，这样计算量少了很多
 *  1、便利表盘
 *  2、活细胞则周围所有细胞全都加10
 *  3、遍历完成后的表盘
 *  4、个位是细胞状态，十位是细胞周围情况
 * @param {*} board 
 */
var gameOfLife = function(board) {
  const dx = [1, 0, -1, 0, -1, -1, 1, 1];
  const dy = [0, 1, 0, -1, 1, -1, -1, 1];
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell % 10) {
        for (let k = 0; k < 8; k++) {
          const newX = i + dx[k];
          const newY = j + dy[k];
          if (board[newX] && board[newX][newY] !== undefined) {
            board[newX][newY] += 10;
          }
        }
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      let cell = row[j];
      const isAlive = cell % 10;
      cell = Math.floor(cell / 10);
      if (isAlive) {
        row[j] = (cell / 3 === 1 || cell / 2 === 1) ? 1: 0;
      } else {
        row[j] = cell / 3 === 1 ? 1: 0;
      }
    }
  }
}
// @lc code=end

gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);
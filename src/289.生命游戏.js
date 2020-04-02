/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const result = [];
  const dx = [1, 0, -1, 0, -1, -1, 1, 1];
  const dy = [0, 1, 0, -1, 1, -1, -1, 1];
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    const temp = [];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      let round = 0;
      for (let flag = 0; flag < 8; flag++) {
        const newX = i + dx[flag];
        const newY = j + dy[flag];
        round += (board[newX] ? (board[newX][newY] || 0) : 0);
      }
      if (cell) {
        if (round === 2 || round === 3) {
          temp.push(1);
        } else {
          temp.push(0);
        }
      } else {
        if (round === 3) {
          temp.push(1);
        } else {
          temp.push(0);
        }
      }
    }
    result.push(temp);
  }
  result.forEach((row, i) => {
    row.forEach((item, j) => {
      board[i][j] = item;
    })
  })
};
// @lc code=end


gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])
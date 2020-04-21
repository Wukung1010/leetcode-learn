/**
 * 广度搜索
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let result = 0;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const num = row[j];
      if (num === '1') {
        result += 1;
        const arr = [];
        arr.push([i, j]);
        row[j] = 0;
        while(arr.length > 0) {
          const offset = arr.pop();
          for (let k = 0; k < 4; k++) {
            const newX = dx[k] + offset[0];
            const newY = dy[k] + offset[1];
            if (newX >= 0 && newY >= 0 && newX < grid.length && newY < row.length && grid[newX][newY] === '1') {
              grid[newX][newY] = 0;
              arr.unshift([newX, newY]);
            }
          }
        }
        console.log(grid);
      }
    }
  }
  return result;
};
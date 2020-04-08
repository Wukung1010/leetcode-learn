/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  if (k === 0) {
      return 1;
  }
  const arr = [[0, 0]];
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const s = new Set();
  s.add('0,0');
  let result = 1;
  
  while(arr.length !== 0) {
      const point = arr.pop();
      for (let i = 0; i < 4; i++) {
          const newX = point[0] + dx[i];
          const newY = point[1] + dy[i];
          if (!s.has(`${newX},${newY}`) && newX >= 0 && newY >= 0 && newX < n && newY < m) {
              s.add(`${newX},${newY}`);
              if (sum(newX) + sum(newY) <= k) {
                  arr.unshift([newX, newY]);
                  result += 1;
              }
          }
      }
  }
  return result;
};

function sum(num) {
  let result = num % 10;
  num = Math.floor(num / 10);
  while(num > 0) {
      result += num % 10;
      num = Math.floor(num / 10);
  }
  return result;
}
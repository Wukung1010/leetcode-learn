var rotate = function(matrix) {
  const len = matrix.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
      for (let j = 0; j < len; j++) {
          let temp = matrix[i][j];
          matrix[i][j] = matrix[len - i - 1][j];
          matrix[len - i - 1][j] = temp;
      }
  }
  for (let i = 1; i < len; i++) {
      for (let j = 0; j < i; j++) {
          let temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
      }
  }
};
rotate([[1,2,3],[4,5,6],[7,8,9]]);
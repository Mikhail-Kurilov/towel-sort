
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (!matrix)
    return arr;
  if (matrix.length === 0) 
    return arr;
  let j = matrix.length;
  for (let i = 0; i < j; i++) {
    if (i % 2 !== 0) {
        matrix[i].reverse()
    }
    arr = arr.concat(matrix[i])   
  } 
  return arr;
}

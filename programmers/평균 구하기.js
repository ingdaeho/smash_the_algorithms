function solution(arr) {
  const reducer = (acc, cur) => acc + cur;
  return arr.reduce(reducer, 0) / arr.length;
}

// other answer

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

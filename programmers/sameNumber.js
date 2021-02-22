function solution(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// other answer
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

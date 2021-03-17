function solution(numbers) {
  let arr = [];
  let temp;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        temp = numbers[i] + numbers[j];
        arr.push(temp);
      }
    }
  }
  return Array.from(new Set(arr)).sort((a, b) => a - b);
}

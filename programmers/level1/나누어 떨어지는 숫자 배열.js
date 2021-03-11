function solution(arr, divisor) {
  const findDivisibleNum = arr.filter((num) => num % divisor === 0);
  return findDivisibleNum.length === 0
    ? [-1]
    : findDivisibleNum.sort((a, b) => a - b);
}

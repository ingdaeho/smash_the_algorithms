function solution(num) {
  const lastNums = num.slice(-4);
  return "*".repeat(num.length - 4) + lastNums;
}

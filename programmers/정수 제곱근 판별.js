function solution(n) {
  const sqrtNum = Math.sqrt(n);
  return sqrtNum % 1 === 0 ? (sqrtNum + 1) ** 2 : -1;
}

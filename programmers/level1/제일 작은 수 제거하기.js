function solution(arr) {
  if (arr.length === 1) return [-1];
  const min = Math.min.apply(null, arr); // 배열에서 제일 작은 수 찾는 방법
  return arr.filter((el) => el > min);
}

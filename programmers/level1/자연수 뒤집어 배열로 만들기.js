function solution(n) {
  return Array.from(n.toString())
    .map((el) => +el)
    .reverse();
}

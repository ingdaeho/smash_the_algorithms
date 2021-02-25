function solution(n) {
  let answer = 0;
  const strN = n.toString();
  for (let i = 0; i < strN.length; i++) {
    answer += +strN[i];
  }
  return answer;
}

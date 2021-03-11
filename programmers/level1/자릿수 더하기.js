function solution(n) {
  let answer = 0;
  const strN = n.toString();
  for (let i = 0; i < strN.length; i++) {
    answer += +strN[i];
  }
  return answer;
}

// reduce를 사용
function solutionWithReduce(n) {
  const toArr = n.toString().split("");
  return +toArr.reduce((acc, cur) => +acc + +cur);
}

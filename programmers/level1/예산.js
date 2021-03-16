function solution(d, budget) {
  const sorted = d.sort((a, b) => a - b);
  let acc = 0;
  let answer = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (acc + d[i] <= budget) {
      acc += d[i];
      answer++;
    }
  }
  return answer;
}

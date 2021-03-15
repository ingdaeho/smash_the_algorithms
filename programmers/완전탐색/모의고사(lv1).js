function solution(answers) {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answerA = 0,
    answerB = 0,
    answerC = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i % a.length]) {
      answerA++;
    }
    if (answers[i] === b[i % b.length]) {
      answerB++;
    }
    if (answers[i] === c[i % c.length]) {
      answerC++;
    }
  }
  let answer = [];
  const max = Math.max(answerA, answerB, answerC);
  if (max == answerA) answer.push(1);
  if (max == answerB) answer.push(2);
  if (max == answerC) answer.push(3);
  return answer;
}

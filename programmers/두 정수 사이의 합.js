function solution(a, b) {
  const arr = [];
  if (a < b) {
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr.reduce((acc, cur) => acc + cur);
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      arr.push(i);
    }
    return arr.reduce((acc, cur) => acc + cur);
  }
  if (a === b) {
    return a;
  }
}

// 리팩토링한 풀이

function solution(a, b) {
  let total = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    total += i;
  }
  return total;
}

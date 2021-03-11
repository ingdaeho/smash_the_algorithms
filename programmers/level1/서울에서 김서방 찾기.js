// findIndex
function solution(seoul) {
  const idxOfKim = seoul.findIndex((el) => el === "Kim");
  return `김서방은 ${idxOfKim}에 있다`;
}

// indexOf
function findKim(seoul) {
  const idx = seoul.indexOf("Kim");
  return `김서방은 ${idx}에 있다`;
}

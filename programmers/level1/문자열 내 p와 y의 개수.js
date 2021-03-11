function solution(s) {
  const findLetter = s
    .toLowerCase()
    .split("")
    .filter((el) => el.includes("p") || el.includes("y"));
  if (findLetter.length === 0) return true;
  if (findLetter.length % 2 === 0) {
    let temp = [];
    for (let i = 0; i < findLetter.length; i++) {
      if (findLetter[0] == findLetter[i]) {
        temp.push(findLetter[i]);
      }
    }
    if (temp.length === findLetter.length / 2) return true;
  }
  return false;
}

// 더 좋은 답
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

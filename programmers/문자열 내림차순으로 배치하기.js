//
function solution(s) {
  return s
    .split("")
    .map((el) => el.charCodeAt())
    .sort((a, b) => b - a)
    .map((el) => String.fromCharCode(el))
    .join("");
}

// sort 메서드는 알파벳도 자동으로 정렬시켜주는구나
function solution(s) {
  return s.split("").sort().reverse().join("");
}

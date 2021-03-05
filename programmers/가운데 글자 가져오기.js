function solution(s) {
  let middleIndex = Math.floor(s.length / 2);
  return s.length % 2 === 0
    ? s.charAt(middleIndex - 1) + s.charAt(middleIndex)
    : s.charAt(middleIndex);
}

// 굳이 charAt을 쓰지 않고 바로 인덱스로 가져오면 된다
function solution(s) {
  let middleIndex = Math.floor(s.length / 2);
  return s.length % 2 === 0
    ? s[middleIndex - 1] + s[middleIndex]
    : s[middleIndex];
}

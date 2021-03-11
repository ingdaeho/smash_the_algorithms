function solution(x) {
  const num = x
    .toString()
    .split("")
    .reduce((acc, cur) => +acc + +cur);
  if (x % num === 0) {
    return true;
  } else return false;
}

// 바로 boolean 값을 리턴시키는 방법
function solution(x) {
  return !(
    x %
    x
      .toString()
      .split("")
      .reduce((acc, cur) => +acc + +cur)
  );
}

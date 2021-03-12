function solution(x, n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  return arr;
}

// Array.from() 첫번째 인자로 유사 배열 객체(length 속성과 인덱싱된 요소를 가진 객체)를 받고, 두번째 인자로 mapFn(배열의 모든 요소에 대해 호출할 맵핑 함수)를 받을 수 있다.
function solution(x, n) {
  return Array.from({ length: n }, (_, idx) => (idx + 1) * x);
}

// 배열에 담고 reduce 시키는 방법
function solution(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
    if (n === 0) return 0;
  }
  return arr.reduce((arr, cur) => arr + cur);
}

// 조건에 맞는 i가 나올때마다 더해주는 방법
function solution(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      result += i;
    }
  }
  return result;
}

// 후자가 성능이 더 빠르다. 전자는 reduce를 한번 더 수행하기 때문에 성능이 더 느린거 같다.

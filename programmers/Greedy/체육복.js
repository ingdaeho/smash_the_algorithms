function solution(n, lost, reserve) {
  const arr = Array.from({ length: n }, (_, x) => (x = 1));
  const lostIdx = lost.map((el) => el - 1);
  const reserveIdx = reserve.map((el) => el - 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < lostIdx.length; j++) {
      if (i === lostIdx[j]) {
        arr[i]--;
      }
    }
    for (let j = 0; j < reserveIdx.length; j++) {
      if (i === reserveIdx[j]) {
        arr[i]++;
      }
    }
    if (arr[i] === 0 && arr[i - 1] === 2) {
      arr[i - 1] = 1;
      arr[i] = 1;
    } else if (arr[i] === 0 && arr[i + 1] === 2) {
      arr[i + 1] = 1;
      arr[i] = 1;
    }
  }
  return arr.filter((el) => el > 0).length;
}

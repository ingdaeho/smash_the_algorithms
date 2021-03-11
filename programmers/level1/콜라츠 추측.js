function solution(num) {
  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      if (num % 2 == 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
    } else return i; // 짝수, 홀수 if문을 돌다가 1이 되었을때, i의 값을 리턴
  }
  return -1;
}

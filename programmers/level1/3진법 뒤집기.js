function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

// Number.prototype.toString() 메서드에 radix(진수를 나타내는 기수의 값)을 매개변수로 주면 해당하는 진수로 바꿀 수 있다.
// 반대로 parseInt를 사용하면 특정 진수의 정수를 반환한다.

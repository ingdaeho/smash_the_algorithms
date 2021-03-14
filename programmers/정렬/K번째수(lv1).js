// 내가 푼 방식
function solution(arr, com) {
  const newArr = [];
  const a = com.map((el) => el[0]);
  const b = com.map((el) => el[1]);
  const c = com.map((el) => el[2]);
  for (let i = 0; i < com.length; i++) {
    const slicedArr = arr.slice(a[i] - 1, b[i]).sort((a, b) => a - b);
    newArr.push(slicedArr[c[i] - 1]);
  }
  return newArr;
}

// 비구조화할당, filter메서드를 사용한 방식
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      ) // sPosition과 ePosition, 두 숫자를 인덱스로 사용해서 배열에서 그 숫자 사이에 있는 것을 반환
      .sort((a, b) => a - b);
    return newArray[position - 1];
  });
}

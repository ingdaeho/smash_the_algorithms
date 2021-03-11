function solution(arr1, arr2) {
  return arr1.map((arr, idxX) =>
    arr.map((num, idxY) => num + arr2[idxX][idxY])
  );
}
// idxX는 둘러싸고 있는 큰 배열, idxY는 안에 있는 작은 배열의 index다

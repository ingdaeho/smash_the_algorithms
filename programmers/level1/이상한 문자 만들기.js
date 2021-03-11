function solution(s) {
  let newStr = "";
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newStr += j % 2 === 0 ? arr[i][j].toUpperCase() : arr[i][j].toLowerCase();
    }
    newStr += " ";
  }
  return newStr.slice(0, newStr.length - 1);
}

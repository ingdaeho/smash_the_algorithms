const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
  const newList = completion.reduce((all, c) => {
    all[c] = all[c] ? all[c] + 1 : 1;
    return all;
  }, {}); // 아래 참조
  return participant.find((el) => {
    // 참가자 배열을 find메서드로 순회
    if (newList[el]) {
      newList[el] -= 1; // 참가자 명단에 존재하는 이름이 완주자 명단에 존재하면 value를 1 감소
    } else {
      return true; // 참가자 배열에 있는데, 완주자 객체에 키 값이 없으면 완주를 못한 사람이므로 리턴
      // 키 값이 있더라도 value가 0이면 완주하지 못한 동명이인이므로 리턴
    }
  });
}

// 객체 내의 값 인스턴스 개수 세기
var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {}); // countedName is : { "Alice": 2, "Bob": 1, "Tiff": 1, "Bruce": 1 }

// allNames[name]은 배열안에 숫자를 반환, 배열 안에 존재하면 기본적으로 1을 할당시키고, 중복되면 1씩 더한 값을 리턴시킨다.
var Refactor = names.reduce((allNames, name) => {
  allNames[name] = allNames[name] ? allNames[name] + 1 : 1;
  return allNames;
});

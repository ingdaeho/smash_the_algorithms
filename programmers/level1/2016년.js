function solution(a, b) {
  const date = new Date(`2016/${a}/${b}`);
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return day[date.getDay()];
}

// getDay()는 요일을 0-6의 정수로 반환한다.

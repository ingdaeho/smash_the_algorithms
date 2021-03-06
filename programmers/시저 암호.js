function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    const check = s.charCodeAt(i);
    if (check == 32) {
      answer += " ";
    } else if (check >= 65 && check <= 90) {
      if (check + n > 90) {
        answer += String.fromCharCode(check + n - 26);
      } else {
        answer += String.fromCharCode(check + n);
      }
    } else if (check >= 97 && check <= 122) {
      if (check + n > 122) {
        answer += String.fromCharCode(check + n - 26);
      } else {
        answer += String.fromCharCode(check + n);
      }
    }
  }
  return answer;
}

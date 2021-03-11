function solution(s) {
  const strValidation = s.length === 4 || s.length === 6;
  if (strValidation) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

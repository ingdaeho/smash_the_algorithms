function solution(n) {
  let str = "";

  for (let i = 0; i <= n - 1; i++) {
    str += i % 2 === 0 ? "수" : "박";
  }
  return str;
}

// other answer
const waterMelon = (n) => {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};

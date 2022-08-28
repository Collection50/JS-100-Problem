// 문제48 : 대소문자 바꿔서 출력하기

// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

const convertCapital = function (string) {
  let result = '';

  for (const char of string) {
    if (/[a-z]/.test(char)) result += char.toUpperCase();
    else result += char.toLowerCase();
  }

  return result;
};

console.log(convertCapital('AAABBBcccddd'));

// 문제61 : 문자열 압축하기

// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

// 입력
// aaabbbbcdddd
// 출력
// a3b4c1d4

const compressString = (string) => {
  let charCount = 0;
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    charCount++;

    if (char !== string[i + 1]) {
      result += char + charCount;
      charCount = 0;
    }
  }

  return result;
};

console.log(compressString('aaabbbbcdddd'));

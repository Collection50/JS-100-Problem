// 문제20 : 몫과 나머지

// 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

const getModnValue = (num1, num2) => {
  console.log(num1 / num2, num1 % num2);
};

console.log(getModnValue(10, 2));

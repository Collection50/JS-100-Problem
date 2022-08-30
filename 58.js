// 문제58 : 콤마 찍기

// 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
// 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

// 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

// 예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.

const printComma = (num) => {
  const string = num.toString();
  let result = '';

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];

    if (i % 3 === 0 && i !== 0) {
      result += ',';
    }
  }

  return result.split('').reverse().join('');
};
console.log(printComma(123456789));

// solving
// 뒤에서 3자리씩 묶어 앞에 콤마를 추가해야 한다
// 하지만 3자리씩만 묶으면, 콤마로 시작하는 문자열이 생성될 가능성이 존재한다
// 따라서 이를 해결해보자

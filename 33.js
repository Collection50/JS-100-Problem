// 문제33 : 거꾸로 출력하기

// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

const printReverse = (stringArray) => stringArray.reverse().join(' ');

const string = prompt().split('');
console.log(printReverse(string));

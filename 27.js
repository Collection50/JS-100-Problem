// 문제27 : 객체 만들기

// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고,
// 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.

const studentInfo = prompt().split(' ');

const object = (infoArray) => {
  const [name, score] = infoArray;
  return new Map().set(name, +score);
};

console.log(object(studentInfo));

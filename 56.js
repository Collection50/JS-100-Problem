// 문제56 : 객체의 함수 응용

// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

const nationWidth = {
  Korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const getMinDiffNation = (nations) => {
  const values = Object.values(nations);
  const KOREA_WIDTH = nations.Korea;
  const NATION = 0;

  let minDiff = Infinity;

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value === KOREA_WIDTH) continue;

    const diff = Math.abs(value - KOREA_WIDTH);
    minDiff = minDiff > diff ? diff : minDiff;
  }

  const [result] = Object.entries(nations).filter(([nation, width]) => {
    if (Math.abs(width - KOREA_WIDTH) === minDiff) {
      return nation;
    }
  });

  console.log(result[NATION], minDiff);
};

console.log(getMinDiffNation(nationWidth));

// solving
// 1. 한국과 면적 차이의 절대값이 가장 작은 나라를 찾아야 함
// 2. 그러려면 모든 나라의 면적과 한국의 면적을 비교하여야 하고
// 3. 그 작은 면적을 토대로 그 나라의 이름을 함께 반환하여야 한다

// 면적 차가 가장 적은 나라 기억, 가장 작은 면적 차 기억

// 1. 가장 적은 차 구하기
// 2. entries 구한후 filter로 돌려
// 3. 차가 최소값이랑 같은 것이 true
// 4. return

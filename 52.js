// 문제52 : quick sort

// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const left = [];
  const right = [];
  const pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];

    if (pivot >= value) {
      left.push(value);
    } else {
      right.push(value);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = prompt('배열을 입력하세요')
  .split(' ')
  .map((n) => parseInt(n, 10));

console.log(quickSort(array));

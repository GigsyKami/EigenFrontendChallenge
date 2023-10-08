const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const reversedMatrix = matrix.map((m) => {
  return m.slice().reverse();
});

let firstDiagonal = 0;
let secondDiagonal = 0;
let result = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const arr = matrix[i][j];
    const arrReversed = reversedMatrix[i][j];

    firstDiagonal = i == j ? firstDiagonal + arr : firstDiagonal;
    secondDiagonal = i == j ? secondDiagonal + arrReversed : secondDiagonal;
  }
}

result = firstDiagonal - secondDiagonal;

console.log({
  firstDiagonal: firstDiagonal,
  secondDiagonal: secondDiagonal,
  result: result,
});

/*
Problem: https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

Solution analysis: 
1. The matrix is always a 6x6 2D array, and given the pattern of an hour glass, there are always 16 hour glasses in the given matrix

2. To solve matrix problems, we'll have pinpoint the location of each position using a double for loop (one for row and one for column)

*/

const hourGlassSum = (arr) => {
  let maxSum = -Infinity;
  // Loop through row
  for (let i = 0; i <= 3; i++) {
    // Loop through column
    for (let j = 0; j <= 3; j++) {
      /**
       * According to the pattern:
       * a b c
       *   d
       * e f g
       *
       * we'll have these positions:
       * - a : arr[i][j]
       * - b : arr[i][j+1]
       * - c : arr[i][j+2]
       * - d : arr[i+1][j+1]
       * - e : arr[i+2][j]
       * - f : arr[i+2][j+1]
       * - g : arr[i+2][j+2]
       *
       * We'll loop through the 2D array to calculate each sum and then compare to the maxSum.
       *  */
      let a = arr[i][j];
      let b = arr[i][j + 1];
      let c = arr[i][j + 2];
      let d = arr[i + 1][j + 1];
      let e = arr[i + 2][j];
      let f = arr[i + 2][j + 1];
      let g = arr[i + 2][j + 2];
      let sum = a + b + c + d + e + f + g;
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

const testArray = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const maxHourglassSum = hourGlassSum(testArray);

console.log("Maximum Hourglass Sum:", maxHourglassSum);

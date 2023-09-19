/*
Problem: https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=true

Solution analysis:

1. Given the index i of value A in an array (arr.length = n), when we stepped d steps backward
==> the index of A would be i - d, if d > i => the index would become negative which is invalid

2. To handle the negative index, we need to wrap the array by adding n (array length)

3. But if i > d, which means the index is positive and then we add n to (i-d), the index would be larger than the array length itself.

4. In order to handle that, we have to use modular expression or have a conditional if.

(i-d+n) % n 
==> This will handle the case i-d+n > n 

*/

const leftRotationArr = (arr, d) => {
  let leftRotatedArr = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let newIndex = (i - d + n) % n;
    leftRotatedArr[newIndex] = arr[i];
  }

  return leftRotatedArr;
};

const rightRotationArr = (arr, d) => {
  let rightRotatedArr = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let newIndex = (i + d) % n;
    rightRotatedArr[newIndex] = arr[i];
  }
  return rightRotatedArr;
};

const arr = [1, 2, 3, 4, 5];

console.log(leftRotationArr(arr, 19));
// console.log(rightRotationArr(arr, 4));

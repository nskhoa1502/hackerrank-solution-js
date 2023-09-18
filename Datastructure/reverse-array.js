/*
Function Description

Complete the function reverseArray in the editor below.

reverseArray has the following parameter(s):

int A[n]: the array to reverse
Returns

int[n]: the reversed array


Solution: Use a for loop to loop the array backward and push each element into an empty array
*/

const reverseArr = (arr) => {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
};

const a = [1, 2, 3, 4];
const b = [2, 5, 6, 7, 8, 9, 10];

console.log(reverseArr(a));
console.log(reverseArr(b));

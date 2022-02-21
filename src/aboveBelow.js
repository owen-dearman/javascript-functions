"use strict";

/*
A function that takes a specific number and returns the count of numbers in an array above and below that number

Parameters:
-  NUM-ARRAY (arrray of integers)
-  SPECIFIC-NUMBER (integer)
Returns:
-  COUNT-BELOW (integer)
-  COUNT-ABOVE (integer)
-  MEAN (integer)
=========================================

set COUNT-BELOW to 0
set COUNT-ABOVE to 0
set NUMBER-SUM to 0

for NUM in array NUM-ARRAY do
    if NUM is greater than SPECIFIC-NUMBER then
        increment COUNT-ABOVE by 1
    else if NUM is smaller than SPECIFIC-NUMBER then
        increment COUNT-BELOW by 1
    end if
    incremement NUMBER-SUM by NUM
endfor

set MEAN to NUMBER-SUM divided by length of NUM-ARRAY
return COUNT-BELOW, COUNT-ABOVE and MEAN

============================================

aboveBelow([1,2,3],2) // => 1, 1, 2
aboveBelow ([30, 43, 78, 99, 103, 2, 50], 51) // => 4, 3, 57.86

*/

/**
 * Returns count of numbers above and below specific number and mean
 * @param {array} numArr - array of numbers
 * @param {number} specNum - specific number
 * @returns {string} evaluation of function
 */

function aboveBelow(numArr, specNum) {
  let countBelow = 0;
  let countAbove = 0;
  let numSum = 0;
  for (let num of numArr) {
    if (num > specNum) {
      countAbove++;
    } else if (num < specNum) {
      countBelow++;
    }
    numSum += num;
  }
  let mean = numSum / numArr.length;
  return `Numbers above ${specNum}: ${countAbove}, Numbers below ${specNum}: ${countBelow}, Mean of array: ${mean.toFixed(
    2
  )}`;
}

console.log("[1,2,3],2 // => 1,1,2   ", aboveBelow([1, 2, 3], 2));
console.log(
  "[30, 43, 78, 99, 103, 2, 50], 51 // => 3, 4, 57.86   ",
  aboveBelow([30, 43, 78, 99, 103, 2, 50], 51)
);
console.log(
  "[39.73, 226, 2.697, 4324, 72.9, 104], 1026 // => 1, 5, 794.93   ",
  aboveBelow([39.73, 226, 2.697, 4324, 72.9, 104], 1026)
);
console.log(
  "[0, -3, -5, -7], 0 // => 0,3, -3.5   ",
  aboveBelow([0, -3, -5, -7], 0)
);

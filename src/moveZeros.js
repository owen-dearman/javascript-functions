"use strict";
/* write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements

Parameters:
- MIXED_ARRAY (array of elements)
Returns:
 - SORTED_ARRAY (array of elements)
 
========================================

set ZERO_STORE to a blank array
set SORTED_ARRAY to a blank array
for each ELEMENT in MIXED_ARRAY do
	if ELEMENT === 0 then
		add ELEMENT to ZERO_STORE
	else
		add ELEMENT to SORTED_ARRAY
	endif
concatenate ZERO_STORE on to the end of SORTED_ARRAY
return SORTED_ARRRAY

=====================================================
moveZeros([false, 1, 0, 1, 2, 0, "abc"])  // => [false, 1, 1, 2, "abc", 0, 0];
moveZeros([1,2,0,3,4,0,0,5]) // => [1,2,3,4,5,0,0,0]

*/

/**
 * Shifts zeros to the end of the array
 * @param {array} arr - array of elements
 * @returns {array} sorted array
 */

function moveZeros(arr) {
  let zeroStore = [];
  let sortedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroStore.push(arr[i]);
    } else {
      sortedArray.push(arr[i]);
    }
  }
  sortedArray = sortedArray.concat(zeroStore);
  return sortedArray;
}

console.log(
  "[false,1,0,1,2,0,'abc'] // => ",
  moveZeros([false, 1, 0, 1, 2, 0, "abc"])
);
console.log("[1,2,0,3,4,0,0,5] // => ", moveZeros([1, 2, 0, 3, 4, 0, 0, 5]));
console.log(
  "[1, 'my cat had 0 carrots for tea', 2] // => [] ",
  moveZeros([1, "my cat had 0 carrots for tea", 2])
);

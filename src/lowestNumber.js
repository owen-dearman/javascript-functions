"use strict";
/*
Find lowest number
- stack of 20 cards with a number on one side
- find the smallest number but can only turn over one side at a time
- use a sticky pad to store the lowest number so far

Parameters:
1. CARD_NUMBERS (array of integers)
Returns:
1. SMALLEST_NUMBER (integer)

set SMALLEST_SO_FAR to 0
for all CARD in CARD_NUMBERS do
	if  CARD < SMALLEST_SO_FAR then
		SMALLEST_SO_FAR = CARD
	endif
endfor
set SMALLEST_NUMBER to SMALLEST_SO_FAR
return SMALLEST_NUMBER

lowestNumber([1,2,3,4]) // => 1
lowestNumber([10,9,8,7]) // => 7
lowestNumber([4,67,32,1,789]) // => 1
*/

/**
 * Returns smallest number from array
 * @param {array} cardNumbers - array of numbers
 * @returns {number} lowest number
 */

function lowestNumber(cardNumbers) {
  let minSoFar = cardNumbers[0];
  for (let card of cardNumbers) {
    if (card < minSoFar) {
      minSoFar = card;
    }
  }
  return minSoFar;
}

console.log("[1,2,3,4] // => 1  ", lowestNumber([1, 2, 3, 4]));
console.log("[10,9,8,7] // => 7  ", lowestNumber([10, 9, 8, 7]));
console.log("[4,67,32,1, 789] // => 1  ", lowestNumber([4, 67, 32, 1, 789]));

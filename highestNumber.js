"use strict"
/*
Find highest number
- stack of 20 cards with a number on one side
- find the largest number but can only turn over one side at a time
- use a sticky pad to store the highest number so far
- announce the highest number at the end

Parameters:
1. CARD_NUMBERS (array of integers)
Returns:
1. MAX_NUMBER (integer)

set MAX_SO_FAR to 0
for CARD in CARD_NUMBERS do
	if CARD > MAX_SO_FAR then
		set MAX_SO_FAR to CARD
	endif
endfor
set MAX_NUMBER to MAX_SO_FAR
return MAX_NUMBER


highestNumber([1,2,3,4]) // => 4
highestNumber([50, 49, 48, 47]) // => 50
highestNumber([34, 980, 65, 1, 876, 979]) // => 980

*/

/**
 * Returns highest number from array of integers
 * @param {array} cardNumbers - array of integers
 * @returns {number} highest number
 */

function highestNumber (cardNumbers){
    let maxSoFar = cardNumbers[0];
    for (let card of cardNumbers){
        if (card > maxSoFar){
            maxSoFar = card;
        }
    }
    return maxSoFar
}

console.log("[1,2,3,4] // =>  4  ", highestNumber([1,2,3,4]))
console.log("[50,49,48,47] // =>  50  ", highestNumber([50]))
console.log("[34, 980, 65, 1, 876, 979] // =>  980  ", highestNumber([34, 980, 65, 1, 876, 979]))
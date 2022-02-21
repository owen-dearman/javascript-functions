"use strict";

/*
Parameters:
1. CARD_NUMBERS (array of integers)
Returns:
2. LARGEST_ODD_NUMBER (integer)
3. LARGEST_EVEN_NUMBER (integer)

set ODD_MAX_SO_FAR to "n/a"
set EVEN_MAX_SO_FAR to 0

for CARD in CARD-NUMBERS do
    if CARD is odd then
        if ODD_MAX_SO_FAR equals "n/a" then
            set ODD_MAX_SO_FAR to CARD
        else if CARD > ODD_MAX_SO_FAR then
            set ODD_MAX_SO_FAR to CARD
        endif
    else
        if EVEN_MAX_SO_FAR equals "n/a" then
            set EVEN_MAX_SO_FAR to CARD
        else if CARD > EVEN_MAX_SO_FAR then
            set EVEN_MAX_SO_FAR to CARD
        endif
    endif
endfor

return ODD_MAX_SO_FAR and EVEN_MAX_SO_FAR

largestOddEven([1,2,3,4,5,6,7]) // => 7, 6
largestOddEven([45, 66, 23, 77, 4]) // => 77, 66
largestOddEven ([-5, -45- 15- -1]) // => -1, n/a
largestOddEven([222]) // => n/a, 222

*/

/**
 * Returns largest even and odd numbers from array of integers
 * @param {array} cardNumbers - array of integers
 * @returns {string} largest odd and even numbers
 */

function largestOddEven(cardNumbers) {
  let oddMaxSoFar = "n/a";
  let evenMaxSoFar = "n/a";
  for (let card of cardNumbers) {
    if (card % 2 !== 0) {
      if (oddMaxSoFar === "n/a") {
        oddMaxSoFar = card;
      } else if (card > oddMaxSoFar) {
        oddMaxSoFar = card;
      }
    } else {
      if (evenMaxSoFar === "n/a") {
        evenMaxSoFar = card;
      } else if (card > evenMaxSoFar) {
        evenMaxSoFar = card;
      }
    }
  }
  return `Largest Odd: ${oddMaxSoFar}, Largest Even: ${evenMaxSoFar}`;
}

console.log(
  "[1,2,3,4,5,6,7] // => 7,6   ",
  largestOddEven([1, 2, 3, 4, 5, 6, 7])
);
console.log(
  "[45, 66, 23, 77, 4]  // => 77,66   ",
  largestOddEven([45, 66, 23, 77, 4])
);
console.log(
  "[-5, -45, -15, -1] // => -1, n/a ",
  largestOddEven([-5, -45, -15, -1])
);
console.log("[222]  // => n/a, 222  ", largestOddEven([222]));

/*
take a string of some text and return the number of vowels in it

Parameters:
1. STRING_OF_LETTERS (string)
Returns:
2. VOWEL_COUNT (integer)

====================================

set VOWEL_COUNT to 0
set VOWEL_DICTIONARY to an array of the 5 vowels of English.
set STRING_LOWERCASE to STRING_OF_LETTERS in lower case

for each LETTER of STRING_LOWERCASE do
	if LETTER === a value in VOWEL_DICTIONARY then
		VOWEL_COUNT + 1
	endif
endfor
return VOWEL_COUNT

====================================

"rhythm" // => 0
"aired" // => 3
"why" // => 0
"fluorescent" // => 4
"hippopotomus" // => 5

*/

/**
 * Count of vowels
 * @param {string} str 
 * @returns {number}
 */

function getCount(str) {
    let vowelsCount = 0;
    str = str.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    for(i=0; i<=str.length; i++){
        if (vowels.includes(str[i])){
            vowelsCount++;
        }
    }
    return vowelsCount;
}

console.log("'rhythm' // => 0 ", getCount("rhythm"))
console.log("'aired' // => 3 ", getCount("aired"))
console.log("'why' // => 0  ", getCount("why"))
console.log("'fluorescent' // => 4 ", getCount("fluorescent"))
console.log("'hippopotomus' // => 5 ", getCount("hippopotomus"))
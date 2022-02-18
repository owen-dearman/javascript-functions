/* When given an input of a text string, remove the vowels from it and return the string 
Capital letters, punctuation marks and the like should be left as it

Parameters:
- STRING (string)
Returns:
- STRING_NO_VOWELS (string)

=============================================================

set VOWEL_DICTIONARY to an array containing 10 values: the 6 lowercase vowels and 6 uppercase vowels
set END_OF_STRING to length of STRING - 1
set ARRAY_NO_VOWELS to an empty array

for each ELEMENT of STRING from index 0 to END_OF_STRING do
	if ELEMENT is not in VOWEL_DICTIONARY then
		add ELEMENT to the end of ARRAY_NO_VOWELS
	endif
endfor
set STRING_NO_VOWELS to a string of ARRAY_NO_VOWELS with no separator between values

==============================================================

disemvowel("bananas") // => "bnns"
disemvowel("hello, my name is Owen") // => "hll, my nm s wn"
disemvowel("") // => ""

*/

/**
 * Removes vowels from a string
 * @param {string} str - the original text
 * @returns {string} the disemvowelled string
 */

function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let newComment = [];
      for(i=0; i<=str.length; i++){
          if(vowels.includes(str[i]) === false){
            newComment.push(str[i]);
          }
      }
    let answer = newComment.join("");
    return answer;
}

console.log("disemvowel('bananas') // => 'bnns' // => ", disemvowel("bananas"))
console.log("disemvowel('hello, my name is Owen') // => 'hll, my nm s wn' // => ", disemvowel("hello, my name is Owen"))
console.log("disemvowel('') // => '' // => ", disemvowel(""))

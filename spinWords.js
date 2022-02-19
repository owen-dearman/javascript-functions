/* 
Write a function that takes in a string of one or more words and returns the same string, but will all five or more letter words
reversed. Strings passed in will consist of only letters and spaces.

Parameters: 
1. INPUT_WORDS (string)
Returns:
1. WORD_SPIN (string)

set ARRAY_OF_WORDS to an array of INPUT_WORDS, split at spaces
set UPDATED_ARRAY to a blank array
for WORD in ARRAY_OF_WORDS do
	if length of WORD >= 5 then
		set REVERSED_WORD to wordReverser(WORD)
		add REVERSED_WORD to the end  of UPDATED_ARRAY
	else
		add WORD to the end of UPDATED_ARRAY
	endif
endfor
set WORD_SPIN to a string of UPDATED_ARRAY with spaces separating elements
return WORD_SPIN

wordReverser(WORD)
set REVERSE_WORD_ARRAY to an array of WORD split every letter
reverse the elements in REVERSE_WORD_ARRAY
set WORD_REVERSED to a string of REVERSE_WORD_ARRAY 
return WORD_REVERSED

spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
spinWords("This is a test") => "This is a test"
spinWords("This is another test") => "This is rehtona test"
spinWords ("Hello young children of code") => "olleH gnuoy nerdlihc of code" 
spinWords("good gninrom") => "good morning"
spinWords("I like the film") => "I like the film"

*/

/**
 * Reverses letters in a word
 * @param {string} word - original word
 * @returns {string} word reversed
 */

function reverser(word){
    let reverseWordArray = word.split("");
    reverseWordArray.reverse();
    return reverseWordArray.join("")
}

/**
 * Reverses a string input
 * @param {string} string 
 * @returns {string} reversed string
 */

function spinWords(string){
    let arrayWords = string.split(" ");
    let updatedArray = [];
    for (let word of arrayWords){
        if (word.length >= 5){
            let reverseWord = reverser(word);
            updatedArray.push(reverseWord); 
        }else{
            updatedArray.push(word);
        }
    }
    return updatedArray.join(" ") 
}

console.log("'hey fellow warriors' // => 'hey wollef sroirraw'   ", spinWords("hey fellow warriors"))
console.log("'this is a test' // => 'this is a test'   ", spinWords("this is a test"))
console.log("'This is another test' // => 'This is rehtona test'   ", spinWords("This is another test"))
console.log("'Hello young children of code' // => 'olleH gnuoy nerdlihc of code'   ", spinWords("Hello young children of code"))
console.log("'good gninrom' // => 'good morning'   ", spinWords("good gninrom"))
console.log("'I like the Film' // => 'I like the Film'   ", spinWords("I like the Film"))
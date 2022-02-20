"use strict"

/* Scrabble Score Generator

Parameters:
- WORD (string)
Returns
-  EVALUATION (string)
===========================================

set ALPHABET to an array containing the letters "a" to "z" in order with "_" at index 0
set ALPHABET-SCORES to an array containing the scrabble scores of the letters of the alphabet in order from blank to "a" to "z"
set SCORES-ARRAY to an empty array
set TOTAL-SCORE to 0
set WORD-LC to WORD in lower case

for LETTER of the array WORD-LC do
   set SEARCH-INDEX to the index of LETTER in ALPHABET
   set LETTER-SCORE to the number in ALPHABET-SCORES at index SEARCH-INDEX
   increment TOTAL-SCORE by LETTER-SCORE
   add LETTER-SCORE to the end of SCORES-ARRAY
endfor

return a string evaluating WORD, SCORES-ARRAY and TOTAL-SCORE

=============================================

*/

/**
 * Returns the Scrabble score of a word
 * @param {string} word
 * @returns {string} evaluation containing score of the word
 */

function scrabbleScores(word){
    const alphabet = ["_", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const alphabetScores = [0,1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];
    let scoresArray = [];
    let totalScore = 0;
    let wordLC = word.toLowerCase();
    for (let letter of wordLC){
        let searchIndex = alphabet.indexOf(letter);
        let letterScore = alphabetScores[searchIndex];
        totalScore += letterScore;
        scoresArray.push(letterScore);
    }
    return `${word}: [${scoresArray}] has the Scrabble score: ${totalScore}`
}

console.log(scrabbleScores("Owen"))
console.log(scrabbleScores("quaint"))
console.log(scrabbleScores("Christine"))
console.log(scrabbleScores("fluorescent"))
console.log(scrabbleScores("zebra"))
console.log(scrabbleScores("polygon"))
console.log(scrabbleScores("pic_ic"))
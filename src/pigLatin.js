/* 
Pig Latin - 
Move the first letter of each word to the end of it, and then 
"ay" to the end of the word. Leave punctuation marks untouched.


Parameters:
1. ENGLISH_WORDS (string)
Returns:
1. PIG_LATIN_WORDS (string)

============================================================

set WORD_ARRAY to array of ENGLISH_WORDS split on spaces
for all WORD in WORD_ARRAY do
	if WORD contains only letters
		move WORD[0] to end of WORD
		add "ay" to end of WORD
	else
		leave WORD as it is
endfor
set PIG_LATIN_WORDS to a string of WORD_ARRAY with spaces between each element
return PIG_LATIN_WORDS

================================================================

pigIt("Pig Latin is cool") => "igPay atinLay siay oolcay"
pigIt("Hello world!") => "elloHay orldway!"

*/

/**
 * Translates into Pig Latin using traditional for...of loop
 * @param {string} string - English text
 * @returns {string} PigLatin translation
 */

function pigIt(string) {
  let pigLatinArray = [];
  let wordArray = string.split(" ");
  for (let word of wordArray) {
    if (/[a-zA-z]/.test(word)) {
      let individualWord = word.split("");
      let firstLetter = individualWord.splice(0, 1);
      individualWord.push(firstLetter.toString(), "a", "y");
      let pigWord = individualWord.join("");
      pigLatinArray.push(pigWord);
    } else {
      pigLatinArray.push(word);
    }
  }
  return pigLatinArray.join(" ");
}

console.log("for...of loop");
console.log(
  "'Pig Latin is cool' // => 'igPay atinLay siay oolcay' ",
  pigIt("Pig Latin is cool")
);
console.log("'hello' // => 'ellohay' ", pigIt("hello"));

/**
 * Translates a word into Pig Latin
 * @param {string} word - the word to translate
 * @returns {string} the Pig Latin word
 */

function pigTranslate(word) {
  let individualWord = word.split("");
  let firstLetter = individualWord.splice(0, 1);
  individualWord.push(firstLetter.toString(), "a", "y");
  let pigWord = individualWord.join("");
  return pigWord;
}

/**
 * Translates a phrase into Pig Latin
 * @param {string} string - English phrase
 * @returns {string} Pig Latin translation
 */

function pigIt2(englishString) {
  let englishArray = englishString.split(" ");
  let pigLatinArray = englishArray.map(pigTranslate);
  let pigLatinString = pigLatinArray.join(" ");
  return pigLatinString;
}

console.log(".map");
console.log(
  "'Pig Latin is cool' // => 'igPay atinLay siay oolcay' ",
  pigIt2("Pig Latin is cool")
);
console.log("'hello' // => 'ellohay' ", pigIt2("hello"));

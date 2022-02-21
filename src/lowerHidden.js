"use strict";
/* A word written in lower case is hidden among a sequence of letters in upper case
eg. BAFRJcUFDaYUtSSA => "cat"
print the hidden word

Parameters:
1. CODED_STRING (string of letters)
Returns:
1. HIDDEN_WORD (string)

set HIDDEN_WORD to an empty array

for each LETTER in CODED_STRING do
	if LETTER is lowercase then
		add LETTER to the end of HIDDEN_WORD
	else	
		ignore it
	endif
endfor
return HIDDEN_WORD as a string

lowerHidden("AbCDEFGHiLKMNopQRsTUVWXyZ") // => "biopsy"
lowerHidden("GDsEwFRGeTTHTYeKFt") // => "sweet"
lowerHidden("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") // => "embezzlement"
lowerHidden2("FDWQSFGoBDSZAwBNeNGDXXCn") // => "owen"

*/
/**
 *Returns hidden word in capital letters
 * @param {string} string - coded text
 * @returns {string} hidden word
 */
function lowerHidden(string) {
  let lowerCaseWord = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] > "Z") {
      lowerCaseWord.push(string[i]);
    }
  }
  let lowerWord = lowerCaseWord.join("");
  return lowerWord;
}

console.log(
  "lowerHidden 1 'AbCDEFGHiLKMNopQRsTUVWXyZ' // => 'biopsy'  ",
  lowerHidden("AbCDEFGHiLKMNopQRsTUVWXyZ")
);
console.log(
  "lowerHidden 1 'GDsEwFRGeTTHTYeKFt' // => 'sweet'   ",
  lowerHidden("GDsEwFRGeTTHTYeKFt")
);
console.log(
  "lowerHidden 1 'YFemHUFBbezFBYzFBYLleGBYEFGBMENTment' // => 'embezzlement'  ",
  lowerHidden("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")
);
console.log(
  "lowerHidden 1 'FDWQSFGoBDSZAwBNeNGDXXCn' // => owen   ",
  lowerHidden("FDWQSFGoBDSZAwBNeNGDXXCn")
);

/**
 *Returns hidden word in capital letters
 * @param {string} string - coded text
 * @returns {string} hidden word
 */
function lowerHidden2(string) {
  const key = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let answerArray = [];
  for (let i = 0; i < string.length; i++) {
    if (key.includes(string[i]) === true) {
      answerArray.push(string[i]);
    }
  }
  let answer = answerArray.join("");
  return answer;
}

console.log(
  "lowerHidden 2 'AbCDEFGHiLKMNopQRsTUVWXyZ' // => 'biopsy'  ",
  lowerHidden2("AbCDEFGHiLKMNopQRsTUVWXyZ")
);
console.log(
  "lowerHidden 2 'GDsEwFRGeTTHTYeKFt' // => 'sweet'   ",
  lowerHidden2("GDsEwFRGeTTHTYeKFt")
);
console.log(
  "lowerHidden 2 'YFemHUFBbezFBYzFBYLleGBYEFGBMENTment' // => 'embezzlement'  ",
  lowerHidden2("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")
);
console.log(
  "lowerHidden 2 'FDWQSFGoBDSZAwBNeNGDXXCn' // => owen   ",
  lowerHidden2("FDWQSFGoBDSZAwBNeNGDXXCn")
);

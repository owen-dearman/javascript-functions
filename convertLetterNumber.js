/*
/* when a text string is input, return a code where a=1, b=2 etc.
if there's a character that isn't a letter, exclude it.

Parameters:
- TEXT (string)
Returns:
- NUMBER-CODE-STRING (string)

==============================================
set ALPHABET to an array containing the letters "a" to "z" in lowercase, in order.
set LC-TEXT to TEXT in lowercase
set NUMBER-CODE to an empty array

for each LETTER in the string LC-TEXT do
    if LETTER is a letter of the alphabet then
        set NUMBER to the index of LETTER in ALPHABET + 1
        add NUMBER to the end of NUMBER-CODE
    else if LETTER is a space then
        add an underscore to the end of NUMBER-CODE
    endif
endfor

set NUMBER-CODE-STRING to a string of NUMBER-C0DE with elements separated by an underscore
return NUMBER-CODE-STRING

convertLetterNumber("hello") => "8 5 12 12 15"
convertLetterNumber(".763ABC/") => "1 2 3"

*/

/**
 * Converts a string to a code where a letter corresponds to it's alphabet position
 * @param {string} text - string to convert
 * @returns {string} code
 */

function alphabetPosition(text) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let code = [];
    text = text.toLowerCase();
    for (let letter of text){
        if ((/[a-zA-Z]/).test(letter) === true){
            let number = alphabet.indexOf(letter);
            code.push(number+1);
        } else if (letter === " "){
            code.push("_")
        }
    }
    let answer = code.join("_");
    return answer;
  }

console.log("'hello' // => 8_5_12_12_15   ", alphabetPosition("hello"))
console.log("'.123AbC' // => 1_2_3   ", alphabetPosition(".123AbC"))
console.log("'my name is Owen' // => 13_25___14_1_13_5___9_19___15_23_5_14  ", alphabetPosition("my name is Owen"))
console.log("'wEnNeRs98' // => 25_5_14_14_5_18_19   ", alphabetPosition("wEnNeRs98"))

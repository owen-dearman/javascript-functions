/*
Take a string and return it in camel case starting with a #. If it's greater than 140 characters return false.

Parameters:
1. TEXT (string)
Returns:
1. HASHTAGE_MESSAGE (string)

for LETTER in TEXT do
	if LETTER before current LETTER is a space then
		remove the space
		make LETTER a capital letter
	endif
endfor

set HASHTAG_MESSAGE to TEXT with "#" at the beginning

if HASHTAG_MESSAGE is longer than 140 characters then
	return false
endif
return HASHTAG_MESSAGE

hashtagMessage("we like cats") // => #WeLikeCats
hashtagMessage("what even is camel case") // => #WhatEvenIsCamelCase
hashtagMessage("wUWnYGVQnbZrtUKclvvj LskvAHUvwKjnkHKuJhgHdzNReKjDxiyhRFcjUnkMRFvGkjWQDHYjPuKoZLJDcgEwfeHmSrHImqbCUfevDdW cDfNneGRAifEFbitJsKqbxMMfcvIAkTOemakNEuC") // => false
hashtagMessage("") // => #

*/

/**
 * Returns a string in a camel case hashtag
 * @param {string} str - original text
 * @returns {string} camel case hashtag message
 */

function generateHashtag(str){
    if (/[a-zA-z]/.test(str) === false){
        return false
    }
    let newArray =[];
    let stringArray = str.split("");
    stringArray[0] = stringArray[0].toUpperCase()
    for (i=0; i<stringArray.length; i++){
        if (stringArray[i] !== " "){
            newArray.push(stringArray[i])
        } else if (stringArray[i] === " "){
            stringArray[i+1] = stringArray[i+1].toUpperCase()
        }
    }
    let hashtagMessage =  `#${newArray.join("")}`
    return hashtagMessage.length > 140 ? false : hashtagMessage
}

console.log("'we like cats' // => #WeLikeCats   ", generateHashtag("we like cats"))
console.log("'what even is camel case' // =>  #WhatevenIsCamelCase  ", generateHashtag("what even is camel case"))
console.log("'wUWnYGVQnbZrtUKclvvj LskvAHUvwKjnkHKuJhgHdzNReKjDxiyhRFcjUnkMRFvGkjWQDHYjPuKoZLJDcgEwfeHmSrHImqbCUfevDdW cDfNneGRAifEFbitJsKqbxMMfcvIAkTOemakNEuC' // =>  false  ", generateHashtag("wUWnYGVQnbZrtUKclvvj LskvAHUvwKjnkHKuJhgHdzNReKjDxiyhRFcjUnkMRFvGkjWQDHYjPuKoZLJDcgEwfeHmSrHImqbCUfevDdW cDfNneGRAifEFbitJsKqbxMMfcvIAkTOemakNEuC"))
console.log("'' // =>  false  ", generateHashtag(""))

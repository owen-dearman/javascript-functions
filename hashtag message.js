/* start with a hashtag. Camel case. No spaces
final result longer than 140 characters, return false
if input in empty return false.
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

let answer = generateHashtag(" ")
console.log(answer)


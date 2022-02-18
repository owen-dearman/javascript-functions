/* 
Write a function that takes in a string of one or more words
and returns the same string, but will all five or more letter words
reversed. Strings passed in will consist of only letters and spaces

spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
spinWords("This is a test") => "This is a test"
spinWords("This is another test") => "This is rehtona test"
*/

function reverser(word){
    let reverseWordArray = word.split("");
    reverseWordArray.reverse();
    return reverseWordArray.join("")
}

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

let answer = spinWords("Owen is a bloody brilliant individual")
console.log(answer)
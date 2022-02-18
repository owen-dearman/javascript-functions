/* Pig Latin - 
Move the first letter of each word to the end of it, and then 
"ay" to the end of the word. Leave punctuation marks untouched.
*/


function pigIt(string){
    let pigLatinArray = [];
    let wordArray = string.split(" ");
    for (let word of wordArray){
        if ((/[a-zA-z]/).test(word)){
            let individualWord = word.split("");
            let firstLetter = individualWord.splice(0,1);
            individualWord.push( firstLetter.toString(), "a", "y")
            let pigWord = individualWord.join("")
            pigLatinArray.push(pigWord)
        }else{
            pigLatinArray.push(word)
        }
    }
    return pigLatinArray.join(" ")
}

let answer = pigIt("Greetings miss Becca .")
console.log(answer)

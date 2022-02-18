/* A word written in lower case is hidden among a sequence of letters in upper case
eg. BAFRJcUFDaYUtSSA => "cat"
print the hidden word
*/


function lowerHidden(string){
    let lowerCaseWord = [];
    for (i=0; i<string.length; i++){
        if (string[i] > "Z") {
            lowerCaseWord.push(string[i]);
        }
    }
    let lowerWord = lowerCaseWord.join("");
    console.log(lowerWord);
}

lowerHidden("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment");

function lowerHidden2(string){
    const key = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let answerArray = [];
    for (i=0; i< string.length; i++){
        if (key.includes(string[i]) === true){
            answerArray.push(string[i]);
        }
    }
    let answer = answerArray.join("");
    console.log(answer);
}

lowerHidden2("FDWQSFGoBDSZAwBNeNGDXXCn");


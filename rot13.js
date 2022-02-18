function rot13(string){
const englishAlphabetLC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const englishAlphabetUC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let rotCodeArray = [];
let messageArray = string.split("");
for (i=0; i<messageArray.length; i++){
    if (/[a-z]/.test(messageArray[i])){
        let aplhabetIndex = englishAlphabetLC.indexOf(messageArray[i])
        let cipherIndex = (aplhabetIndex + 13) % 26;
        let cipherLetter = englishAlphabetLC[cipherIndex]
        rotCodeArray.push(cipherLetter);
    }else if(/[A-Z]/.test(messageArray[i])){
        let aplhabetIndex = englishAlphabetUC.indexOf(messageArray[i])
        let cipherIndex = (aplhabetIndex + 13) % 26;
        let cipherLetter = englishAlphabetUC[cipherIndex]
        rotCodeArray.push(cipherLetter);
    }else{
        rotCodeArray.push(messageArray[i]);
    }
}
return rotCodeArray.join("");
}

let answer = rot13("Unit one to position Bravo")
console.log(answer)

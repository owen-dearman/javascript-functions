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

  console.log(alphabetPosition("doggy dog"))

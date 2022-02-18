function alphabetPosition(text) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let code = [];
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++){
        let letter = text[i];
        if ((/[a-zA-Z]/).test(letter) === true){
            let number = alphabet.indexOf(letter);
            code.push(number+1);
        }
    }
    let answer = code.join("");
    return answer;
  }

  console.log(alphabetPosition("doggy dog"))

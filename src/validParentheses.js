function validParentheses(parens) {
  parens.split("");
  let count = 0;
  for (i = 0; i < parens.length; i++) {
    if (parens[i] == "(") {
      count++;
    } else if (parens[i] == ")") {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  if (count == 0) {
    return true;
  } else {
    return false;
  }
}

let answer = validParanthese("");
console.log(answer);

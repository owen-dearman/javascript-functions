function squareDigit(num) {
  let num2 = num.toString();
  let newArray = [];
  for (digit of num2) {
    let squaredDigit = digit * digit;
    newArray.push(squaredDigit);
  }
  let array = newArray.join("");
  return array;
}

let answer = squareDigit(9999);
console.log(answer);

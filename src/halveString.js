function halveString(str) {
  let inputLength = str.length;
  if (inputLength % 2 === 0) {
    var turningIndex = inputLength / 2;
  } else {
    var turningIndex = (inputLength + 1) / 2;
  }
  let firstHalf = str.slice(0, turningIndex);
  let secondHalf = str.slice(turningIndex, inputLength);
  return [firstHalf, secondHalf];
}

let answer = halveString("123456789");
console.log(answer);

function twoDigit(number) {
  let singleWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let endZeroWords = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let teenWords = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  if (number[number.length - 1] == 0 && number[number.length - 2] == 0) {
    return "";
  } else if (number[number.length - 2] == 0) {
    let singlesNumber = singleWords[number[number.length - 1]];
    return `${singlesNumber}`;
  } else if (number[number.length - 1] == 0) {
    let singlesNumber = endZeroWords[number[number.length - 2]];
    return singlesNumber;
  } else if (number[number.length - 2] == 1) {
    let teensNumber = teenWords[number[number.length - 1]];
    return teensNumber;
  } else {
    let tensNumber = endZeroWords[number[number.length - 2]];
    let singlesNumber = singleWords[number[number.length - 1]];
    return `${tensNumber}-${singlesNumber}`;
  }
}

function threeDigit(number) {
  let singleWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let hundredsNumber = singleWords[number[number.length - 3]];
  if (
    number[number.length - 3] == 0 &&
    number[number.length - 2] == 0 &&
    number[number.length - 1] == 0
  ) {
    return "";
  } else if (number[number.length - 2] == 0 && number[number.length - 1] == 0) {
    return `${hundredsNumber} hundred`;
  } else if (number[number.length - 3] == 0) {
    let twoDigits = twoDigit(number);
    return `${twoDigits}`;
  } else {
    let twoDigits = twoDigit(number);
    return `${hundredsNumber} hundred ${twoDigits}`;
  }
}

function fourDigit(number) {
  let singleWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let thousandsNumber = singleWords[number[number.length - 4]];
  let threeDigits = threeDigit(number);
  if (
    number[number.length - 3] == 0 &&
    number[number.length - 2] == 0 &&
    number[number.length - 1] == 0
  ) {
    return `${thousandsNumber} thousand`;
  } else if (number[number.length - 4] == 0) {
    return `${threeDigits}`;
  } else {
    return `${thousandsNumber} thousand ${threeDigits}`;
  }
}

function fiveDigit(number) {
  let singleWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let endZeroWords = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let teenWords = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tenThousandNumber = endZeroWords[number[number.length - 5]];
  let fourDigits = fourDigit(number);
  if (
    number[number.length - 5] == 0 &&
    number[number.length - 4] == 0 &&
    number[number.length - 3] == 0 &&
    number[number.length - 2] == 0 &&
    number[number.length - 1] == 0
  ) {
    return `${tenThousandNumber} thousand`;
  } else if (number[number.length - 5] == 0 && number[number.length - 4] != 0) {
    let singlesNumber = singleWords[number[number.length - 4]];
    let threeDigits = threeDigit(number);
    return `${singlesNumber} thousand ${threeDigits}`;
  } else if (number[number.length - 5] == 0) {
    return `thousand ${fourDigits}`;
  } else if (number[number.length - 4] == 0) {
    return `${tenThousandNumber} thousand ${fourDigits}`;
  } else if (number[number.length - 5] == 1 && number[number.length - 4] != 0) {
    teensNumber = teenWords[number[number.length - 4]];
    let threeDigits = threeDigit(number);
    return `${teensNumber} thousand ${threeDigits}`;
  } else {
    return `${tenThousandNumber}-${fourDigits}`;
  }
}

function sixDigit(number) {
  let singleWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let hundredThousandNumber = singleWords[number[number.length - 6]];
  let fiveDigits = fiveDigit(number);
  return `${hundredThousandNumber} hundred ${fiveDigits}`;
}

function number2words(n) {
  let singleWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let number = n.toString();
  if (number.length == 1) {
    if (number.length == 1) {
      let wordNumber = singleWords[number];
      return wordNumber;
    }
  } else if (number.length == 2) {
    return twoDigit(number);
  } else if (number.length == 3) {
    return threeDigit(number);
  } else if (number.length == 4) {
    return fourDigit(number);
  } else if (number.length == 5) {
    return fiveDigit(number);
  } else if (number.length == 6) {
    return sixDigit(number);
  }
}

let answer = number2words(400000);
console.log(answer);

//https://www.codewars.com/kata/52724507b149fa120600031d/train/javascript

/* Create a function that transforms any positive number to a string representing
that number in words. Should work up to 999,999.  */

function number2words(n) {
  const singleWords = [
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
  const endZeroWords = [
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
  const teenWords = [
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
  let number = n.toString();
  // Number is 1 digit
  if (number.length == 1) {
    let wordNumber = singleWords[number];
    return wordNumber;
    // Number is 2 digits
  } else if (number.length == 2) {
    //2 digit Number ends in 0
    if (number[number.length - 1] == 0) {
      let wordNumber = endZeroWords[number[0]];
      return wordNumber;
      // 2 digit number doesn't end in 0
    } else {
      let tensNumber = endZeroWords[number[0]];
      let singlesNumber = singleWords[number[1]];
      return `${tensNumber}-${singlesNumber}`;
    }
    // Number is 3 digits
  } else if (number.length == 3) {
    // 2nd digit is a 0
    if (number[number.length - 2] == 0) {
      let hundredsNumber = singleWords[number[0]];
      let singlesNumber = singleWords[number[2]];
      if (singlesNumber == "zero") {
        return `${hundredsNumber} hundred`;
      } else {
        return `${hundredsNumber} hundred ${singlesNumber}`;
      }
      // 2nd digit is a 1 but not 10
    } else if (number[number.length - 2] == 1 && number[2] != 0) {
      let hundredsNumber = singleWords[number[0]];
      let teensNumber = teenWords[number[2]];
      return `${hundredsNumber} hundred ${teensNumber}`;
      // 3rd digit is a 0
    } else if (number[number.length - 1] == 0) {
      let hundredsNumber = singleWords[number[0]];
      let tensNumber = endZeroWords[number[1]];
      return `${hundredsNumber} hundred ${tensNumber}`;
      // None of the above
    } else {
      let hundredsNumber = singleWords[number[0]];
      let tensNumber = endZeroWords[number[1]];
      let singlesNumber = singleWords[number[2]];
      return `${hundredsNumber} hundred ${tensNumber}-${singlesNumber}`;
    }
    // Number is 4 digits
  } else if (number.length == 4) {
    return false;
  } else if (n.length == 5) {
    return false;
  } else if (n.length == 6) {
    return false;
  }
}

answer = number2words(17);
console.log(answer);

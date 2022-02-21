/* given a triangle of consecutive odd numbers, find the triangle's row knowing it's index. 
odd_row(2) => [7, 9, 11] */

//EDIT = this implementation times out on big numbers. See oddTriangleRows2 for a cleaner implementation

function odd_row(n) {
  let rowValues = [];
  let howManyOddNumbers = 0;
  //find how many odd numbers there are before row n
  for (i = 0; i < n; i++) {
    howManyOddNumbers += i;
  }
  console.log(howManyOddNumbers);
  //count through all previous odd numbers until the start of row n
  let countNumber = 1;
  for (i = 0; i < howManyOddNumbers; i++) {
    countNumber += 2;
  }
  console.log(countNumber);
  //add all odd numbers in row n into the rowValues array.
  for (i = 0; i < n; i++) {
    rowValues.push(countNumber);
    countNumber += 2;
  }
  //return the values on row n
  return rowValues;
}

let answer = odd_row(10);
console.log(answer);

function towerBuilder(nFloors) {
  let array = [];
  let newArray = [];
  let starsLowFloor = nFloors + (nFloors - 1);
  //console.log(starsLowFloor)
  let string = "*";
  for (i = 0; i < nFloors; i++) {
    array.push(string);
    string += "**";
  }
  let extraSpaces = "";
  for (i = nFloors; i > 0; i--) {
    let spacesNeeded = starsLowFloor - array[i - 1].length;
    //console.log(spacesNeeded)
    let newString = extraSpaces + array[i - 1] + extraSpaces;
    newArray.push(newString);
    extraSpaces += " ";
  }
  array = [];
  for (i = nFloors; i > 0; i--) {
    array.push(newArray[i - 1]);
  }
  return array;
}

answer = towerBuilder(3);
console.log(answer);

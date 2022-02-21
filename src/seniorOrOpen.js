/*
PROGRAM openOrSenior
    take the input of an array containing pairs
    create a new array for storing membership status
    FOR each pair in the array DO
        IF the first integer is greater than 55 and the handicap is greater than 7 THEN
                add "Senior" to the new array
        ELSE
                add "Open" to the new array
        ENDif
    ENDfor
    return the new array
ENDprogram
*/

function openOrSenior(data) {
  let membershipStatus = [];
  for (pair of data) {
    pair[0] >= 55 && pair[1] > 7
      ? membershipStatus.push("Senior")
      : membershipStatus.push("Open");
  }
  return membershipStatus;
}

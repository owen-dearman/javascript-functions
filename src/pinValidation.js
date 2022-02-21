/* Function that tests whether the input is valid through:
- being 4 or 6 characters long
- only containing digits

Parameters:
- PIN-NUMBER (string)
Returns:
- IS-VALID-PIN (boolean)

if PIN-NUMBER does not contain only digits then
    set IS-VALID-PIN to false
    return IS-VALID-PIN
else 
    if length of PIN-NUMBER is 4 or 6 then
        set IS-VALID-PIN to true
        return IS-VALID-PIN
    else
        set IS-VALID-PIN to false
        return IS-VALID-PIN
    endif
endif

"1234" // => true
"1567" // => true
"123456" // => true
"1bv2" // => false
"12" // => false
"12345" // => false

*/

/**
 * Validates pin being 4 or 6 characters long and only digits
 * @param {string} pin - number to test
 * @returns {boolean} - result
 */

function validatePIN(pin) {
  if (/^[0-9]+$/.test(pin) === false) {
    return false;
  } else {
    let pinString = pin.toString();
    return pinString.length != 4 && pinString.length != 6 ? false : true;
  }
}

console.log("ValidatePin 1 '1234' // => true  ", validatePIN("1234"));
console.log("ValidatePin 1 '1567' // => true  ", validatePIN("1467"));
console.log("ValidatePin 1 '123456' // => true  ", validatePIN("123456"));
console.log("ValidatePin 1 '1bv2' // => false  ", validatePIN("1bv2"));
console.log("ValidatePin 1 '12' // => false  ", validatePIN("12"));
console.log("ValidatePin 1 '12345' // => false  ", validatePIN("12345"));

/**
 * Validates pin being 4 or 6 characters long and only digits
 * @param {string} pin - number to test
 * @returns {boolean} - result
 */

function validatePIN2(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log("ValidatePin 2 '1234' // => true  ", validatePIN2("1234"));
console.log("ValidatePin 2 '1567' // => true  ", validatePIN2("1467"));
console.log("ValidatePin 2 '123456' // => true  ", validatePIN2("123456"));
console.log("ValidatePin 2 '1bv2' // => false  ", validatePIN2("1bv2"));
console.log("ValidatePin 2 '12' // => false  ", validatePIN2("12"));
console.log("ValidatePin 2 '12345' // => false  ", validatePIN2("12345"));

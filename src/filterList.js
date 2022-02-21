/* Take a list and return the integers in it

Parameters:
- ARRAY_TO_SORT (array of elements)
Returns:
- INTEGER_ARRAY (array of integers)

==============================================

set END_OF_ARRAY to length of ARRAY_TO_SORT - 1
set INTEGER_ARRAY to an empty array

for each VALUE in ARRAY_TO_SORT from index 0 to END_OF_ARRAY do
	if VALUE is an integer then
		add VALUE to the end of INTEGER_ARRAY
	endif
endfor
return INTEGER_ARRAY

===============================================

filterList([1,2,3]) // => [1,2,3]
filterList(["1", "2,", 3]) // => [3]
filterList ([a,b,c,[1,2]]) // => []

*/

/**
 * Take an array and returns only the integers
 * @param {array} l - list of elements
 * @returns {array} array of integers in l
 */

function filterList(l) {
  let newArray = [];
  for (i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i]) === true) {
      newArray.push(l[i]);
    }
  }
  return newArray;
}

console.log("[1,2,3] // => [1,2,3] ", filterList([1, 2, 3]));
console.log("['1', '2', '3'] // => [3] ", filterList(["1", "2,", 3]));
console.log(
  "['a','b','c',[1,2]] // => [] ",
  filterList(["a", "b", "c", [1, 2]])
); // => []

/*
Function that takes an array of probabilities and returns the accumulated probability
calculated by multiplying the previous probability to the current one.

Parameters:
- PROBABILITIES (array of integers)
Returns:
- ACCUMULATED-PROBABILITY (integer)

=======================================================

set ACCUMULATED-PROBABILITY to an empty array
for PROBABILITY in array of PROBABILITIES do
    if ACCUMULATED-PROBABILITIES is empty then
        add PROBABILITY to ACCUMULATED-PROBABILITIES
    else 
        set MULTIPLIER to the last element in ACCUMULATED-PROBABILITIES which is removed from ACCUMULATED-PROBABILITIES 
        set ACCUMULATED-PROBABILITY-SO-FAR to PROBABILITY multiplied by MULTIPLIER
        add ACCUMULATED-PROBABILITY-SO-FAR to the end of ACCUMULATED-PROBABILITIES
    endif
    return ACCUMULATED-PROBABILITIES
endfor

==========================================================

accumulateOdds([1,2,3]) // => 6
accumulateOdds([10, 5, 10]) // => 500
accumulateOdds([]) // => []
*/

/**
 * Accumulates odds by multiplying previous entries
 * @param {array} probabilities - array of odds
 * @returns {string} accumulated probability with statement
 */

function accumulateOdds(probabilities){
    let accumulatedProbabilities = [];
    for (let probability of probabilities){
        if (accumulatedProbabilities.length === 0){
            accumulatedProbabilities.push(probability);
        }else{
            let multiplier = accumulatedProbabilities.splice(-1);
            //console.log("Current Multiplier: ", multiplier.toString())
            let accumulatedProbability = probability * multiplier;
            accumulatedProbabilities.push(accumulatedProbability);
        }
    }
    return `Accumulated Probability: ${accumulatedProbabilities}`
}

console.log("[1,2,3] // => 6   ",accumulateOdds([1,2,3]))
console.log("[10,5,10] // => 500   ",accumulateOdds([10,5,10]))
console.log("[1, 0.5, 2] // => 1   ",accumulateOdds([1,0.5,2]))
console.log("[]   ",accumulateOdds([]))
function accumulateOdds(probabilities){
    let accumulatedProbabilities = [];
    for (let probability of probabilities){
        if (accumulatedProbabilities.length === 0){
            accumulatedProbabilities.push(probability);
        }else{
            let multiplier = accumulatedProbabilities.splice(-1);
            console.log(multiplier)
            let accumulatedProbability = probability * multiplier;
            accumulatedProbabilities.push(accumulatedProbability);
        }
    }
    return accumulatedProbabilities
}


let answer = accumulateOdds([6, 5, 6, 3])
console.log(answer)
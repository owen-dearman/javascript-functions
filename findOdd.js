/* given an A of integers, find the one that appears
an odd number of times */

function findOdd(A){
    let maxSoFar = 0;
    for (i=0; i<A.length; i++){
        let count = 0;
        for (j=0; j<A.length; j++){
            if (A[i] ==  A[j]){
                count ++
            }
        }
        if (count % 2 != 0){
            maxSoFar = A[i]
        }
    }
    return maxSoFar;
}

answer = findOdd([ 10, 10, 10, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7])
console.log(answer)
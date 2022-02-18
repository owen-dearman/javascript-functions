
function uniqueInOrder(string){
    let sequenceArray = [string[0]];
    if (string == []){
        return([]);
    }
    for(i=1; i<string.length;i++){
        if (string[i] != string[i-1]){
            sequenceArray.push(string[i])
        }
    }
    return(sequenceArray);
}


let answer = uniqueInOrder([1,1,1,2,3,4,8,5,8,8,8,2,1]);
console.log(answer);
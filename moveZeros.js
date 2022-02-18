function moveZeros(arr){
    let zeroStore = [];
    let sortedArray =[];
    for (i=0; i<arr.length; i++){
        if (arr[i] === 0){
            zeroStore.push(arr[i]);
        }else {
            sortedArray.push(arr[i]);
        }  
    }
    sortedArray = sortedArray.concat(zeroStore);
    return sortedArray;
}

let answer = moveZeros([3,0,0,6,76,"abc", true, 0, 1])
console.log(answer)
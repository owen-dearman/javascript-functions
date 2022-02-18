let array = [2, 9, 6, 8, 10, 6, 3, 2, 7, 53, 77]
let newArray = [];

function evenNumbers (array){
    for (let number of array){
        number % 2 == 0 ? newArray.push(number) : console.log("odd number")
    }
    return newArray
}

let answer = evenNumbers(array)
console.log(answer)


// (let number in array) produces 0, 2, 4, 6, 8, 10 - the indexes which are even numbers
// (let number of array) produces 2, 6, 8, 10, 6, 2 - the numbers which are even

function evenNumbers (array){
    let newArray = [];
    for (i=0; i<array.length; i++){
        if (array[i] % 2 == 0){
            newArray.push(array[i])
        }else{
            console.log("odd number")
        }
    }
    console.log(newArray)
}


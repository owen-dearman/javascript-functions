/* Take a list and return the integers in it*/

function filter_list(l) {
     let newArray = [];
     for (i=0; i<l.length; i++){
        if (Number.isInteger(l[i]) === true){
            newArray.push(l[i])
        }
     }
    return newArray
}

let answer = filter_list([1, 2, "123",3])
console.log(answer)
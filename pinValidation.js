function validatePIN (pin) {
    if(/^[0-9]+$/.test(pin) === false){
        return false
    }else{
        let pinString = pin.toString()
        return pinString.length != 4 && pinString.length != 6 ? false : true
    }
}

let answer = validatePIN("12a3")
console.log(answer)

//let answer = validatePIN2(1233)
//console.log(answer)

function validatePIN2 (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

let answer2 = validatePIN2("12a3")
console.log(answer2)
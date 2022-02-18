//Takes an array of 10 integers between 0 and 9 and returns them in the following format
// "(123) 456-7890"

let array = [1,2,3,4,5,6,7,8,9,0];
function phoneNumber(numbers){
    let arrayTwo = [];
    let arrayThree = [];
    let arrayFour=[];
    for (i=0; i<=2; i++){
        let firstSection = numbers[i];
        arrayTwo.push(firstSection);
    }
    for(j=3; j<=5; j++){
        let secondSection = numbers[j];
        arrayThree.push(secondSection);
    }
    for(k=6; k<=9; k++){
        let thirdSection = numbers[k];
        arrayFour.push(thirdSection);
    }
    let one = arrayTwo.join("");
    let two = arrayThree.join("");
    let three = arrayFour.join("");
    return `(${one}) ${two}-${three}`
}

console.log(phoneNumber(array))

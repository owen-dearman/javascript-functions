function getCount(str) {
    var vowelsCount = 0;
    str.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    for(i=0; i<=str.length; i++){
        if (vowels.includes(str[i]) === true){
            vowelsCount++;
        }
    }
    return vowelsCount;
}

console.log(getCount("cArdiovascular"));
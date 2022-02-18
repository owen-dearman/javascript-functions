function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let newComment = [];
      for(i=0; i<=str.length; i++){
          if(vowels.includes(str[i]) === false){
            newComment.push(str[i]);
          }
      }
    let answer = newComment.join("");
    return answer;
}

console.log(disemvowel("hello"));
console.log(disemvowel("Spartacus!"));
console.log(disemvowel("LOL wot yuzz doin ma8"));
console.log(disemvowel("abcDEFITS"));
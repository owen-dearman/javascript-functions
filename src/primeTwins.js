function isTwinPrime(n) {
  let count = 2;
  let numFactors = 0;
  if (n % 2 === 0) {
    return false;
  }
  while (count * count <= n) {
    if (n % count === 0) {
      numFactors++;
    }
    count++;
  }
  if (numFactors === 0) {
    let highCount = 2;
    let highFactors = 0;
    let highPrime = n + 2;
    let lowCount = 2;
    let lowFactors = 0;
    let lowPrime = n - 2;
    while (lowCount * lowCount <= lowPrime) {
      if (lowPrime % lowCount === 0) {
        lowFactors++;
      }
      lowCount++;
    }
    while (highCount * highCount <= highPrime) {
      if (highPrime % highCount === 0) {
        highFactors++;
      }
      highCount++;
    }
    if (highFactors === 0 || lowFactors === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(isTwinPrime(5));
//true
console.log(isTwinPrime(25));
//false
console.log(isTwinPrime(-2));
//false
console.log(isTwinPrime(0));
//false
console.log(isTwinPrime(953));
//false
console.log(isTwinPrime(9));
//false

function isTwinPrime(n){
    return (isPrime(n) && (isPrime(n-2) || isPrime(n+2)));
  }
  
  function isPrime(n) {
    for (var i = 2; i < n; i++) if (n % i == 0) return false;
    return n >= 2; 
  }

  console.log(isTwinPrime(-2))
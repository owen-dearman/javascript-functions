function multipleThreeFive(n) {
  let sumTotal = 0;
  if (n < 0) {
    return 0;
  }
  for (i = 0; i < n; i++) {
    if (i % 3 === 0) {
      sumTotal += i;
    }
  }
  for (j = 0; j < n; j++) {
    if (j % 3 != 0) {
      if (j % 5 === 0) {
        sumTotal += j;
      }
    }
  }
  return sumTotal;
}

answer = multipleThreeFive(12);
console.log(answer);

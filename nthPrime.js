function nthPrime(n) {
  let count = 0; //how many primes we have
  let curNum = 1; //which num were looking at
  while (count < n) {
    curNum++;
    console.log("count", count, "currentNum: ", curNum, checkPrime(curNum));
    if (checkPrime(curNum) === true) count++;
  }
  return curNum;
}

function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(nthPrime(5));

//Problem: Find Nth prime number
//Example: nthPrime(5) => 11

function nthPrime(n) {
  let count = 0; //how many primes we have
  let curNum = 1; //which num were looking at
  while (count < n) {
    curNum++;
    if (checkPrime(curNum) === true) count++;
  }
  return curNum;
}

//helper function
function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

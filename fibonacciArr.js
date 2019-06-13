//Question: print out fibonacci numbers up to Nth num in sequence in an array
//fib(5) => [ 0, 1, 1, 2, 3, 5 ]
function fib(n) {
  let fibArr = [0, 1];
  let count = 0;
  for (let i = 1; i < n; i++) {
    count += fibArr[i] + fibArr[i - 1];
    fibArr.push(count);
    count = 0;
  }
  return fibArr;
}

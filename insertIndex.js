function searchInsert(arr, n) {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.floor((low + high) / 2);
  if (arr.length === 1) {
    if (n > arr[0]) return 1;
    return 0;
  }
  if (n <= arr[low]) return low;
  if (n > arr[high]) return high + 1;
  if (n === arr[mid]) return mid;
  while (low !== mid && high !== mid) {
    if (n <= arr[low]) return low;
    if (n >= arr[high]) return high;
    if (n === arr[mid]) return mid;
    console.log(arr[low], arr[mid], arr[high]);
    if (n > arr[mid]) low = mid;
    if (n < arr[mid]) high = mid;
    if (arr[mid] === n) return mid;
    mid = Math.floor((low + high) / 2);
    if (low !== mid && high !== mid) {
      if (arr[high] === arr[low]) {
        return mid;
      }
    }
  }
  return mid + 1;
}

console.log(searchInsert([1, 3], 3));
// [1, 3, 5, 6];
// 7;
// console.log(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// console.log(searchInsert([1, 3], 0));
// Output: 4

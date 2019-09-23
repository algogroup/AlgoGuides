function mergeArrs(arr1, arr2) {
    let outputArr = []
    let arr1Point = 0;
    let arr2Point = 0;
    while (arr1Point < arr1.length && arr2Point < arr2.length) {
        if (arr2Point === arr2.length && arr1Point === arr1.length) {
            return outputArr
        }
        if (arr1[arr1Point] < arr2[arr2Point]) {
            outputArr.push(arr1[arr1Point])
            arr1Point++
        } else if (arr1[arr1Point] > arr2[arr2Point]) {
            outputArr.push(arr2[arr2Point])
            arr2Point++
        }
    }
    //add remainder to output array
    if (arr2Point < arr1Point) {
        while (arr2Point !== arr1Point) {
            outputArr.push(arr2[arr2Point])
            arr2Point++
        }
    }
    if (arr1Point < arr2Point) {
        while (arr2Point !== arr1Point) {
            outputArr.push(arr1[arr1Point])
            arr1Point++
        }
    }
    return outputArr
}

const arr1 = [3, 4, 6, 10, 11, 15];
const arr2 = [1, 5, 8, 12, 14, 19];
console.log(mergeArrs(arr1, arr2))
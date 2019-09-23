//PROBLEM: Given two code2ings check if they are anagrams of eachother

//EXAMPLE: Input: anagram('pizza', 'izazp') 
//Output: true

// function anagram(code21, code22) {
//     if (code21.length !== code22.length) return false;
//     let hash = {}
//     let hash2 = {}
//     for (let i = 0; i < code21.length; i++) {
//         hash[code21[i]] = hash[code21[i]] + 1 || 1
//         hash2[code22[i]] = hash2[code22[i]] + 1 || 1
//     }
//     for (letter in hash) {
//         if (hash[letter] !== hash2[letter]) return false
//     }
//     return true;
// }

// console.log(anagram('pizza', 'izazp'))


// function uniqueVals(arr) {
//     let count = 0
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1]) {
//             count++;
//         }
//     }
//     return arr.length - count;
// }
// console.log(uniqueVals([2, 3, 4, 4, 7, 7, 9])) //5 

// function maxSubarraySum(arr, n) {
//     let tempSum = 0;
//     let finalSum = 0;
//     let output = 0;
//     for (let i = 0; i < n; i++) {

//         tempSum += arr[i]
//     }
//     finalSum = tempSum
//     // console.log(tempSum, n)
//     for (let i = n; i < arr.length; i++) {
//         finalSum = finalSum - arr[i - n] + arr[i]
//         console.log(arr[i - n], arr[i], finalSum)
//         if (output < finalSum) output = finalSum
//     }
//     return output
// }

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 99], 3))//10

function plagiarismCheck(code1, code2) {
    code2 = code2.replace(/[^a-z0-9]/gi, '');
    code2 = code2.split(' ');
    code1 = code1.replace(/[^a-z0-9]/gi, '');
    code1 = code1.replace()
    code1 = code1.split(' ');
    console.log(code1, code2)

    let hash = {}
    for (let i = 0; i < code2.length; i++) {
        if (!hash[code1[i]]) {
            if (Object.values(hash).includes(code2[i])) return false;
            hash[code1[i]] = code2[i]
            console.log(hash)
        }
    }
    let newSentence = []
    for (let i = 0; i < code1.length; i++) {
        newSentence.push(hash[code1[i]])
        if (newSentence[i] !== code2[i]) {
            return false
        }
    }
    if (newSentence.length !== code2.length) return false
    return true;

}

// console.log(plagiarismCheck('test ing', 'test ss'))

// function alarmClock(setTime, timeToSet) {
//     let setTimeHours = setTime.split(':')[0]
//     let setTimeMin = setTime.split(':')[1]
//     console.log(setTimeHours, setTimeMin)
//     let finalTimeHours = timeToSet.split(':')[0]
//     let finalTimeMin = timeToSet.split(':')[1]
//     console.log(finalTimeHours, finalTimeMin)
//     let answerHours = 0;
//     let answerMin = 0;
//     let answer = 0;
//     //normal operation
//     answerHours = Math.abs(finalTimeHours - setTimeHours)
//     answerMin = Math.abs(finalTimeMin - setTimeMin)
//     answer = answerHours + answerMin;
//     //edge cases
//     if (finalTimeHours < 12) {
//         if (setTimeHours > 12) {
//             answerHours = (24 - finalTimeHours) - setTimeHours
//         }
//     }
//     if (setTimeMin > 30) {
//         answerMin = 60 - setTimeMin - finalTimeMin
//     }
//     console.log(answerHours, answerMin)

//     answer = answerHours + answerMin;

//     return answer;
// }
// console.log(alarmClock("23:45", "05:00"))s
console.log(plagiarismCheck(`["def is_even_sum(a, b):",
"    return (a + b) % 2 == 0"]`,
    `["def is_even_sum(summand_1, summand_2):",
        "    return (summand_1 + summand_2) % 2 == 0"]`))

// "abba", code2 = "dog cat cat dog"
// Output: true

// function kSmallestPairs(arr1, arr2, k) {
//     let arr1Point = 0;
//     let arr2Point = 0;
//     let outputArr = []
//     let count = 0;
//     while (arr1Point < arr1.length && arr2Point < arr2.length) {
//         console.log(arr1[arr1Point], arr2[arr2Point])
//         if (outputArr.length === k) return true;
//         if (arr1Point === arr1.length && arr2[arr2Point] === arr2.length) break;
//         if (arr1[arr1Point] < arr2[arr2Point]) {
//             outputArr.push([arr1[arr1Point], arr2[arr2Point]])
//             arr2Point++;
//         }
//         if (arr1[arr1Point] > arr2[arr2Point]) {
//             outputArr.push([arr1[arr1Point], arr2[arr2Point]])
//             arr1Point++;
//         }
//         else if (arr1[arr1Point] === arr2[arr2Point]) {
//             outputArr.push([arr1[arr1Point], arr2[arr2Point]])
//             if (arr1[arr1Point + 1] > arr2[arr2Point + 1]) {
//                 arr2Point++;
//             } else {
//                 arr1Point++;

//             }
//         }
//     }

//     return outputArr.slice(0, k)
// }


// console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 10))
// [1,1,2]
// [1,2,3]
// 10

// console.log(kSmallest([1, 1, 2], [1, 2, 3], 2))

    // [[1, 2], [1, 4], [1, 6]]
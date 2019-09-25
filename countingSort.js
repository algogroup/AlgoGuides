//Algorithim that sorts numbers under a given number in O(n) time
function countingSort(unsortedNums, highestPossibleNum) {
    let sortedNums = new Array(highestPossibleNum).fill(0, 0, highestPossibleNum)
    let output = []
    unsortedNums.forEach(elem => {
        sortedNums[elem]++
    })
    for (let i = highestPossibleNum; i > 0; i--) {
        for (let j = 0; j < sortedNums[i]; j++) {
            output.push(i)
        }
    }
    return output
}
const unsortedNums = [37, 37, 89, 41, 65, 91, 53];
const maxNum = 100;

console.log(countingSort(unsortedNums, maxNum))
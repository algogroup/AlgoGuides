// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
// Recursive Solution
function removeDuplicates(str, k) {
    let newStr = ''
    let flag = false
    let altered = false
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < k; j++) {
            if (str[i + j] !== str[i]) {
                flag = false
                break;
            } else {
                flag = true
            }
        }
        if (flag === false) {
            newStr += (str[i])
        } else {
            i += k - 1
            altered = true
        }
    }
    if (altered === true) {
        return removeDuplicates(newStr, k)
    }
    return newStr
}
console.log(removeDuplicates('deeedbbcccbdaa', 3))
// https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function (strs) {
    let res = ''
    let currLetter = ''
    let firstWord = strs[0]
    let minLength = Infinity
    if (!strs.length) return ""
    if (strs.length === 1) return strs[0]
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minLength) minLength = strs[i].length
    }
    for (let i = 0; i < minLength; i++) {
        for (let j = 1; j < strs.length; j++) {
            currLetter = strs[j][i]
            if (strs[j][i] !== firstWord[i]) {
                return res + currLetter
            }
        }
        res += currLetter
    }
    return res
}

console.log(longestCommonPrefix(["ab", "ab", "abce"]))
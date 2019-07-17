//PROBLEM: Given two strings check if they are anagrams of eachother

//EXAMPLE: Input: anagram('pizza', 'izazp') 
//Output: true

function anagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let hash = {}
    let hash2 = {}
    for (let i = 0; i < str1.length; i++) {
        hash[str1[i]] = hash[str1[i]] + 1 || 1
        hash2[str2[i]] = hash2[str2[i]] + 1 || 1
    }
    for (letter in hash) {
        if (hash[letter] !== hash2[letter]) return false
    }
    return true;
}

console.log(anagram('pizza', 'izazp'))
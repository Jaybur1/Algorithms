const alphabetSubsequence = (str) => {
    let inputStr = str.split("")
    let charValues = []

    inputStr.forEach(char => {
        charValues.push(char.charCodeAt(0))
    });
    // new Set() takes an array and returning all the content but without the duplicats
    //then we can check if the new set length(.size) is smaller then the original array
    //if it does, then we have a duplicat 
    if (new Set(charValues).size !== charValues.length) {
        return false
    }

    //after we excluded the duplicat option , we can simply check if the next char in line is 
    //smaller, if it does, then the sequence is broken  
    for (x = 0; x < charValues.length - 1; x++) {
        if (charValues[x] >= charValues[x + 1]) {
            return false
        }
    }
    return true
};

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
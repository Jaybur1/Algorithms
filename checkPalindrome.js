const checkPalindrome = (str) => {
    const reverse = str.split('').reverse().join('')
    return str === reverse;
}

console.log(checkPalindrome(''));
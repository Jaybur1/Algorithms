const allLongestStrings = (arr) => {
    let longetsLength = 0
    const newArr = [];
    arr.forEach(string => {
        longetsLength = longetsLength < string.length ? string.length : longetsLength;
    })
    arr.forEach(string => {
        if (string.length === longetsLength) {
            newArr.push(string);
        }
    })

    return newArr;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcdw", "abaa"]));
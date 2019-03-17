const differentSubstring = (str) => {
    const subArr = [str[0]];
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < str.length; j++) {
            let subStr = str.substring(i, j + 1);
            if (subStr !== "" && !subArr.includes(subStr)) {
                subArr.push(subStr);
            }
        }
    }
    console.log(subArr);
    return subArr.length;
}
console.log(differentSubstring('string'));
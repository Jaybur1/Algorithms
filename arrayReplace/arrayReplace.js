const arrayReplace = (arr, numToReplace, subNum) => {
    const newArr = arr.map(num => num === numToReplace ? subNum : num)
    return newArr;
}

console.log(arrayReplace([1, 2, 1, 4, 5], 1, 3));
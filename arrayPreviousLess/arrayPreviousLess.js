const arrayPreviousLess = (arr) => {
    const newArr = [];
    for (let x = arr.length - 1; x >= 0; x--) {
        for (let i = x; i >= 0; i--) {
            if (arr[x] > arr[i]) {
                newArr.unshift(arr[i]);
                break;
            } else if (i === 0) {
                newArr.unshift(-1);
            }
        }
    }
    return newArr;
}

console.log(arrayPreviousLess([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]));
const avoidObstacles = (arr) => {
    arr = arr.sort((a, b) => a - b);
    const largestNum = arr[arr.length - 1];

    for (let i = 1; i <= largestNum + 1; i++) {
        if (arr.every(num => num % i !== 0)) {
            return i;
        }
    }

}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
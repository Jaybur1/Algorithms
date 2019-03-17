const arrayMaximalAdjacentDifference = (arr) => {
    let maxDiff = 0;

    arr.forEach((num, index) => {
        let backDiff = Math.abs(num - arr[index - 1]);
        let frontDiff = Math.abs(num - arr[index + 1]);

        if (frontDiff > backDiff && frontDiff > maxDiff) {
            maxDiff = frontDiff;
        } else if (backDiff > frontDiff && backDiff > maxDiff) {
            maxDiff = backDiff;
        }
    });
    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
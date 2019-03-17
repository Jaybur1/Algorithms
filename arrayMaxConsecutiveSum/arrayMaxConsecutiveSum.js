const arrayMaxConsecutiveSum = (arr, k) => {
    let maxSum = 0;
    let possibleSum = 0;

    for (let i = 0; i < k; i++) {
        possibleSum += arr[i];
        console.log(possibleSum);
    }

    maxSum = possibleSum;

    for (let i = k; i < arr.length; i++) {
        possibleSum -= arr[i - k];
        possibleSum += arr[i];
        console.log(possibleSum);

        if (possibleSum > maxSum) {
            maxSum = possibleSum;
        }
    }
    return maxSum;
};


console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
const absoluteValuesSumMinimization = (arr) => {
    //check if the length of the array is even
    const isEven = arr.length % 2 === 0;
    //if it does , we will divide the length in 2 and will return the smallest number between the two in the middle 
    //if not , we will divide the length in two and floor it so we can return the middle number 
    return isEven ? arr[(arr.length / 2) - 1] : arr[Math.floor(arr.length / 2)];
}
console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
const almostIncreasingSequence = (arr) => {
    let failCount = 0;
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] <= arr[x - 1]) { //checking if the number before the one we check is bigger or equal to it
            failCount++; //if it does ,it fails the check so we add 1 to the count.
            if (arr[x] <= arr[x - 2] && arr[x + 1] <= arr[x - 1]) { //also we adding this double check, in case we get a big arr whit constent ups and downs.
                false
            }
        }
    }
    return failCount <= 1;
};

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
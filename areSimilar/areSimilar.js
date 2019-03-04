const areSimilar = (arr1, arr2) => {
    if (arr1.toString() === arr2.toString()) {
        return true;
    }

    const arr3 = [];
    let arr4 = [];

    for (x = 0; x < arr1.length; x++) {
        if (arr1[x] !== arr2[x]) {
            arr3.push(arr1[x]);
            arr4.push(arr2[x]);
        }
    }

    arr4 = arr4.reverse();
    if (arr3.length === 2 && (arr3.toString() === arr4.toString())) {
        return true;
    }

    return false;
};

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
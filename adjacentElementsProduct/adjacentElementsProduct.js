const adjacentElementsProduct = (arr) => {
    let temp = [];
    for (let x = 0; x < arr.length - 1; x++) {
        temp.push(arr[x] * arr[x + 1]);
    }
    temp.sort((a, b) => b - a);
    return temp[0];
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
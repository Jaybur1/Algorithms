const makeArrayConsecutive2 = (statues) => {
    statues.sort((a, b) => a - b)
    let smallest = statues[0];
    let largest = statues[statues.length - 1];

    let completeArr = new Array;

    for (let x = smallest; x <= largest; x++) {
        completeArr.push(x);
    }
    return completeArr.length - statues.length
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));
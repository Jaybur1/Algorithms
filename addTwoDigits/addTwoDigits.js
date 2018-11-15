const addTwoDigits = (num) => {
    let total = num.toString();
    return total.split('').reduce((a, b) => Number(a) + Number(b));

}
console.log(addTwoDigits(99));
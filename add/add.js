const add = (...args) => {
    //we taking all the arguments given and summing them 
    return [...args].reduce((a, b) => a + b, 0);

}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add(1, 2, 3, 4, 5));
console.log(add(2, 3));
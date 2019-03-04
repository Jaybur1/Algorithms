const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
    let friend = [friendsLeft, friendsRight];
    let you = [yourLeft, yourRight];

    if (you[0] === friend[0] && you[1] === friend[1] || you[1] === friend[0] && you[0] === friend[1]) {
        return true;
    }

    return false;
};


console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
console.log(areEquallyStrong(10, 5, 5, 10));
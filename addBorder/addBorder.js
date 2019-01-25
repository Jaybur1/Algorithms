const addBorder = (picture) => {
    let border = '*'.repeat(picture[0].length + 2);
    let borderd = [border, ...picture, border];
    for (let x = 1; x < borderd.length - 1; x++) {
        borderd[x] = '*'.concat(borderd[x], '*');
    }
    return borderd;
}
console.log(addBorder(["abc", "ded"]));
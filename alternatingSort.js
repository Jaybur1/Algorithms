function alternatingSort(a) {
    let b = [];
    let check = 0;
    a.forEach((num, index) => {
        if (!b.includes(num) && !b.includes(a[a.length - index])) {
            if (index === 0) {
                b.push(num);
                alternatingSort
            } else {
                b.push(a[a.length - index], num);
            }
        }

    })
    if (a.length % 2 === 0) {
        b = b.splice(0, a.length);
    }
    console.log(b);
    for (let i = 0; i < b.length - 1; i++) {
        if (b[i + 1] < b[i]) {
            check++;
            console.log(check);
        } else if (b[i + 1] !== b[i] + 1) {
            check++;
            console.log(check);
        }
    }
    return check > 0 ? false : true;

}
console.log(alternatingSort([1, 3, 5, 7, 9, 10, 8, 6, 4, 3]));
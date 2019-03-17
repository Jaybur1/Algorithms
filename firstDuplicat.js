const firstDuplicate = (arr) => {
    let minIndex = arr.length;
    let firstDup;
    let dupCount = 0;


    for (let i = 0; i < arr.length; i++) {
        for (j = 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (Math.abs(i - j) < minIndex && Math.abs(i - j) !== 0) {
                    minIndex = Math.abs(i - j);
                    firstDup = arr[i];
                    dupCount++;

                }
            }
        }
    }
    return dupCount === 0 ? -1 : firstDup;
}

console.log(firstDuplicate([2, 5, 3]));

//second solution (for memory run time)
/*
function firstDuplicate(a) {

  for (let i = 0; i < a.length; i++) {
    const val = Math.abs(a[i]);
    if (a[val - 1] < 0) return val;
    a[val - 1] = -a[val - 1];
  }
  return -1;
}

console.log(firstDuplicate([2,4,3,5,3,2]));

*/
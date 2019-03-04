const arrayConversion = (arr) => {
    let result = 0;
    let counter = 1;
    const loopSession = (arr) => {
        console.log(arr.length);
        //Every loop try we checking if the arr is complete, if tit does , we setting the result to the last number in the array.
        if (arr.length === 1) {
            result = arr[0];
        } else {
            //if the array is not complete, we checking the counter, if its odd, we doing the adding operation .
            if (counter % 2 === 1) {
                let newArr = [];
                arr.forEach((num, i) => {
                    let pair = arr[i] + arr[i + 1];
                    arr.splice(0, 1);
                    newArr.push(pair);
                });
                //updating the counter
                counter++;
                console.log(newArr.length, counter);
                //and running trying running the loopSession Again.
                loopSession(newArr);
                //if the counter is even, then we doing the multiply operation
            } else if (counter % 2 === 0) {
                let newArr = [];
                arr.forEach((num, i) => {
                    let pair = arr[i] * arr[i + 1];
                    arr.splice(0, 1);
                    newArr.push(pair);
                })
                //updating the counter
                counter++;
                console.log(newArr, counter);
                //and again, trying to run loopSession
                loopSession(newArr);
            }
        }
    }

    //init loopSession function with the given array
    loopSession(arr);
    //returning the result.
    return result;
}
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
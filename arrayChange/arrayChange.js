const arrayChange = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        // in case the next number will be equal or less than previous one

        if (arr[i] >= arr[i + 1]) {
            // if [a,b] => (a+1)-b= difference
            let difference = (arr[i] + 1) - arr[i + 1];
            // then we updating the array .
            arr[i + 1] = arr[i] + 1;
            //and updating the count.
            counter += difference;
            //in case the next number is bigger then the previous one
        } else if (arr[i] < arr[i + 1]) {
            //if [a,b] => b - (a+1)
            let difference = arr[i + 1] - (arr[i] + 1);
            //then updating the array
            arr[i + 1] = arr[i] + 1;
            //and updating the counter
            counter += difference;
        }
    }
    return counter;
}
console.log(arrayChange([1, 1, 1])); // returns 3
console.log(arrayChange([1, 20, 5])); //returns 20
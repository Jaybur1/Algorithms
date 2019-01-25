const alternatingSums = (arr) => {
    let team1 = [];
    let team2 = [];

    //divide the guys into 2 groups
    for (let x = 0; x < arr.length; x++) {
        if (x % 2 === 0) {
            team1.push(arr[x]);
        } else {
            team2.push(arr[x]);
        }
    }
    //return the sums in an array
    return [(team1.reduce((a, b) => a + b)), (team2.reduce((a, b) => a + b))]
    return sumArr
};

console.log(alternatingSums([50, 60, 60, 45, 70]));
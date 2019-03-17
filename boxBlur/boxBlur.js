const boxBlur = (img) => {
    const pixels = [];

    for (let y = 0; y < img.length - 2; y++) {
        let pixel = [];

        for (let x = 0; x < img[y].length - 2; x++) {
            let sum = 0;
            let count = 0;

            for (let a = y; a < y + 3; a++) {
                for (let b = x; b < x + 3; b++) {
                    sum += img[a][b]
                    count++;

                }
            }

            pixel.push(Math.floor(sum / count));
        }
        pixels.push(pixel);
    }


    return pixels;
};
console.log(boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]
]));
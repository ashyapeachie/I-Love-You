/* 
* author: Ashya 
* filename: ily.js
* description: this file defines the heart shape using coordinates, creates a grid of divs,
* colors only the heart shaped blocks, and changes their color every second
*/

const heartShape = [
    [1, 0], [2, 0], [4, 0], [5, 0],
    [0, 1], [3, 1], [6, 1], 
    [0, 2], [6, 2],
    [1, 3], [5, 3],
    [2, 4], [4, 4],
    [3, 5],
];
// this array defines the pixel coordinates (column, row) that form the heart

const grid = document.getElementById('heartGrid');
// selecting the heart grid container from HTML

/* generating all the pixels (42) */
for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
        const pixel = document.createElement('div');
        // creating a new div element to rep a pixel
        pixel.classList.add('pixel');
        // adding the css class for styling 
        pixel.dataset.row = row;
        pixel.dataset.col = col;
        // stores the row and column as data attributes for easy access
        grid.appendChild(pixel);
        // adds the pixel to the grid container
    }
}

function getPixel(row, col) {
    return document.querySelector(`.pixel[data-row='${row}'][data-col='${col}']`);
}
// helper / utility function to get a pixel by coordinates

function getRandomHeartColor() {
    const colors = ['#ff4d4d', '#ff1a75', '#ff3399', '#ff6666', '#ff80bf', '#ff99cc'];
    return colors[Math.floor(Math.random() * colors.length)];
}
// function returns random heart based color from a predefined palette 

function colorHeart() {
    heartShape.forEach(([col, row]) => {
        const pixel = getPixel(row, col);
        // getting the corresponding pixel
        if (pixel) {
            pixel.style .backgroundColor = getRandomHeartColor();
        }
    });
}
// function applies new random color to each pixel that's part of the heart

/* animating the color change in heart */
setInterval(colorHeart, 800);
colorHeart();
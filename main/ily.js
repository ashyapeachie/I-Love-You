/* 
* author: Aham
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
// manually specifiying which grid blocks from the shape of a heart

const grid = document.getElementById('heartGrid');
// selecting the heart grid container from HTML

/* generating all the pixels (42) */
for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.dataset.row = row;
        pixel.dataset.col = col;
        grid.appendChild(pixel);
    }
}
// this generates 42 divs (6 rows x 7 cols) and adds them to a container
// each div.pixel has data-row and data-col attributes to help select them later

/* helper functions */
function getPixel(row, col) {
    return document.querySelector(`.pixel[data-row='${row}'][data-col='${col}']`);
}

function getRandomHeartColor() {
    const colors = ['#ff4d4d', '#ff1a75', '#ff3399', '#ff6666', '#ff80bf', '#ff99cc'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function colorHeart() {
    heartShape.forEach(([col, row]) => {
        const pixel = getPixel(row, col);
        if (pixel) pixel.style.backgroundColor = getRandomHeartColor();
    });
}
// function applies new random color to each pixel that's part of the heart
// getPixel fetches a specific pixel by its row / col using attribute selector
// getRandomHeartColor returns a random red / pink tone
// colorHeart loops through the heartShape pixels and applies a random color

/* animating the color change in heart */
setInterval(colorHeart, 600);
colorHeart();
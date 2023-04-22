const canvas = document.querySelector(".game-board");
const context = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const gameBordSizeInfo = canvas.getBoundingClientRect();


drawApple();

const defaultXPosition = 10;
const defaultYPosition = 10;
let snakeSize = 10;


drawSnake(snakeSize, defaultXPosition);

let titi = defaultXPosition;
setInterval(() => {
  move(snakeSize, titi);
  titi += 20;
}, 600);

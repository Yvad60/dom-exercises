function drawApple() {
  const appleWidth = 20;
  const appleHeight = 20;
  randomXPosition = Math.floor(Math.random() * (canvasWidth - appleWidth));
  randomYPosition = Math.floor(Math.random() * (canvasHeight - appleHeight));
  context.fillStyle = "red";
  context.fillRect(randomXPosition, randomYPosition, appleWidth, appleHeight);
}

function drawSnake(snakeSize, startPositionX, startPositionY, direction) {
  context.fillStyle = "#009900";
  context.strokeStyle = "black";
  context.lineWidth = 1;

  for (let i = 0; i < snakeSize; i++) {
    context.fillRect(startPositionX, 10, 20, 20);
    context.strokeRect(startPositionX, 10, 20, 20);
    startPositionX += 20;
  }
}

function move(snakeSize, startPositionX) {
  let deletePosition = startPositionX;
  for (let i = 0; i < snakeSize; i++) {
    context.clearRect(deletePosition, 10, 20, 20);
    deletePosition += 20;
  }
  drawSnake(snakeSize, startPositionX + 20);
}

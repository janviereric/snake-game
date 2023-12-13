import {
  updateSnakePosition,
  gameOver,
  drawMap,
  snakePosition,
  drawSnakeBody,
  fruitsAppear,
} from "../index.js";

export const gameLoop = () => {
  if (!updateSnakePosition()) {
    drawMap();
    snakePosition();
    drawSnakeBody();
    fruitsAppear();
    gameOver();
    setTimeout(() => {
      requestAnimationFrame(gameLoop);
    }, 1000);
  }
};

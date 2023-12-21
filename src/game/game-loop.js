import {
  updateSnakePosition,
  gameOver,
  landMaps,
  snakePosition,
  drawSnakeBody,
  fruitsAppear,
} from "../index.js";

export const gameLoop = () => {
  if (!updateSnakePosition()) {
    landMaps();
    snakePosition();
    drawSnakeBody();
    fruitsAppear();
    gameOver();
    setTimeout(() => {
      requestAnimationFrame(gameLoop);
    }, 1000);
  }
};

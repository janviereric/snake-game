import { snake } from "../index.js";

export const gameOver = () => {
  if (
    snake[0][0] > 19 ||
    snake[0][0] < 0 ||
    snake[0][1] > 19 ||
    snake[0][1] < 0
  ) {
    clashBorderMap();
    return true;
  } else {
    const [snakeHead, ...snakeBody] = snake;
    for (let body of snakeBody) {
      if (body[0] === snakeHead[0] && body[1] === snakeHead[1]) {
        clashHimself();
        return true;
      }
    }
  }
  return false;
};

const clashBorderMap = () => {
  alert("Perdu : map");
};

const clashHimself = () => {
  alert("Perdu : clashHimself ");
};

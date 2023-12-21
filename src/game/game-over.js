import { openMenu, snake } from "../index.js";

export const gameOver = () => {
  // easy level
  // if (snake[0][0] > 14) {
  //   snake[0][0] = 0;
  // } else if (snake[0][0] < 0) {
  //   snake[0][0] = 14;
  // } else if (snake[0][1] > 14) {
  //   console.log(snake[0][1]);
  //   snake[0][1] = 0;
  // } else if (snake[0][1] < 0) {
  //   console.log(snake[0][1]);
  //   snake[0][1] = 14;
  // } else {

  // middle and hard level
  if (
    snake[0][0] > 14 ||
    snake[0][0] < 0 ||
    snake[0][1] > 14 ||
    snake[0][1] < 0
  ) {
    // setTimeout(() => {
    //   openMenu();
    // }, "500");
    return true;
  } else {
    const [snakeHead, ...snakeBody] = snake;
    for (let body of snakeBody) {
      if (body[0] === snakeHead[0] && body[1] === snakeHead[1]) {
        // setTimeout(() => {
        //   openMenu();
        // }, "700");
        location.assign("./");
        return true;
      }
    }
  }
  return false;
};

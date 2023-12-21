import {
  snake,
  drawSnakeHeadRight,
  drawSnakeHeadLeft,
  drawSnakeHeadTop,
  drawSnakeHeadBottom,
  drawSnakeTailRight,
  drawSnakeTailLeft,
  drawSnakeTailTop,
  drawSnakeTailBottom,
  gameOver,
} from "../index.js";

export let direction = "e";

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
    case "ArrowRight": {
      direction = "e";
      break;
    }
    case "q":
    case "a":
    case "ArrowLeft": {
      direction = "o";
      break;
    }
    case "z":
    case "w":
    case "ArrowUp": {
      direction = "n";
      break;
    }
    case "s":
    case "ArrowDown": {
      direction = "s";
      break;
    }
  }
});

export const snakePosition = () => {
  switch (direction) {
    case "e": {
      drawSnakeHeadRight();
      drawSnakeTailRight();
      break;
    }
    case "o": {
      drawSnakeHeadLeft();
      drawSnakeTailLeft();
      break;
    }
    case "n": {
      drawSnakeHeadTop();
      drawSnakeTailTop();
      break;
    }
    case "s": {
      drawSnakeHeadBottom();
      drawSnakeTailBottom();
      break;
    }
    default: {
      drawSnakeHeadRight();
      drawSnakeTailRight();
    }
  }
};

export const updateSnakePosition = () => {
  let snakeHead;
  let snakeTail;
  switch (direction) {
    case "e": {
      snakeHead = [snake[0][0] + 1, snake[0][1]];
      snakeTail = [snake[snake.length - 1][0] + 1, snake[snake.length - 1][1]];
      break;
    }
    case "o": {
      snakeHead = [snake[0][0] - 1, snake[0][1]];
      snakeTail = [snake[snake.length - 1][0] - 1, snake[snake.length - 1][1]];
      break;
    }
    case "n": {
      snakeHead = [snake[0][0], snake[0][1] - 1];
      snakeTail = [snake[snake.length - 1][0], snake[snake.length - 1][1] - 1];
      break;
    }
    case "s": {
      snakeHead = [snake[0][0], snake[0][1] + 1];
      snakeTail = [snake[snake.length - 1][0], snake[snake.length - 1][1] + 1];
      break;
    }
    default: {
    }
  }
  snake.unshift(snakeHead);
  snake.pop();

  return gameOver();
};

import {
  drawMap,
  snake,
  drawSnakeHeadRight,
  drawSnakeHeadLeft,
  drawSnakeHeadTop,
  drawSnakeHeadBottom,
  drawSnakeBody,
  drawSnakeTailRight,
  drawSnakeTailLeft,
  drawSnakeTailTop,
  drawSnakeTailBottom,
} from "../snake.js";

export let direction = "e";

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight": {
      direction = "e";
      break;
    }
    case "ArrowLeft": {
      direction = "o";
      break;
    }
    case "ArrowUp": {
      direction = "n";
      break;
    }
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

const updateSnakePosition = () => {
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
};

export const move = () => {
  updateSnakePosition();
  drawMap();
  snakePosition();
  drawSnakeBody();
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 1000);
};

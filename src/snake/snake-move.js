import {
  mapLands,
  snake,
  snakeMoltHeadRightDirection,
  snakeMoltHeadLeftDirection,
  snakeMoltHeadTopDirection,
  snakeMoltHeadBottomDirection,
  snakeMoltBody,
  snakeMoltTailRightDirection,
  snakeMoltTailLeftDirection,
  snakeMoltTailTopDirection,
  snakeMoltTailBottomDirection,
  fruit,
  fruitsAppear,
  generateFruit,
  header,
  menu,
} from "../index.js";

export const data = {
  number: 0,
  speed: 700, // 900 fast, 700 middle, 500 slow
};

export let direction = "east";
let snakeHead;
let snakeTail;
let dataNumber = data.number;
let dataSpeed = data.speed;
let eastAxe = true;
let westAxe;
let northAxe = true;
let southAxe = true;
// the four axes are to prevent the snake from eating itself in the opposite direction

// game touch start
window.addEventListener("keydown", (event) => {
  let keyDirection = event.key;
  if (
    (keyDirection === "ArrowRight" && eastAxe === true) ||
    (keyDirection === "d" && eastAxe === true) ||
    (keyDirection === "D" && eastEastAxe === true)
  ) {
    direction = "east";
    westAxe = false;
    setTimeout(() => {
      northAxe = true;
      southAxe = true;
    }, 200);
  } else if (
    (keyDirection === "ArrowLeft" && westAxe === true) ||
    (keyDirection === "q" && westAxe === true) ||
    (keyDirection === "a" && westAxe === true) ||
    (keyDirection === "Q" && westAxe === true) ||
    (keyDirection === "A" && westAxe === true)
  ) {
    direction = "west";
    eastAxe = false;
    setTimeout(() => {
      northAxe = true;
      southAxe = true;
    }, 200);
  } else if (
    (keyDirection === "ArrowUp" && northAxe === true) ||
    (keyDirection === "z" && northAxe === true) ||
    (keyDirection === "w" && northAxe === true) ||
    (keyDirection === "Z" && northAxe === true) ||
    (keyDirection === "W" && northAxe === true)
  ) {
    direction = "north";
    southAxe = false;
    setTimeout(() => {
      eastAxe = true;
      westAxe = true;
    }, 200);
  } else if (
    (keyDirection === "ArrowDown" && southAxe === true) ||
    (keyDirection === "s" && southAxe === true) ||
    (keyDirection === "S" && southAxe === true)
  ) {
    direction = "south";
    northAxe = false;
    setTimeout(() => {
      eastAxe = true;
      westAxe = true;
    }, 200);
  }
});
// game touch end

// game over start
const gameOver = () => {
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

  // normal and hard level :
  // game over if the snake clash with the border of the map
  if (
    snake[0][0] > 14 ||
    snake[0][0] < 0 ||
    snake[0][1] > 14 ||
    snake[0][1] < 0
  ) {
    setTimeout(() => {
      menu();
      // reset the data for a new game
      direction = "east";
      dataNumber = 0;
    }, 1000);

    return true;
  } else {
    // game over if the snake head clash with the snake body
    const [snakeHead, ...snakeBody] = snake;
    for (let body of snakeBody) {
      if (body[0] === snakeHead[0] && body[1] === snakeHead[1]) {
        setTimeout(() => {
          menu();
          // reset the data for a new game
          direction = "east";
          dataNumber = 0;
        }, 1000);
        return true;
      }
    }
  }
  return false;
};
// game over end

export const snakePosition = (dataNumber) => {
  switch (direction) {
    case "east": {
      snakeMoltHeadRightDirection(dataNumber);
      snakeMoltTailRightDirection(dataNumber);
      break;
    }
    case "west": {
      snakeMoltHeadLeftDirection(dataNumber);
      snakeMoltTailLeftDirection(dataNumber);
      break;
    }
    case "north": {
      snakeMoltHeadTopDirection(dataNumber);
      snakeMoltTailTopDirection(dataNumber);
      break;
    }
    case "south": {
      snakeMoltHeadBottomDirection(dataNumber);
      snakeMoltTailBottomDirection(dataNumber);
      break;
    }
  }
};

const updateSnakePosition = () => {
  switch (direction) {
    case "east": {
      snakeHead = [snake[0][0] + 1, snake[0][1]];
      snakeTail = [snake[snake.length - 1][0] + 1, snake[snake.length - 1][1]];
      break;
    }
    case "west": {
      snakeHead = [snake[0][0] - 1, snake[0][1]];
      snakeTail = [snake[snake.length - 1][0] - 1, snake[snake.length - 1][1]];
      break;
    }
    case "north": {
      snakeHead = [snake[0][0], snake[0][1] - 1];
      snakeTail = [snake[snake.length - 1][0], snake[snake.length - 1][1] - 1];
      break;
    }
    case "south": {
      snakeHead = [snake[0][0], snake[0][1] + 1];
      snakeTail = [snake[snake.length - 1][0], snake[snake.length - 1][1] + 1];
      break;
    }
  }
  // when the snake ate a fruit
  if (snakeHead[0] === fruit[0] && snakeHead[1] === fruit[1]) {
    dataNumber++;
    header(dataNumber);
    generateFruit();
  } else {
    snake.pop();
  }
  snake.unshift(snakeHead);
  return gameOver();
};

// game loop start
export const gameLoop = () => {
  if (!updateSnakePosition()) {
    mapLands(dataNumber);
    snakePosition(dataNumber);
    snakeMoltBody(dataNumber);
    fruitsAppear(dataNumber);
    gameOver();
    setTimeout(() => {
      requestAnimationFrame(gameLoop);
    }, 1000 - dataSpeed);
  }
};
// game loop end

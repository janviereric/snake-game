import {
  data,
  selectLand,
  selectEastDirectionHeadSnake,
  selectWestDirectionHeadSnake,
  selectNorthDirectionHeadSnake,
  selectSouthDirectionHeadSnake,
  bodySnake,
  selectEastDirectionTailSnake,
  selectWestDirectionTailSnake,
  selectNorthDirectionTailSnake,
  selectSouthDirectionTailSnake,
  selectFruit,
  generateFruit,
  header,
  selectSpeed,
  selectMode,
  menuHomeFruit,
} from "../index.js";

let snakeHead;
let snakeTail;
let eastAxe = true;
let westAxe;
let northAxe = true;
let southAxe = true;
// the four axes are to prevent the snake from eating itself in the opposite direction

// game touch start
window.addEventListener("keydown", (e) => {
  let keyDirection = e.key;
  if (
    (keyDirection === "ArrowRight" && eastAxe === true) ||
    (keyDirection === "d" && eastAxe === true) ||
    (keyDirection === "D" && eastEastAxe === true)
  ) {
    data.direction = "east";
  } else if (
    (keyDirection === "ArrowLeft" && westAxe === true) ||
    (keyDirection === "q" && westAxe === true) ||
    (keyDirection === "a" && westAxe === true) ||
    (keyDirection === "Q" && westAxe === true) ||
    (keyDirection === "A" && westAxe === true)
  ) {
    data.direction = "west";
  } else if (
    (keyDirection === "ArrowUp" && northAxe === true) ||
    (keyDirection === "z" && northAxe === true) ||
    (keyDirection === "w" && northAxe === true) ||
    (keyDirection === "Z" && northAxe === true) ||
    (keyDirection === "W" && northAxe === true)
  ) {
    data.direction = "north";
  } else if (
    (keyDirection === "ArrowDown" && southAxe === true) ||
    (keyDirection === "s" && southAxe === true) ||
    (keyDirection === "S" && southAxe === true)
  ) {
    data.direction = "south";
  }
});
// game touch end

export const snakePosition = () => {
  switch (data.direction) {
    case "east": {
      selectEastDirectionHeadSnake(`${data.snake}`);
      selectEastDirectionTailSnake(`${data.snake}`);
      break;
    }
    case "west": {
      selectWestDirectionHeadSnake(`${data.snake}`);
      selectWestDirectionTailSnake(`${data.snake}`);
      break;
    }
    case "north": {
      selectNorthDirectionHeadSnake(`${data.snake}`);
      selectNorthDirectionTailSnake(`${data.snake}`);
      break;
    }
    case "south": {
      selectSouthDirectionHeadSnake(`${data.snake}`);
      selectSouthDirectionTailSnake(`${data.snake}`);
      break;
    }
  }
};

const updateSnakePosition = () => {
  switch (data.direction) {
    case "east": {
      snakeHead = [data.xySnake[0][0] + 1, data.xySnake[0][1]];
      westAxe = false;
      northAxe = true;
      southAxe = true;
      snakeTail = [
        data.xySnake[data.xySnake.length - 1][0] + 1,
        data.xySnake[data.xySnake.length - 1][1],
      ];
      break;
    }
    case "west": {
      snakeHead = [data.xySnake[0][0] - 1, data.xySnake[0][1]];
      eastAxe = false;
      northAxe = true;
      southAxe = true;
      snakeTail = [
        data.xySnake[data.xySnake.length - 1][0] - 1,
        data.xySnake[data.xySnake.length - 1][1],
      ];
      break;
    }
    case "north": {
      snakeHead = [data.xySnake[0][0], data.xySnake[0][1] - 1];
      southAxe = false;
      eastAxe = true;
      westAxe = true;
      snakeTail = [
        data.xySnake[data.xySnake.length - 1][0],
        data.xySnake[data.xySnake.length - 1][1] - 1,
      ];
      break;
    }
    case "south": {
      snakeHead = [data.xySnake[0][0], data.xySnake[0][1] + 1];
      northAxe = false;
      eastAxe = true;
      westAxe = true;
      snakeTail = [
        data.xySnake[data.xySnake.length - 1][0],
        data.xySnake[data.xySnake.length - 1][1] + 1,
      ];
      break;
    }
  }
  // when the snake ate a fruit
  if (snakeHead[0] === data.xyFruit[0] && snakeHead[1] === data.xyFruit[1]) {
    data.number++;
    header(data.number);
    generateFruit();
    if (data.move === "scalable" && data.speed < 900) {
      data.speed += 4;
    } else if (data.speed > 900) {
      data.speed = 900;
    }
    console.log(data.speed);
  } else {
    data.xySnake.pop();
  }
  data.xySnake.unshift(snakeHead);
  return selectMode(data.mode);
};

// game loop start
export const gameLoop = () => {
  if (!updateSnakePosition()) {
    selectLand(data.land);
    snakePosition(data.snake);
    bodySnake(data.snake);
    selectFruit(data.fruit);
    selectSpeed(data.speed);
    selectMode(data.mode);
    menuHomeFruit(data.fruit, data.number); // allows to display in the game menu the update of the number of fruits ate after winning or losing the game
    setTimeout(() => {
      requestAnimationFrame(gameLoop);
    }, 1000 - data.speed);
  }
};
// game loop end

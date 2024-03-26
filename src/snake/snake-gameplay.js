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
  arrLevelSpeed,
  selectSpeed,
  menuHomeFruit,
} from "../index.js";

const imgBtnParamGray = document.querySelector("#img-btn-param-gray");
const imgBtnParamGreen = document.querySelector("#img-btn-param-green");
const menu = document.querySelector("#menu");
const menuPageHome = document.querySelector("#menu-home");
const menuPageParam = document.querySelector("#menu-param");
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
    data.direction = "west";
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
    data.direction = "north";
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
    data.direction = "south";
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
  // if (xySnake[0][0] > 14) {
  //   xySnake[0][0] = 0;
  // } else if (xySnake[0][0] < 0) {
  //   xySnake[0][0] = 14;
  // } else if (xySnake[0][1] > 14) {
  //   console.log(xySnake[0][1]);
  //   xySnakee[0][1] = 0;
  // } else if (xySnake[0][1] < 0) {
  //   console.log(xySnake[0][1]);
  //   xySnake[0][1] = 14;
  // } else {

  // normal and hard level :
  // game over if the snake clash with the border of the land
  if (
    data.xySnake[0][0] > 14 ||
    data.xySnake[0][0] < 0 ||
    data.xySnake[0][1] > 14 ||
    data.xySnake[0][1] < 0
  ) {
    setTimeout(() => {
      /* we do not invoke the menu function again so
      as not to refresh the options selection choices
      but rather we will return the display to the initial state */
      menu.style.display = "";
      menuPageHome.style.display = "";
      menuPageParam.style.display = "none";
      data.isMenuOpen = true; // the color of fruit on the land change after the press "Jouer"
      data.isBtnParamActive = false;
      imgBtnParamGray.style.display = "";
      imgBtnParamGreen.style.display = "none";
      // reset the data for a new game
      data.direction = "east";
      for (let i = 0; i < arrLevelSpeed.length; i++) {
        if (arrLevelSpeed[i].name === data.move) {
          data.speed = arrLevelSpeed[i].speed;
        }
      }
    }, 1000);
    return true;
  } else {
    // game over if the snake head clash with the snake body
    const [snakeHead, ...snakeBody] = data.xySnake;
    for (let body of snakeBody) {
      if (body[0] === snakeHead[0] && body[1] === snakeHead[1]) {
        setTimeout(() => {
          /* we do not invoke the menu function again so
          as not to refresh the options selection choices
          but rather we will return the display to the initial state */
          menu.style.display = "";
          menuPageHome.style.display = "";
          menuPageParam.style.display = "none";
          data.isMenuOpen = true; // the color of fruit on the land change after the press "Jouer"
          data.isBtnParamActive = false;
          imgBtnParamGray.style.display = "";
          imgBtnParamGreen.style.display = "none";
          // reset the data for a new game
          data.direction = "east";
          for (let i = 0; i < arrLevelSpeed.length; i++) {
            if (arrLevelSpeed[i].name === data.move) {
              data.speed = arrLevelSpeed[i].speed;
            }
          }
        }, 1000);
        return true;
      }
    }
  }
  return false;
};
// game over end

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
      snakeTail = [
        data.xySnake[data.xySnake.length - 1][0] + 1,
        data.xySnake[data.xySnake.length - 1][1],
      ];
      break;
    }
    case "west": {
      snakeHead = [data.xySnake[0][0] - 1, data.xySnake[0][1]];
      snakeTail = [
        data.xySnake[data.xySnake.length - 1][0] - 1,
        data.xySnake[data.xySnake.length - 1][1],
      ];
      break;
    }
    case "north": {
      snakeHead = [data.xySnake[0][0], data.xySnake[0][1] - 1];
      snakeTail = [
        data.xySnake[data.xySnake.length - 1][0],
        data.xySnake[data.xySnake.length - 1][1] - 1,
      ];
      break;
    }
    case "south": {
      snakeHead = [data.xySnake[0][0], data.xySnake[0][1] + 1];
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
  // return selectLevels();
  return gameOver();
};

// game loop start
export const gameLoop = () => {
  if (!updateSnakePosition()) {
    selectLand(data.land);
    snakePosition(data.snake);
    bodySnake(data.snake);
    selectFruit(data.fruit);
    selectSpeed(data.speed);
    menuHomeFruit(data.fruit, data.number); // allows to display in the game menu the update of the number of fruits ate after winning or losing the game
    gameOver();
    setTimeout(() => {
      requestAnimationFrame(gameLoop);
    }, 1000 - data.speed);
  }
};
// game loop end

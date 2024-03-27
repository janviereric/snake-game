import { data, arrLevelSpeed, header, generateFruit } from "../index.js";

export const selectMode = (mode) => {
  const imgBtnParamGray = document.querySelector("#img-btn-param-gray");
  const imgBtnParamGreen = document.querySelector("#img-btn-param-green");
  const menu = document.querySelector("#menu");
  const menuPageHome = document.querySelector("#menu-home");
  const menuPageParam = document.querySelector("#menu-param");

  if (mode === "close") {
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
            console.log(data.speed);
          }
        }
      }, 1000);
      return true;
    }
  } else if (mode === "open") {
    if (data.xySnake[0][0] > 14) {
      data.xySnake[0][0] = 0;
      // allows to eat the fruit at the edge of the border start
      if (
        data.xyFruit[0] === data.xySnake[0][0] &&
        data.xyFruit[1] === data.xySnake[0][1]
      ) {
        data.number++;
        header(data.number);
        generateFruit();
      }
      // allows to eat the fruit at the edge of the border end
    } else if (data.xySnake[0][0] < 0) {
      data.xySnake[0][0] = 14;
      // allows to eat the fruit at the edge of the border start
      if (
        data.xyFruit[0] === data.xySnake[0][0] &&
        data.xyFruit[1] === data.xySnake[0][1]
      ) {
        data.number++;
        header(data.number);
        generateFruit();
      }
      // allows to eat the fruit at the edge of the border end
    } else if (data.xySnake[0][1] > 14) {
      data.xySnake[0][1] = 0;
      // allows to eat the fruit at the edge of the border start
      if (
        data.xyFruit[1] === data.xySnake[0][1] &&
        data.xyFruit[0] === data.xySnake[0][0]
      ) {
        data.number++;
        header(data.number);
        generateFruit();
      }
      // allows to eat the fruit at the edge of the border end
    } else if (data.xySnake[0][1] < 0) {
      data.xySnake[0][1] = 14;
      // allows to eat the fruit at the edge of the border start
      if (
        data.xyFruit[1] === data.xySnake[0][1] &&
        data.xyFruit[0] === data.xySnake[0][0]
      ) {
        data.number++;
        header(data.number);
        generateFruit();
      }
      // allows to eat the fruit at the edge of the border end
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
                console.log(data.speed);
              }
            }
          }, 1000);
          return true;
        }
      }
      return false;
    }
  }
};

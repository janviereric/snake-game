import {
  data,
  arrImgFruit,
  arrImgSnake,
  arrImgLand,
  arrImgSpeed,
  arrImgMode,
  arrImgScreen,
  selectEastDirectionHeadSnake,
  selectEastDirectionTailSnake,
  bodySnake,
  selectLand,
  selectFruit,
  selectSpeed,
  selectMode,
  selectScreen,
  menuHomeFruit,
  menuHomeSpeed,
  menuHomeSnake,
  menuHomeMode,
  menuHomeScreen,
  menuHomeLand,
  menuDetailFruit,
  menuDetailSnake,
  menuDetailLand,
  menuDetailSpeed,
  menuDetailMode,
  menuDetailScreen,
} from "../index.js";

// container menu page param option start
// // effect scroll by grabbing start
let mouseDown = false;
let startX;
let scrollLeft;
const menuPageParam = document.querySelector("#menu-param");
const options = document.querySelectorAll(".options");
const optionFruit = document.querySelector("#option-fruit");
const optionSnake = document.querySelector("#option-snake");
const optionLand = document.querySelector("#option-land");
const optionSpeed = document.querySelector("#option-speed");
const optionMode = document.querySelector("#option-mode");
const optionScreen = document.querySelector("#option-screen");
const imgOptionFruit = document.querySelector("#img-option-fruit");
const imgOptionSnake = document.querySelector("#img-option-snake");
const imgOptionLand = document.querySelector("#img-option-land");
const imgOptionSpeed = document.querySelector("#img-option-speed");
const imgOptionMode = document.querySelector("#img-option-mode");
const imgOptionScreen = document.querySelector("#img-option-screen");

menuPageParam.style.display = "none";

export const scrollByGrabbing = () => {
  options.forEach((option) => {
    const draggingStart = (e) => {
      mouseDown = true;
      startX = e.pageX - option.offsetLeft;
      scrollLeft = option.scrollLeft;
    };

    const draggingStop = (e) => {
      e.stopPropagation();
      mouseDown = false;
    };

    const move = (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - option.offsetLeft;
      const scroll = x - startX;
      option.scrollLeft = scrollLeft - scroll;
    };

    option.addEventListener("mousemove", move, false);
    option.addEventListener("mousemove", move, false);
    option.addEventListener("mousedown", draggingStart, false);
    option.addEventListener("mouseup", draggingStop, false);
    option.addEventListener("mouseleave", draggingStop, false);
  });
};
// // effect scroll by grabbing end

// // effect scroll for selecting start
// // // option fruit start
export const displayFruit = () => {
  const fruits = arrImgFruit.map((fruit, i) => {
    return createFruit(fruit, i);
  });
  imgOptionFruit.append(...fruits);
  // // // // select a fruit by default
  fruits[0].style.opacity = "";
  // // // // select a fruit by scrolling
  optionFruit.addEventListener("scroll", (e) => {
    e.stopPropagation();
    for (let i = 0; i < fruits.length; i++) {
      const optionFruitRect = optionFruit.getBoundingClientRect();
      const fruitsRect = fruits[i].getBoundingClientRect();
      const positionFruit = fruitsRect.left - optionFruitRect.left;
      if (positionFruit >= 151 && positionFruit <= 190) {
        fruits[i].style.opacity = "";
        fruits[i].setAttribute("data-name", `${arrImgFruit[i].name}`);
        // // // // shows updated icons after changing option start
        menuHomeFruit(`${arrImgFruit[i].name}`, data.number);
        menuDetailFruit(`${arrImgFruit[i].name}`);
        // // // // shows updated icons after changing option end
      } else {
        fruits[i].style.opacity = "25%";
        fruits[i].setAttribute("data-name", "");
      }

      // // // // the fruit on the land change after to press "Jouer"
      if (fruits[i].dataset.name) {
        if (!data.isMenuOpen) {
          selectFruit(fruits[i].dataset.name);
        } else {
          data.fruit = fruits[i].dataset.name;
        }
      }
    }
  });
};

const createFruit = (fruit) => {
  const imgFruit = document.createElement("img");
  imgFruit.setAttribute("src", `${fruit.src}`);
  imgFruit.setAttribute("alt", `${fruit.alt}`);
  imgFruit.setAttribute("height", `${fruit.height}`);
  imgFruit.style.transform = "scale(0.7)";
  imgFruit.style.opacity = "25%";
  return imgFruit;
};
// // // option fruit end

// // // option snake start
export const displaySnake = () => {
  const snakes = arrImgSnake.map((snake, i) => {
    return createSnake(snake, i);
  });
  imgOptionSnake.append(...snakes);
  // // // // select a color by default
  snakes[0].style.opacity = "";
  // // // // select a color by scrolling
  optionSnake.addEventListener("scroll", (e) => {
    e.stopPropagation();
    for (let i = 0; i < snakes.length; i++) {
      const optionSnakeRect = optionSnake.getBoundingClientRect();
      const snakesRect = snakes[i].getBoundingClientRect();
      const positionSnake = snakesRect.left - optionSnakeRect.left;
      if (positionSnake >= 151 && positionSnake <= 190) {
        snakes[i].style.opacity = "";
        snakes[i].setAttribute("data-name", `${arrImgSnake[i].name}`);
        // // // // shows updated icons after changing option start
        menuHomeSnake(`${arrImgSnake[i].name}`);
        menuDetailSnake(`${arrImgSnake[i].name}`);
        // // // // shows updated icons after changing option end
      } else {
        snakes[i].style.opacity = "25%";
        snakes[i].setAttribute("data-name", "");
      }

      // // // // the color of snake on the land change after to press "Jouer"
      if (snakes[i].dataset.name) {
        if (!data.isMenuOpen) {
          selectEastDirectionHeadSnake(snakes[i].dataset.name);
          bodySnake(snakes[i].dataset.color);
          selectEastDirectionTailSnake(snakes[i].dataset.name);
        } else {
          data.snake = snakes[i].dataset.name;
        }
      }
    }
  });
};

const createSnake = (snake) => {
  const imgSnake = document.createElement("img");
  imgSnake.setAttribute("src", `${snake.src}`);
  imgSnake.setAttribute("alt", `${snake.alt}`);
  imgSnake.setAttribute("height", `${snake.height}`);
  imgSnake.style.transform = "scale(0.8)";
  imgSnake.style.opacity = "25%";
  return imgSnake;
};
// // // option snake end

// // // option land start
export const displayLand = () => {
  const lands = arrImgLand.map((land, i) => {
    return createLand(land, i);
  });
  imgOptionLand.append(...lands);
  // // // // select a color by default
  lands[0].style.opacity = "";
  // // // // select a color by scrolling
  optionLand.addEventListener("scroll", (e) => {
    e.stopPropagation();
    for (let i = 0; i < lands.length; i++) {
      const optionLandRect = optionLand.getBoundingClientRect();
      const landsRect = lands[i].getBoundingClientRect();
      const positionLand = landsRect.left - optionLandRect.left;
      if (positionLand >= 150 && positionLand <= 190) {
        lands[i].style.opacity = "";
        lands[i].setAttribute("data-name", `${arrImgLand[i].name}`);
        // // // // shows updated icons after changing option start
        menuHomeLand(`${arrImgLand[i].name}`);
        menuDetailLand(`${arrImgLand[i].name}`);
        // // // // shows updated icons after changing option end
      } else {
        lands[i].style.opacity = "25%";
        lands[i].setAttribute("data-name", "");
      }

      // // // // the color of land land change after to press "Jouer"
      if (lands[i].dataset.name) {
        if (!data.isMenuOpen) {
          selectLand(lands[i].dataset.name);
        } else {
          data.land = lands[i].dataset.name;
        }
      }
    }
  });
};

const createLand = (land) => {
  const imgLand = document.createElement("img");
  imgLand.setAttribute("src", `${land.src}`);
  imgLand.setAttribute("alt", `${land.alt}`);
  imgLand.setAttribute("height", `${land.height}`);
  imgLand.setAttribute("width", `${land.width}`);
  imgLand.style.transform = "scale(0.8)";
  imgLand.style.marginRight = "5px";
  imgLand.style.opacity = "25%";
  return imgLand;
};
// // // option land end

// // // option speed start
export const displaySpeed = () => {
  const speeds = arrImgSpeed.map((speed, i) => {
    return createSpeed(speed, i);
  });
  imgOptionSpeed.append(...speeds);
  // // // // select a speed by default
  speeds[0].style.opacity = "";
  // // // // select a speed by scrolling
  optionSpeed.addEventListener("scroll", (e) => {
    e.stopPropagation();
    for (let i = 0; i < speeds.length; i++) {
      const optionSpeedRect = optionSpeed.getBoundingClientRect();
      const speedsRect = speeds[i].getBoundingClientRect();
      const positionSpeed = speedsRect.left - optionSpeedRect.left;
      if (positionSpeed >= 152 && positionSpeed <= 190) {
        speeds[i].style.opacity = "";
        speeds[i].setAttribute("data-name", `${arrImgSpeed[i].name}`);
        // // // // shows updated icons after changing option start
        menuHomeSpeed(`${arrImgSpeed[i].name}`);
        menuDetailSpeed(`${arrImgSpeed[i].name}`);
        // // // // shows updated icons after changing option end
      } else {
        speeds[i].style.opacity = "25%";
        speeds[i].setAttribute("data-name", "");
      }

      // // // // the speed of game is apply after to press "Jouer"
      if (speeds[i].dataset.name) {
        if (!data.isMenuOpen) {
          selectSpeed(speeds[i].dataset.name);
        } else {
          data.speed = speeds[i].dataset.name;
        }
      }
    }
  });
};

const createSpeed = (speed) => {
  const imgSpeed = document.createElement("img");
  imgSpeed.setAttribute("src", `${speed.src}`);
  imgSpeed.setAttribute("alt", `${speed.alt}`);
  imgSpeed.setAttribute("height", `${speed.height}`);
  imgSpeed.setAttribute("width", `${speed.width}`);
  imgSpeed.style.transform = "scale(0.7)";
  imgSpeed.style.marginLeft = "-1px";
  imgSpeed.style.opacity = "25%";
  return imgSpeed;
};
// // // option speed end

// // // option mode start
export const displayMode = () => {
  const modes = arrImgMode.map((mode, i) => {
    return createMode(mode, i);
  });
  imgOptionMode.append(...modes);
  // // // // select a speed by default
  modes[0].style.opacity = "";
  // // // // select a speed by scrolling
  optionMode.addEventListener("scroll", (e) => {
    e.stopPropagation();
    for (let i = 0; i < modes.length; i++) {
      const optionModeRect = optionMode.getBoundingClientRect();
      const modesRect = modes[i].getBoundingClientRect();
      const positionMode = modesRect.left - optionModeRect.left;
      if (positionMode >= 153 && positionMode <= 190) {
        modes[i].style.opacity = "";
        modes[i].setAttribute("data-name", `${arrImgMode[i].name}`);
        // // // // shows updated icons after changing option start
        menuHomeMode(`${arrImgMode[i].name}`);
        menuDetailMode(`${arrImgMode[i].name}`);
        // // // // shows updated icons after changing option end
      } else {
        modes[i].style.opacity = "25%";
        modes[i].setAttribute("data-name", "");
      }

      // // // // the speed of game is apply after to press "Jouer"
      if (modes[i].dataset.name) {
        if (!data.isMenuOpen) {
          selectMode(modes[i].dataset.name);
        } else {
          data.mode = modes[i].dataset.name;
        }
      }
    }
  });
};

const createMode = (mode) => {
  const imgMode = document.createElement("img");
  imgMode.setAttribute("src", `${mode.src}`);
  imgMode.setAttribute("alt", `${mode.alt}`);
  imgMode.setAttribute("height", `${mode.height}`);
  imgMode.setAttribute("width", `${mode.width}`);
  imgMode.style.transform = "scale(0.8)";
  imgMode.style.marginLeft = "-2px";
  imgMode.style.opacity = "25%";
  return imgMode;
};
// // // option mode end

// // // option screen start
export const displayScreen = () => {
  const screens = arrImgScreen.map((screen, i) => {
    return createScreen(screen, i);
  });
  imgOptionScreen.append(...screens);
  // // // // select a speed by default
  screens[0].style.opacity = "";
  // // // // select a speed by scrolling
  optionScreen.addEventListener("scroll", (e) => {
    e.stopPropagation();
    for (let i = 0; i < screens.length; i++) {
      const optionScreenRect = optionScreen.getBoundingClientRect();
      const screensRect = screens[i].getBoundingClientRect();
      const positionScreen = screensRect.left - optionScreenRect.left;
      if (positionScreen >= 154 && positionScreen <= 190) {
        screens[i].style.opacity = "";
        screens[i].setAttribute("data-name", `${arrImgScreen[i].name}`);
        // // // // shows updated icons after changing option start
        menuHomeScreen(arrImgScreen[i].name);
        menuDetailScreen(arrImgScreen[i].name);
        // // // // shows updated icons after changing option end
      } else {
        screens[i].style.opacity = "25%";
        screens[i].setAttribute("data-name", "");
      }

      // // // // the speed of game is apply after to press "Jouer"
      if (screens[i].dataset.name) {
        if (!data.isMenuOpen) {
          selectScreen(screens[i].dataset.name);
        } else {
          data.screen = screens[i].dataset.name;
        }
      }
    }
  });
};

const createScreen = (screen) => {
  const imgScreen = document.createElement("img");
  imgScreen.setAttribute("src", `${screen.src}`);
  imgScreen.setAttribute("alt", `${screen.alt}`);
  imgScreen.setAttribute("height", `${screen.height}`);
  imgScreen.setAttribute("width", `${screen.width}`);
  imgScreen.style.transform = "scale(0.7)";
  imgScreen.style.marginLeft = "-3px";
  imgScreen.style.opacity = "25%";
  return imgScreen;
};
// // // option screen end
// // effect scroll for selecting end
// container menu page param option end

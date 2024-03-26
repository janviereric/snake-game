import {
  arrImgFruit,
  arrImgSpeed,
  arrImgSnake,
  arrImgMode,
  arrImgScreen,
  arrImgLand,
} from "../index.js";

// menu home fruit start
export const menuHomeFruit = (name, number) => {
  const numberHomeFruit = document.querySelector("#number-home-fruit");
  const imgHomeFruit = document.querySelector("#img-home-fruit");
  numberHomeFruit.innerHTML = `${number ? number : 0}`;
  // // allows to display the specific icon
  arrImgFruit.forEach((fruit, i) => {
    if (fruit.name === name) {
      imgHomeFruit.innerHTML = `<img src="${arrImgFruit[i].src}" alt="${arrImgFruit[i].alt}" />`;
      const imgFruit = imgHomeFruit.querySelector("img");
      imgFruit.setAttribute("height", `${arrImgFruit[i].height}`);
      imgFruit.setAttribute("width", `${arrImgFruit[i].width}`);
    }
  });
};
// menu home fruit end

// menu home speed start
export const menuHomeSpeed = (name) => {
  const imgHomeSpeed = document.querySelector("#img-home-speed");
  // // allows to display the specific icon
  arrImgSpeed.forEach((speed, i) => {
    if (speed.name === name) {
      imgHomeSpeed.innerHTML = `<img src="${arrImgSpeed[i].src}" alt="${arrImgSpeed[i].alt}" />`;
      const imgSpeed = imgHomeSpeed.querySelector("img");
      imgSpeed.setAttribute("height", `${arrImgSpeed[i].height}`);
      imgSpeed.setAttribute("width", `${arrImgSpeed[i].width}`);
    }
  });
};
// menu home speed end

// menu home snake start
export const menuHomeSnake = (name) => {
  const imgHomeSnake = document.querySelector("#img-home-snake");
  // // allows to display the specific icon
  arrImgSnake.forEach((snake, i) => {
    if (snake.name === name) {
      imgHomeSnake.innerHTML = `<img src="${arrImgSnake[i].src}" alt="${arrImgSnake[i].alt}" />`;
      const imgSnake = imgHomeSnake.querySelector("img");
      imgSnake.setAttribute("height", "230px");
      imgSnake.setAttribute("width", "230px");
    }
  });
};
// menu home snake end

// menu home mode start
export const menuHomeMode = (name) => {
  const imgHomeMode = document.querySelector("#img-home-mode");
  // // allows to display the specific icon
  arrImgMode.forEach((mode, i) => {
    if (mode.name === name) {
      imgHomeMode.innerHTML = `<img src="${arrImgMode[i].src}" alt="${arrImgMode[i].alt}" />`;
      const imgMode = imgHomeMode.querySelector("img");
      imgMode.setAttribute("height", `${arrImgMode[i].height}`);
      imgMode.setAttribute("width", `${arrImgMode[i].width}`);
    }
  });
};
// menu home mode end

// menu home screen start
export const menuHomeScreen = (name) => {
  const imgHomeScreen = document.querySelector("#img-home-screen");
  // // allows to display the specific icon
  arrImgScreen.forEach((screen, i) => {
    if (screen.name === name) {
      imgHomeScreen.innerHTML = `<img src="${arrImgScreen[i].src}" alt="${arrImgScreen[i].alt}" />`;
      const imgScreen = imgHomeScreen.querySelector("img");
      imgScreen.setAttribute("height", `${arrImgScreen[i].height}`);
      imgScreen.setAttribute("width", `${arrImgScreen[i].height}`);
    }
  });
};
// menu home screen end

// menu home land start
export const menuHomeLand = (name) => {
  const homeLand = document.querySelector("#home-land");
  homeLand.innerHTML = `<canvas width="310px" height="52px"></canvas>`;
  const canvas = homeLand.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const grid = 18.3;

  const drawHomeLand = (colorLightLand, colorDarkLand, colorBorderLand) => {
    ctx.beginPath();
    for (let i = 1; i <= 17; i++) {
      for (let j = 1; j <= 17; j++) {
        ctx.fillStyle = (i + j) % 2 === 0 ? colorLightLand : colorDarkLand;
        ctx.fillRect(grid * (i - 1), grid * (j - 1), 310, 52);
      }
    }
    canvas.style.setProperty("border", `5px solid ${colorBorderLand}`);
    canvas.style.borderRadius = "0 0 5px 5px";
    canvas.style.marginBottom = "-4px";
    ctx.closePath();
  };

  arrImgLand.forEach((land, i) => {
    if (land.name === name) {
      drawHomeLand(
        arrImgLand[i].colorLightLand,
        arrImgLand[i].colorDarkLand,
        arrImgLand[i].colorBorderLand
      );
    }
  });
};
// menu home land end

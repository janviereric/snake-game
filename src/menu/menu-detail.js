import {
  arrImgFruit,
  arrImgSnake,
  arrImgLand,
  arrImgSpeed,
  arrImgMode,
  arrImgScreen,
} from "../index.js";

// menu param detail fruit start
export const menuDetailFruit = (name) => {
  const imgDetailFruit = document.querySelector("#img-detail-fruit");
  const txtDetailFruit = document.querySelector("#txt-detail-fruit");
  // // allows to display the specific icon
  arrImgFruit.forEach((fruit, i) => {
    if (fruit.name === name) {
      imgDetailFruit.innerHTML = `<img src="${arrImgFruit[i].src}" alt="${arrImgFruit[i].alt}" />`;
      const imgFruit = imgDetailFruit.querySelector("img");
      imgFruit.setAttribute("height", `${arrImgFruit[i].height}`);
      imgFruit.setAttribute("width", `${arrImgFruit[i].width}`);
      imgFruit.style.transform = "scale(0.7)";
      imgFruit.style.marginLeft = "9.5px";
      imgFruit.style.marginRight = "0.5px";
      txtDetailFruit.innerHTML = `Choix du fruit. ${arrImgFruit[i].txt}`;
    }
  });
};
// menu param detail fruit end

// menu param detail snake start
export const menuDetailSnake = (name) => {
  const imgDetailSnake = document.querySelector("#img-detail-snake");
  const txtDetailSnake = document.querySelector("#txt-detail-snake");
  // // allows to display the specific icon
  arrImgSnake.forEach((snake, i) => {
    if (snake.name === name) {
      imgDetailSnake.innerHTML = `<img src="${arrImgSnake[i].src}" alt="${arrImgSnake[i].alt}" />`;
      const imgSnake = imgDetailSnake.querySelector("img");
      imgSnake.setAttribute("height", `${arrImgSnake[i].height}`);
      imgSnake.setAttribute("width", `${arrImgSnake[i].width}`);
      imgSnake.style.transform = "scale(0.8)";
      imgSnake.style.marginLeft = "8px";
      imgSnake.style.marginRight = "2px";
      txtDetailSnake.innerHTML = `Choix de la couleur du serpent. ${arrImgSnake[i].txt}`;
    }
  });
};
// menu param detail snake end

// menu param detail land start
export const menuDetailLand = (name) => {
  const imgDetailLand = document.querySelector("#img-detail-land");
  const txtDetailLand = document.querySelector("#txt-detail-land");
  // // allows to display the specific icon
  arrImgLand.forEach((land, i) => {
    if (land.name === name) {
      imgDetailLand.innerHTML = `<img src="${arrImgLand[i].src}" alt="${arrImgLand[i].alt}" />`;
      const imgLand = imgDetailLand.querySelector("img");
      imgLand.setAttribute("height", `${arrImgLand[i].height}`);
      imgLand.setAttribute("width", `${arrImgLand[i].width}`);
      imgLand.style.transform = "scale(0.8)";
      imgLand.style.marginLeft = "11px";
      imgLand.style.marginRight = "4px";
      txtDetailLand.innerHTML = `Choix du terrain. ${arrImgLand[i].txt}`;
    }
  });
};
// menu param detail land end

// menu param detail speed start
export const menuDetailSpeed = (name) => {
  const imgDetailSpeed = document.querySelector("#img-detail-speed");
  const txtDetailSpeed = document.querySelector("#txt-detail-speed");
  // // allows to display the specific icon
  arrImgSpeed.forEach((speed, i) => {
    if (speed.name === name) {
      imgDetailSpeed.innerHTML = `<img src="${arrImgSpeed[i].src}" alt="${arrImgSpeed[i].alt}" />`;
      const imgSpeed = imgDetailSpeed.querySelector("img");
      imgSpeed.setAttribute("height", `${arrImgSpeed[i].height}`);
      imgSpeed.setAttribute("width", `${arrImgSpeed[i].width}`);
      imgSpeed.style.transform = "scale(0.7)";
      imgSpeed.style.marginLeft = "9px";
      imgSpeed.style.marginRight = "1px";
      txtDetailSpeed.innerHTML = `Choix de la vitesse. ${arrImgSpeed[i].txt}`;
    }
  });
};
// menu param detail speed end

// menu param detail mode start
export const menuDetailMode = (name) => {
  const imgDetailMode = document.querySelector("#img-detail-mode");
  const txtDetailMode = document.querySelector("#txt-detail-mode");
  // // allows to display the specific icon
  arrImgMode.forEach((mode, i) => {
    if (mode.name === name) {
      imgDetailMode.innerHTML = `<img src="${arrImgMode[i].src}" alt="${arrImgMode[i].alt}" />`;
      const imgMode = imgDetailMode.querySelector("img");
      imgMode.setAttribute("height", `${arrImgMode[i].height}`);
      imgMode.setAttribute("width", `${arrImgMode[i].width}`);
      imgMode.style.transform = "scale(0.8)";
      imgMode.style.marginLeft = "11px";
      imgMode.style.marginRight = "-1px";
      txtDetailMode.innerHTML = `Choix du mode de jeu. ${arrImgMode[i].txt}`;
    }
  });
};
// menu param detail mode end

// menu param detail screen start
export const menuDetailScreen = (name) => {
  const imgDetailScreen = document.querySelector("#img-detail-screen");
  const txtDetailScreen = document.querySelector("#txt-detail-screen");
  // // allows to display the specific icon
  arrImgScreen.forEach((screen, i) => {
    if (screen.name === name) {
      imgDetailScreen.innerHTML = `<img src="${arrImgScreen[i].src}" alt="${arrImgScreen[i].alt}" />`;
      const imgScreen = imgDetailScreen.querySelector("img");
      imgScreen.setAttribute("height", `${arrImgScreen[i].height}`);
      imgScreen.setAttribute("width", `${arrImgScreen[i].width}`);
      imgScreen.style.transform = "scale(0.7)";
      imgScreen.style.marginLeft = "9px";
      imgScreen.style.marginRight = "1px";
      txtDetailScreen.innerHTML = `Choix de la taille de l'écran. ${arrImgScreen[i].txt}`;
    }
  });
};
// menu param detail screen end

import {
  landMaps,
  snakePosition,
  drawSnakeBody,
  fruitsAppear,
  gameLoop,
} from "../../index.js";

const body = document.querySelector("body");
const containerMenu = document.querySelector("#container-menu");
let calc;
let menu;
let gameStart = false;

// draw the snake game when we start
if (!gameStart) {
  landMaps();
  snakePosition();
  drawSnakeBody();
  fruitsAppear();
}

const createCalc = () => {
  calc = document.createElement("div");
  calc.classList.add("calc");
  calc.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

const createMenu = () => {
  body.classList.add("remove-scrolling");
  menu = document.createElement("div");
  menu.classList.add("menu");
  menu.innerHTML = `
  <div class="menu-home">
    <div class="menu-image"> 
      <img src="./assets/images/janviereric.jpg" alt="JanvierEric" />
    </div>
    <div class="menu-buttons">
      <button class="button button-play"> ▷ Jouer </button>
      <div class="button-params">
        <img src="./assets/images/button-params.jpg" alt="button params" />
      </div>
    </div>
  </div>
  `;

  const buttonPlay = menu.querySelector(".button-play");
  buttonPlay.addEventListener("click", (event) => {
    event.stopPropagation();
    containerMenu.classList.add("off");
    gameStart = !gameStart;
    requestAnimationFrame(gameLoop);
  });
};

// menu is open when we start
createCalc();
createMenu();
calc.append(menu);
containerMenu.append(calc);

// open the menu anywhere
export const openMenu = () => {
  containerMenu.classList.remove("off");
  calc.append(menu);
  containerMenu.append(calc);
};

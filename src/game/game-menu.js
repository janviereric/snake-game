import { gameLoop } from "../index.js";

const containerMenu = document.querySelector("#container-menu");
const containerPlay = document.querySelector("#container-play");
let startGame = false;

containerMenu.innerHTML = `<button class="button button-play"> Jouer </button>`;

const buttonPlay = containerMenu.querySelector(".button-play");
buttonPlay.addEventListener("click", (event) => {
  event.stopPropagation();
  containerMenu.classList.add("off");
  containerPlay.classList.remove("off");
  if (!startGame) {
    startGame = true;
    requestAnimationFrame(gameLoop);
  }
});

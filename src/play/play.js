// this file is the menu specifik for the play.html
import "../assets/css/imports.css";

import {
  gameLoop,
  landMaps,
  fruitsAppear,
  snakePosition,
  drawSnakeBody,
  footer,
} from "../assets/javascripts/exports.js";
import janviereric from "/assets/images/janviereric.jpg";
import buttonparams from "/assets/images/button-params.jpg";
import keyboardkey from "/assets/images/keyboard-key.jpg";

const containerMenu = document.querySelector("#container-menu");
const menuImage = containerMenu.querySelector("#menu-image");
const buttonPlay = containerMenu.querySelector("#button-play");
const buttonParams = containerMenu.querySelector("#button-params");
const containerKeyboardKey = document.querySelector("#container-keyboard-key");

menuImage.innerHTML = `<img src="${janviereric}" alt="Janvier Eric"/>`;
buttonParams.innerHTML = `<img src="${buttonparams}" alt="button paramètre"/>`;
containerKeyboardKey.innerHTML = `<img src="${keyboardkey}" alt="touche clavier" />`;

let isMenuOpen = false;
let isGamePlay = true;
let keyPress = false;

// button play start
buttonPlay.addEventListener("click", (event) => {
  event.stopPropagation();
  // don't show the menu game
  isMenuOpen = !isMenuOpen;
  containerMenu.classList.add("off");
  // show the keyboard key image after press the play button
  containerKeyboardKey.classList.remove("off");
  location.assign("/game/game.html");
});
// button play end

// keyboard key press to remove the image and the game start
const gameStart = () => {
  if (!isMenuOpen && isGamePlay) {
    if (containerKeyboardKey) {
      containerKeyboardKey.classList.remove("off");
    }
    window.addEventListener(
      "keydown",
      (event) => {
        keyPress = event.key;
        switch (keyPress) {
          case "KeyZ":
          case "KeyW":
          case "ArrowUp":
          case "KeyS":
          case "ArrowDown":
          case "KeyD":
          case "ArrowRight": {
            event.stopPropagation();
            containerKeyboardKey.classList.add("off");
            requestAnimationFrame(gameLoop);
            break;
          }
          default: {
            event.stopPropagation();
            keyPress = "KeyD";
            containerKeyboardKey.classList.add("off");
            requestAnimationFrame(gameLoop);
            break;
          }
        }
      },
      { once: true }
    );
  }
};
gameStart();

// don't show the keyboard key image before press the play button
if (isMenuOpen) {
  containerKeyboardKey.classList.add("off");
}

// draw the game before started
landMaps();
fruitsAppear();
snakePosition();
drawSnakeBody();

// layout
footer();

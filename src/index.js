// this file is the menu specifik for the index.html
import "./assets/css/imports.css";

import {
  landMaps,
  snakePosition,
  drawSnakeBody,
  fruitsAppear,
  footer,
} from "./assets/javascripts/exports.js";
import janviereric from "/assets/images/janviereric.jpg";
import buttonparams from "/assets/images/button-params.jpg";

const containerMenu = document.querySelector("#container-menu");
const menuImage = containerMenu.querySelector("#menu-image");
const buttonIndex = containerMenu.querySelector("#button-index");
const buttonParams = containerMenu.querySelector("#button-params");

menuImage.innerHTML = `<img src="${janviereric}" alt="Janvier Eric"/>`;
buttonParams.innerHTML = `<img src="${buttonparams}" alt="button paramètre"/>`;

// buttonIndex start
if (buttonIndex) {
  buttonIndex.addEventListener("click", (event) => {
    event.stopPropagation();
    location.assign("/game/game.html");
  });
}
// buttonIndex end

// draw the game before started
landMaps();
fruitsAppear();
snakePosition();
drawSnakeBody();

// layout
footer();

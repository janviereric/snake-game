import {
  gameLoop,
  snake,
  header,
  mapLands,
  fruitsAppear,
  snakePosition,
  snakeMoltBody,
  fruit,
  snakeMoltTailRightDirection,
  snakeMoltHeadRightDirection,
  drawSnakeBody,
} from "../../index.js";

import janviereric from "../images/janviereric.jpg";
import buttonparams from "../images/button-params.jpg";
import keyboardkey from "../images/keyboard-key.jpg";

export const menu = () => {
  const menu = document.querySelector("#menu");
  menu.innerHTML = `
<div id="container-menu">
  <div class="calc">
    <div class="menu-content">
      <div class="menu-home">
        <div id="menu-image"></div>
        <div class="menu-buttons">
          <button id="button-play" class="button-primary">▷ Jouer</button>
          <div id="button-home" class="button-secondary">
            <i class="fa-solid fa-house"></i>
          </div>
          <div id="button-params" class="button-tertiary"></div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

  const containerMenu = document.querySelector("#container-menu");
  const menuImage = containerMenu.querySelector("#menu-image");
  const buttonPlay = containerMenu.querySelector("#button-play");
  const buttonParams = containerMenu.querySelector("#button-params");
  const containerKeyboardKey = document.querySelector(
    "#container-keyboard-key"
  );

  menuImage.innerHTML = `<img src="${janviereric}" alt="Janvier Eric"/>`;
  buttonParams.innerHTML = `<img src="${buttonparams}" alt="button paramètre"/>`;
  containerKeyboardKey.innerHTML = `<img src="${keyboardkey}" alt="touche clavier" />`;

  let isMenuOpen = true;
  let isGamePlay = false;
  let keyPress = false;

  // button play start
  if (buttonPlay) {
    buttonPlay.addEventListener("click", (event) => {
      event.stopPropagation();

      // don't show the menu game start
      isMenuOpen = !isMenuOpen;
      containerMenu.style.display = "none";
      // don't show the menu game end

      // show the keyboard key image after press "Jouer" start
      isGamePlay = !isGamePlay;
      containerKeyboardKey.style.display = "";
      // show the keyboard key image after press "Jouer" end

      // rest the game each time we press "Jouer" start
      snake[0][0] = 2;
      snake[0][1] = 7;
      snake[1][0] = 1;
      snake[1][1] = 7;
      snake[2][0] = 0;
      snake[2][1] = 7;
      snake.splice(3, 100); // delete 100, start index 3
      fruit[0] = 12;
      fruit[1] = 7;
      header();
      mapLands();
      fruitsAppear();
      snakePosition();
      snakeMoltTailRightDirection();
      snakeMoltHeadRightDirection();
      drawSnakeBody();
      snakeMoltBody();
      // rest the game each time we press "Jouer" end
      // button play end

      // keyboard key press to remove the image and the game start
      const gameStart = () => {
        if (!isMenuOpen && isGamePlay) {
          if (containerKeyboardKey) {
            containerKeyboardKey.style.display = "";
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
                  containerKeyboardKey.style.display = "none";
                  requestAnimationFrame(gameLoop);
                  break;
                }
                default: {
                  event.stopPropagation();
                  keyPress = "KeyD";
                  containerKeyboardKey.style.display = "none";
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
    });
  }
  // don't show the keyboard key image before press the play button
  if (isMenuOpen) {
    containerKeyboardKey.style.display = "none";
  }
};

import {
  landMaps,
  drawSnakeBody,
  snakePosition,
  fruitsAppear,
  gameLoop,
} from "../../index.js";
import janviereric from "/assets/images/janviereric.jpg";
import buttonparams from "/assets/images/button-params.jpg";
import keyboardkey from "/assets/images/keyboard-key.jpg";

const containerMenu = document.querySelector("#container-menu");
containerMenu.innerHTML = `
<div class="calc">
  <div class="menu">
    <div class="menu-home">
      <div class="menu-image">
        <img src="/assets/images/janviereric.jpg" alt="Janvier Eric" />
      </div>
      <div class="menu-buttons">
        <button class="button button-play">▷ Jouer</button>
        <div class="button-params">
          <img src="/assets/images/buttonparams.jpg" alt="button params"/>
        </div>          
      </div>          
    </div>          
  </div>            
</div>                  
`;
containerMenu.querySelector(".menu-image > img").src = janviereric;
containerMenu.querySelector(".button-params > img").src = buttonparams;

const buttonPlay = containerMenu.querySelector(".button-play");

const containerKeyboardKey = document.querySelector("#container-keyboard-key");
containerKeyboardKey.innerHTML = `<img src="/assets/images/keyboardkey.jpg" alt="Touche du clavier" />`;
containerKeyboardKey.querySelector("img").src = keyboardkey;

let isMenuOpen = true;
let isGamePlay;
let keyPress = false;

// open the menu anywhere
export const openMenu = () => {
  containerMenu.classList.remove("off");
};

// button play start
const gamePlay = (isGamePlay) => {
  buttonPlay.addEventListener("click", (event) => {
    event.stopPropagation();
    // don't show the menu game
    isMenuOpen = !isMenuOpen;
    containerMenu.classList.add("off");
    // show the keyboard key image after press the play button
    containerKeyboardKey.classList.remove("off");
    gameStart();
  });
  return isGamePlay;
};
isGamePlay = gamePlay(true);
// button play end

// keyboard key press to remove the image and the game start
const gameStart = () => {
  if (!isMenuOpen && isGamePlay) {
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

// don't show the keyboard key image before press the play button
if (isMenuOpen) {
  containerKeyboardKey.classList.add("off");
}

// draw the game before started
landMaps();
fruitsAppear();
snakePosition();
drawSnakeBody();

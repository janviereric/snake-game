import {
  data,
  header,
  selectLand,
  snakePosition,
  selectEastDirectionHeadSnake,
  selectEastDirectionTailSnake,
  drawBodySnake,
  gameLoop,
  scrollByGrabbing,
  menuParam,
  menuHomeFruit,
  menuHomeSpeed,
  menuHomeSnake,
  menuHomeMode,
  menuHomeScreen,
  menuHomeLand,
  menuDetailFruit,
  menuDetailSpeed,
  menuDetailSnake,
  menuDetailMode,
  menuDetailScreen,
  menuDetailLand,
  displayFruit,
  displaySnake,
  displayLand,
  displaySpeed,
  displayMode,
  displayScreen,
  menuRule,
  menuCommand,
} from "../index.js";

const menuContent = document.querySelector("#menu");
const containerKeyboardKey = document.querySelector("#container-keyboard-key");
const imgBtnParamGray = document.querySelector("#img-btn-param-gray");
const imgBtnParamGreen = document.querySelector("#img-btn-param-green");
const menuPageHome = document.querySelector("#menu-home");
const menuPageParam = document.querySelector("#menu-param");

containerKeyboardKey.style.display = "none";
imgBtnParamGreen.style.display = "none";

// btn next start
const btnNext = () => {
  const btnNext = document.querySelector("#btn-next");
  btnNext.addEventListener("click", (e) => {
    e.stopPropagation();
    imgBtnParamGray.style.display = "none";
    imgBtnParamGreen.style.display = "";
    menuPageHome.style.display = "none";
    menuPageParam.style.display = "";
    data.isBtnParamActive = true;
  });
};
// btn next end

// btn back start
const btnBack = () => {
  const btnBack = document.querySelector("#btn-back");
  btnBack.addEventListener("click", (e) => {
    e.stopPropagation();
    imgBtnParamGray.style.display = "";
    imgBtnParamGreen.style.display = "none";
    menuPageHome.style.display = "";
    menuPageParam.style.display = "none";
    data.isBtnParamActive = false;
  });
};
// btn back end

// btn play start
const btnPlay = () => {
  const btnPlay = document.querySelector("#btn-play");
  btnPlay.addEventListener("click", (e) => {
    e.stopPropagation();

    // don't show the menu game start
    data.isMenuOpen = false;
    menuContent.style.display = "none";
    // don't show the menu game end

    // // show the keyboard key image after press "Jouer" start
    containerKeyboardKey.style.display = "";
    // // show the keyboard key image after press "Jouer" end

    // reset the game each time we press "Jouer" start
    data.xySnake[0][0] = 2;
    data.xySnake[0][1] = 7;
    data.xySnake[1][0] = 1;
    data.xySnake[1][1] = 7;
    data.xySnake[2][0] = 0;
    data.xySnake[2][1] = 7;
    data.xySnake.splice(3, 120); // delete 120, start index 3
    data.xyFruit[0] = 12;
    data.xyFruit[1] = 7;
    data.number = 0;
    header();
    selectLand();
    snakePosition();
    selectEastDirectionHeadSnake();
    selectEastDirectionTailSnake();
    drawBodySnake();
    gameStart();
    gamePlay();
    // reset the game each time we press "Jouer" end
  });
};
// btn play end

// btn JE start
const btnJE = () => {
  const btnJE = document.querySelector("#btn-je");
  btnJE.addEventListener("click", (e) => {
    e.stopPropagation();
    location.assign("https://janviereric.com");
  });
};
// btn JE end

// btn param start
const btnParam = () => {
  const btnParam = document.querySelector("#btn-param");
  btnParam.addEventListener("click", (e) => {
    e.stopPropagation();
    data.isBtnParamActive = !data.isBtnParamActive;
    data.isTabOptionActive = true;
    data.isTabDetailActive = false;
    data.isTabRuleActive = false;
    menuParam();
    // // effect btn active (after press btn param) start
    if (data.isBtnParamActive) {
      imgBtnParamGray.style.display = "none";
      imgBtnParamGreen.style.display = "";
      menuPageHome.style.display = "none";
      menuPageParam.style.display = "";
      // // effect btn active (after press btn param) end
    } else {
      // // effect btn restore to initial (after press btn param) start
      imgBtnParamGray.style.display = "";
      imgBtnParamGreen.style.display = "none";
      menuPageHome.style.display = "";
      menuPageParam.style.display = "none";
      // // effect btn restore to initial (after press btn param) end
    }
  });
};
// btn param end

// keyboard key press to remove the image and the game start
const gameStart = () => {
  if (!data.isMenuOpen) {
    window.addEventListener("keydown", (e) => {
      data.keyPress = e.key;
      switch (data.keyPress) {
        case "KeyZ":
        case "KeyW":
        case "ArrowUp":
        case "KeyS":
        case "ArrowDown":
        case "KeyD":
        case "ArrowRight": {
          e.stopPropagation();
          containerKeyboardKey.style.display = "none";
          // data.isGamePlay = true;
          // console.log(data.isGamePlay);
        }
        default: {
          e.stopPropagation();
          data.keyPress = "KeyD";
          containerKeyboardKey.style.display = "none";
          // data.isGamePlay = true;
          // console.log(data.isGamePlay);
        }
      }
    });
  }
};
// keyboard key press to remove the image and the game end

const gamePlay = () => {
  if (!data.isGamePlay) {
    // snake start to move after the game is starting
    requestAnimationFrame(gameLoop);
  }
};

export const menu = () => {
  scrollByGrabbing();
  btnNext();
  btnBack();
  btnPlay();
  btnJE();
  btnParam();
  menuParam();
  menuHomeFruit(data.fruit, data.number);
  menuHomeSpeed(data.move);
  menuHomeSnake(data.snake);
  menuHomeMode(data.mode);
  menuHomeScreen(data.screen);
  menuHomeLand(data.land);
  menuDetailFruit(data.fruit);
  menuDetailSpeed(data.move);
  menuDetailSnake(data.snake);
  menuDetailMode(data.mode);
  menuDetailScreen(data.screen);
  menuDetailLand(data.land);
  displayFruit();
  displaySnake();
  displayLand();
  displaySpeed();
  displayMode();
  displayScreen();
  menuRule();
  menuCommand();
};

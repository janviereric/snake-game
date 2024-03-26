import "./index.css";

// folder js start
export { data } from "./asset/js/data.js";
// folder js end

// folder land start
export { ctx, grid, drawLand } from "./land/land-draw.js";
export { selectLand } from "./land/land-func.js";

export {
  imgForest,
  imgRiver,
  imgVolcano,
  imgArctic,
  imgDesert,
  imgLove,
  imgNight,
  imgDay,
  imgCountry,
  imgCity,
  imgCave,
  imgSky,
  greenLightLand,
  greenDarkLand,
  greenBorderLand,
  blueLightLand,
  blueDarkLand,
  blueBorderLand,
  redLightLand,
  redDarkLand,
  redBorderLand,
  turquoiseLightLand,
  turquoiseDarkLand,
  turquoiseBorderLand,
  yellowLightLand,
  yellowDarkLand,
  yellowBorderLand,
  pinkLightLand,
  pinkDarkLand,
  pinkBorderLand,
  brownLightLand,
  brownDarkLand,
  brownBorderLand,
  grayLightLand,
  grayDarkLand,
  grayBorderLand,
  purpleLightLand,
  purpleDarkLand,
  purpleBorderLand,
  orangeLightLand,
  orangeDarkLand,
  orangeBorderLand,
  blackLightLand,
  blackDarkLand,
  blackBorderLand,
  whiteLightLand,
  whiteDarkLand,
  whiteBorderLand,
} from "./land/land-variable.js";

export { arrImgLand } from "./land/land-arr.js";
// folder land end

// folder snake start
export { snakePosition, gameLoop } from "./snake/snake-gameplay.js";

export {
  imgBlueSnake,
  imgRedSnake,
  imgGreenSnake,
  imgTurquoiseSnake,
  imgYellowSnake,
  imgPinkSnake,
  imgBrownSnake,
  imgGraySnake,
  imgPurpleSnake,
  imgOrangeSnake,
  imgBlackSnake,
  imgWhiteSnake,
  blueHeadSnake,
  blueEyelidSnake,
  blueScleraSnake,
  bluePupilSnake,
  blueNostrilSnake,
  blueSkinSnake,
  blueLongStainSnake,
  blueRoundStainSnake,
  blueTailSnake,
  blueEastDirectionStainTailSnake,
  blueWestDirectionStainTailSnake,
  blueNorthDirectionStainTailSnake,
  blueSouthDirectionStainTailSnake,
  blueOutlineSnake,
  blueOutlineStainSnake,
  redHeadSnake,
  redEyelidSnake,
  redScleraSnake,
  redPupilSnake,
  redNostrilSnake,
  redSkinSnake,
  redLongStainSnake,
  redRoundStainSnake,
  redTailSnake,
  redEastDirectionStainTailSnake,
  redWestDirectionStainTailSnake,
  redNorthDirectionStainTailSnake,
  redSouthDirectionStainTailSnake,
  redOutlineSnake,
  redOutlineStainSnake,
  greenHeadSnake,
  greenEyelidSnake,
  greenScleraSnake,
  greenPupilSnake,
  greenNostrilSnake,
  greenSkinSnake,
  greenLongStainSnake,
  greenRoundStainSnake,
  greenTailSnake,
  greenEastDirectionStainTailSnake,
  greenWestDirectionStainTailSnake,
  greenNorthDirectionStainTailSnake,
  greenSouthDirectionStainTailSnake,
  greenOutlineSnake,
  greenOutlineStainSnake,
  turquoiseHeadSnake,
  turquoiseEyelidSnake,
  turquoiseScleraSnake,
  turquoisePupilSnake,
  turquoiseNostrilSnake,
  turquoiseSkinSnake,
  turquoiseLongStainSnake,
  turquoiseRoundStainSnake,
  turquoiseTailSnake,
  turquoiseEastDirectionStainTailSnake,
  turquoiseWestDirectionStainTailSnake,
  turquoiseNorthDirectionStainTailSnake,
  turquoiseSouthDirectionStainTailSnake,
  turquoiseOutlineSnake,
  turquoiseOutlineStainSnake,
  yellowHeadSnake,
  yellowEyelidSnake,
  yellowScleraSnake,
  yellowPupilSnake,
  yellowNostrilSnake,
  yellowSkinSnake,
  yellowLongStainSnake,
  yellowRoundStainSnake,
  yellowTailSnake,
  yellowEastDirectionStainTailSnake,
  yellowWestDirectionStainTailSnake,
  yellowNorthDirectionStainTailSnake,
  yellowSouthDirectionStainTailSnake,
  yellowOutlineSnake,
  yellowOutlineStainSnake,
  pinkHeadSnake,
  pinkEyelidSnake,
  pinkScleraSnake,
  pinkPupilSnake,
  pinkNostrilSnake,
  pinkSkinSnake,
  pinkLongStainSnake,
  pinkRoundStainSnake,
  pinkTailSnake,
  pinkEastDirectionStainTailSnake,
  pinkWestDirectionStainTailSnake,
  pinkNorthDirectionStainTailSnake,
  pinkSouthDirectionStainTailSnake,
  pinkOutlineSnake,
  pinkOutlineStainSnake,
  brownHeadSnake,
  brownEyelidSnake,
  brownScleraSnake,
  brownPupilSnake,
  brownNostrilSnake,
  brownSkinSnake,
  brownLongStainSnake,
  brownRoundStainSnake,
  brownTailSnake,
  brownEastDirectionStainTailSnake,
  brownWestDirectionStainTailSnake,
  brownNorthDirectionStainTailSnake,
  brownSouthDirectionStainTailSnake,
  brownOutlineSnake,
  brownOutlineStainSnake,
  grayHeadSnake,
  grayEyelidSnake,
  grayScleraSnake,
  grayPupilSnake,
  grayNostrilSnake,
  graySkinSnake,
  grayLongStainSnake,
  grayRoundStainSnake,
  grayTailSnake,
  grayEastDirectionStainTailSnake,
  grayWestDirectionStainTailSnake,
  grayNorthDirectionStainTailSnake,
  graySouthDirectionStainTailSnake,
  grayOutlineSnake,
  grayOutlineStainSnake,
  purpleHeadSnake,
  purpleEyelidSnake,
  purpleScleraSnake,
  purplePupilSnake,
  purpleNostrilSnake,
  purpleSkinSnake,
  purpleLongStainSnake,
  purpleRoundStainSnake,
  purpleTailSnake,
  purpleEastDirectionStainTailSnake,
  purpleWestDirectionStainTailSnake,
  purpleNorthDirectionStainTailSnake,
  purpleSouthDirectionStainTailSnake,
  purpleOutlineSnake,
  purpleOutlineStainSnake,
  orangeHeadSnake,
  orangeEyelidSnake,
  orangeScleraSnake,
  orangePupilSnake,
  orangeNostrilSnake,
  orangeSkinSnake,
  orangeLongStainSnake,
  orangeRoundStainSnake,
  orangeTailSnake,
  orangeEastDirectionStainTailSnake,
  orangeWestDirectionStainTailSnake,
  orangeNorthDirectionStainTailSnake,
  orangeSouthDirectionStainTailSnake,
  orangeOutlineSnake,
  orangeOutlineStainSnake,
  blackHeadSnake,
  blackEyelidSnake,
  blackScleraSnake,
  blackPupilSnake,
  blackNostrilSnake,
  blackSkinSnake,
  blackLongStainSnake,
  blackRoundStainSnake,
  blackTailSnake,
  blackEastDirectionStainTailSnake,
  blackWestDirectionStainTailSnake,
  blackNorthDirectionStainTailSnake,
  blackSouthDirectionStainTailSnake,
  blackOutlineSnake,
  blackOutlineStainSnake,
  whiteHeadSnake,
  whiteEyelidSnake,
  whiteScleraSnake,
  whitePupilSnake,
  whiteNostrilSnake,
  whiteSkinSnake,
  whiteLongStainSnake,
  whiteRoundStainSnake,
  whiteTailSnake,
  whiteEastDirectionStainTailSnake,
  whiteWestDirectionStainTailSnake,
  whiteNorthDirectionStainTailSnake,
  whiteSouthDirectionStainTailSnake,
  whiteOutlineSnake,
  whiteOutlineStainSnake,
} from "./snake/snake-variable.js";

export {
  arrImgSnake,
  arrColorSnake,
  arrEastDirectionHeadSnake,
  arrWestDirectionHeadSnake,
  arrNorthDirectionHeadSnake,
  arrSouthDirectionHeadSnake,
  arrStainBodySnake,
  arrLongStainEastWestFirstBodySnake,
  arrLongStainNorthSouthFirstBodySnake,
  arrStainTailSnake,
} from "./snake/snake-arr.js";

export {
  drawEastDirectionHeadSnake,
  drawWestDirectionHeadSnake,
  drawNorthDirectionHeadSnake,
  drawSouthDirectionHeadSnake,
} from "./snake/snake-draw-head.js";

export { drawBodySnake } from "./snake/snake-draw-body.js";

export {
  drawEastDirectionTailSnake,
  drawWestDirectionTailSnake,
  drawNorthDirectionTailSnake,
  drawSouthDirectionTailSnake,
} from "./snake/snake-draw-tail.js";

export {
  selectEastDirectionHeadSnake,
  selectWestDirectionHeadSnake,
  selectNorthDirectionHeadSnake,
  selectSouthDirectionHeadSnake,
  bodySnake,
  selectEastDirectionTailSnake,
  selectWestDirectionTailSnake,
  selectNorthDirectionTailSnake,
  selectSouthDirectionTailSnake,
} from "./snake/snake-func.js";

// folder snake end

// folder fruit start
export {
  imgApple,
  imgPear,
  imgBlueberry,
  imgPlum,
  imgBanana,
  imgPeach,
  imgCoconut,
  imgWatermelon,
  imgGrape,
  imgOrange,
  imgBlackberry,
  imgDragon,
  redFruit,
  redOutlineFruit,
  redBranchFruit,
  blueFruit,
  blueOutlineFruit,
  blueBranchFruit,
  greenFruit,
  greenOutlineFruit,
  greenBranchFruit,
  turquoiseFruit,
  turquoiseOutlineFruit,
  turquoiseBranchFruit,
  yellowFruit,
  yellowOutlineFruit,
  yellowBranchFruit,
  pinkFruit,
  pinkOutlineFruit,
  pinkBranchFruit,
  brownFruit,
  brownOutlineFruit,
  brownBranchFruit,
  grayFruit,
  grayOutlineFruit,
  grayBranchFruit,
  purpleFruit,
  purpleOutlineFruit,
  purpleBranchFruit,
  orangeFruit,
  orangeOutlineFruit,
  orangeBranchFruit,
  blackFruit,
  blackOutlineFruit,
  blackBranchFruit,
  whiteFruit,
  whiteOutlineFruit,
  whiteBranchFruit,
} from "./fruit/fruit-variable.js";

export { drawFruit } from "./fruit/fruit-draw.js";
export { generateFruit, selectFruit } from "./fruit/fruit-func.js";
export { arrImgFruit } from "./fruit/fruit-arr.js";
// folder fruit end

// folder speed start
export {
  imgNormal,
  imgSlow,
  imgFast,
  imgScalable,
} from "./speed/speed-variable.js";

export { arrImgSpeed, arrLevelSpeed } from "./speed/speed-arr.js";
export { selectSpeed } from "./speed/speed-func.js";
// folder speed end

// folder mode start
export { imgClose, imgOpen } from "./mode/mode-variable.js";
export { arrImgMode } from "./mode/mode-arr.js";
export { selectMode } from "./mode/mode-func.js";
// folder mode end

// folder screen start
export { imgTablet, imgPhone, imgPc } from "./screen/screen-variable.js";
export { arrImgScreen } from "./screen/screen-arr.js";
export { selectScreen } from "./screen/screen-func.js";
// folder screen end

// folder menu start
export { menu } from "./menu/menu-func.js";
export { menuParam } from "./menu/menu-param.js";
export {
  menuHomeFruit,
  menuHomeSpeed,
  menuHomeSnake,
  menuHomeMode,
  menuHomeScreen,
  menuHomeLand,
} from "./menu/menu-home.js";

export {
  scrollByGrabbing,
  displayFruit,
  displaySnake,
  displayLand,
  displaySpeed,
  displayMode,
  displayScreen,
} from "./menu/menu-option.js";

export {
  menuDetailFruit,
  menuDetailSnake,
  menuDetailLand,
  menuDetailSpeed,
  menuDetailMode,
  menuDetailScreen,
} from "./menu/menu-detail.js";

export { menuRule } from "./menu/menu-rule.js";
export { menuCommand } from "./menu/menu-command.js";
// folder menu end

// folder js start
export { header } from "./asset/js/header.js";
export { footer } from "./asset/js/footer.js";
export { main } from "./asset/js/main.js";
export { body } from "./asset/js/body.js";
// folder js end

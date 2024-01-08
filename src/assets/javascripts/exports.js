// folder maps start
export { context2D, gridElement, drawMaps } from "../../maps/maps-draw.js";
export { landMaps } from "../../maps/maps-land.js";
export {
  lightGreenMapColor,
  darkGreenMapColor,
  greenBorderMapColor,
  lightRedMapColor,
  darkRedMapColor,
  redBorderMapColor,
  lightBlueMapColor,
  darkBlueMapColor,
  blueBorderMapColor,
  lightYellowMapColor,
  darkYellowMapColor,
  yellowBorderMapColor,
  lightPinkMapColor,
  darkPinkMapColor,
  pinkBorderMapColor,
  lightOrangeMapColor,
  darkOrangeMapColor,
  orangeBorderMapColor,
  lightPurpleMapColor,
  darkPurpleMapColor,
  purpleBorderMapColor,
  lightGrayMapColor,
  darkGrayMapColor,
  grayBorderMapColor,
  lightWhiteMapColor,
  darkWhiteMapColor,
  whiteBorderMapColor,
  lightBlackMapColor,
  darkBlackMapColor,
  blackBorderMapColor,
} from "../../maps/maps-color.js";
// folder maps end

// folder snake start
export { drawSnakeBody } from "../../snake/snake-draw-body.js";

export {
  snake,
  drawSnakeHeadRight,
  drawSnakeHeadLeft,
  drawSnakeHeadTop,
  drawSnakeHeadBottom,
} from "../../snake/snake-draw-head.js";

export {
  drawSnakeTailRight,
  drawSnakeTailLeft,
  drawSnakeTailTop,
  drawSnakeTailBottom,
} from "../../snake/snake-draw-tail.js";

export { direction, snakePosition, gameLoop } from "../../snake/snake-move.js";

export {
  snakeHeadColor,
  snakeEyeFirstColor,
  snakeEyeSecondColor,
  snakeEyeThirdColor,
  snakeNostrilColor,
  snakeBodyColor,
  snakeBodyStainColor,
  snakeFirstBodyStainColor,
  snakeColorBorder,
  snakeTailColor,
  snakeTailStainColorRightDirection,
  snakeTailStainColorLeftDirection,
  snakeTailStainColorTopDirection,
  snakeTailStainColorBottomDirection,
} from "../../snake/snake-color.js";
// folder snake end

// folder fruits start
export { fruit, drawFruits, generateFruit } from "../../fruits/fruits-draw.js";
export {
  redFruitColor,
  redFruitBorderColor,
  redBranchFruitColor,
  blueFruitColor,
  blueFruitBorderColor,
  blueBranchFruitColor,
  grayFruitColor,
  grayFruitBorderColor,
  grayBranchFruitColor,
  pinkFruitColor,
  pinkFruitBorderColor,
  pinkBranchFruitColor,
  blackFruitColor,
  blackFruitBorderColor,
  blackBranchFruitColor,
  greenFruitColor,
  greenFruitBorderColor,
  greenBranchFruitColor,
  whiteFruitColor,
  whiteFruitBorderColor,
  whiteBranchFruitColor,
  orangeFruitColor,
  orangeFruitBorderColor,
  orangeBranchFruitColor,
  purpleFruitColor,
  purpleFruitBorderColor,
  purpleBranchFruitColor,
  yellowFruitColor,
  yellowFruitBorderColor,
  yellowBranchFruitColor,
} from "../../fruits/fruits-color.js";

export { fruitsAppear } from "../../fruits/fruits-appear.js";
// folder fruits end

// folder javascripts start
export { footer } from "./footer.js";
// folder javascripts end

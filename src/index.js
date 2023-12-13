import "./index.css";

// folder map start
export { drawMap, context2D, gridElement } from "./map/map-draw.js";
export { mapSeaColor } from "./map/map-color.js";
// folder map end

// folder snake start
export { drawSnakeBody } from "./snake/snake-draw-body.js";

export {
  snake,
  drawSnakeHeadRight,
  drawSnakeHeadLeft,
  drawSnakeHeadTop,
  drawSnakeHeadBottom,
} from "./snake/snake-draw-head.js";

export {
  drawSnakeTailRight,
  drawSnakeTailLeft,
  drawSnakeTailTop,
  drawSnakeTailBottom,
} from "./snake/snake-draw-tail.js";

export {
  direction,
  snakePosition,
  updateSnakePosition,
} from "./snake/snake-move.js";

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
} from "./snake/snake-color.js";
// folder snake end

// folder fruits start
export {
  drawGreenFruit,
  drawRedFruit,
  drawBlueFruit,
  drawYellowFruit,
  drawPinkFruit,
  drawOrangeFruit,
  drawPurpleFruit,
  drawGrayFruit,
  drawWhiteFruit,
  drawBlackFruit,
} from "./fruits/fruits-draw.js";
export { fruitsAppear } from "./fruits/fruits-appear.js";

export {
  greenFruitColor,
  greenFruitBorderColor,
  greenBranchFruitColor,
  redFruitColor,
  redFruitBorderColor,
  redBranchFruitColor,
  blueFruitColor,
  blueFruitBorderColor,
  blueBranchFruitColor,
  yellowFruitColor,
  yellowFruitBorderColor,
  yellowBranchFruitColor,
  pinkFruitColor,
  pinkFruitBorderColor,
  pinkBranchFruitColor,
  orangeFruitColor,
  orangeFruitBorderColor,
  orangeBranchFruitColor,
  purpleFruitColor,
  purpleFruitBorderColor,
  purpleBranchFruitColor,
  grayFruitColor,
  grayFruitBorderColor,
  grayBranchFruitColor,
  whiteFruitColor,
  whiteFruitBorderColor,
  whiteBranchFruitColor,
  blackFruitColor,
  blackFruitBorderColor,
  blackBranchFruitColor,
} from "./fruits/fruits-color.js";
// folder fruits end

// folder rules start
export { gameLoop } from "./game/game-loop.js";
export { gameOver } from "./game/game-over.js";
// folder rules end

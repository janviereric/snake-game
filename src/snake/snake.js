export { drawMap, context2D, gridElement } from "../map/map.js";
export { direction, snakePosition, move } from "./snake-move/snake-move.js";
export {
  snake,
  drawSnakeHeadRight,
  drawSnakeHeadLeft,
  drawSnakeHeadTop,
  drawSnakeHeadBottom,
} from "./snake-draw/snake-draw-head.js";

export { drawSnakeBody } from "./snake-draw/snake-draw-body.js";
export {
  mapSeaColor,
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
} from "../assets/javascripts/color-variable.js";

export {
  drawSnakeTailRight,
  drawSnakeTailLeft,
  drawSnakeTailTop,
  drawSnakeTailBottom,
} from "./snake-draw/snake-draw-tail.js";

import {
  data,
  selectLand,
  selectFruit,
  snakePosition,
  bodySnake,
} from "../../index.js";

export const main = () => {
  // draw the game before started
  selectLand(data.land);
  snakePosition(data.snake);
  bodySnake(data.snake);
  selectFruit(data.fruit);
};

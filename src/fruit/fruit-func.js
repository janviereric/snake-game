import { data, arrImgFruit, drawFruit } from "../index.js";

// allows to choose another fruit
export const selectFruit = () => {
  arrImgFruit.forEach((fruit, i) => {
    if (fruit.name === data.fruit) {
      drawFruit(
        arrImgFruit[i].src,
        arrImgFruit[i].width,
        arrImgFruit[i].height
      );
    }
  });
};

// the fruit appears randomly after being eaten
export const generateFruit = () => {
  const [x, y] = [
    Math.trunc(Math.random() * 14),
    Math.trunc(Math.random() * 14),
  ];
  // prevent the fruit from appearing on the snake
  for (let snakeBody of data.xySnake) {
    if (snakeBody[0] === x && snakeBody[1] === y) {
      return generateFruit();
    }
  }
  // prevent the fruit from appearing twice in the same place
  if (data.xyFruit[0] === x && data.xyFruit[1] === y) {
    generateFruit();
  } else {
    data.xyFruit = [x, y];
  }
};

import { context2D, gridElement, snake } from "../index.js";

export let fruit = [12, 7];

export const drawFruits = (fruitColor, fruitBorderColor, fruitBranchColor) => {
  context2D.beginPath();
  context2D.roundRect(
    fruit[0] * gridElement + 5,
    fruit[1] * gridElement + 5,
    gridElement - 10,
    gridElement - 10,
    15
  );
  context2D.fillStyle = `${fruitColor}`;
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${fruitBorderColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    fruit[0] * gridElement + 18,
    fruit[1] * gridElement + 7,
    gridElement - 35,
    gridElement - 35,
    5
  );
  context2D.fillStyle = `${fruitBranchColor}`;
  context2D.fill();
  context2D.closePath();
};

// generate a fruit
export const generateFruit = () => {
  const [x, y] = [
    Math.trunc(Math.random() * 14),
    Math.trunc(Math.random() * 14),
  ];
  // prevents the fruit from appearing on the snake
  for (let snakeBody of snake) {
    if (snakeBody[0] === x && snakeBody[1] === y) {
      return generateFruit();
    }
  }
  // prevent the fruit from appearing twice in the same place
  if (fruit[0] === x && fruit[1] === y) {
    generateFruit();
  } else {
    fruit = [x, y];
  }
};

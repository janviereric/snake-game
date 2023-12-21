import { context2D, gridElement } from "../index.js";

let fruit = [5, 1];

export const drawFruits = (fruitColor, fruitBorderColor, branchFruitColor) => {
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
  context2D.fillStyle = `${branchFruitColor}`;
  context2D.fill();
  context2D.closePath();
};

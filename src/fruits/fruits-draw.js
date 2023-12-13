import {
  context2D,
  gridElement,
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
} from "../index.js";

let fruit = [5, 5];
let fruitColor;
let fruitBorderColor;
let branchFruitColor;

const drawFruit = () => {
  context2D.beginPath();
  context2D.roundRect(
    fruit[0] * gridElement + 5,
    fruit[1] * gridElement + 5,
    gridElement - 10,
    gridElement - 10,
    15
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = fruitBorderColor;
  context2D.fillStyle = fruitColor;
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
  context2D.fillStyle = branchFruitColor;
  context2D.fill();
  context2D.closePath();
};

export const drawGreenFruit = () => {
  fruitColor = greenFruitColor;
  fruitBorderColor = greenFruitBorderColor;
  branchFruitColor = greenBranchFruitColor;
  drawFruit();
};

export const drawRedFruit = () => {
  fruitColor = redFruitColor;
  fruitBorderColor = redFruitBorderColor;
  branchFruitColor = redBranchFruitColor;
  drawFruit();
};

export const drawBlueFruit = () => {
  fruitColor = blueFruitColor;
  fruitBorderColor = blueFruitBorderColor;
  branchFruitColor = blueBranchFruitColor;
  drawFruit();
};

export const drawYellowFruit = () => {
  fruitColor = yellowFruitColor;
  fruitBorderColor = yellowFruitBorderColor;
  branchFruitColor = yellowBranchFruitColor;
  drawFruit();
};

export const drawPinkFruit = () => {
  fruitColor = pinkFruitColor;
  fruitBorderColor = pinkFruitBorderColor;
  branchFruitColor = pinkBranchFruitColor;
  drawFruit();
};

export const drawOrangeFruit = () => {
  fruitColor = orangeFruitColor;
  fruitBorderColor = orangeFruitBorderColor;
  branchFruitColor = orangeBranchFruitColor;
  drawFruit();
};

export const drawPurpleFruit = () => {
  fruitColor = purpleFruitColor;
  fruitBorderColor = purpleFruitBorderColor;
  branchFruitColor = purpleBranchFruitColor;
  drawFruit();
};

export const drawGrayFruit = () => {
  fruitColor = grayFruitColor;
  fruitBorderColor = grayFruitBorderColor;
  branchFruitColor = grayBranchFruitColor;
  drawFruit();
};

export const drawWhiteFruit = () => {
  fruitColor = whiteFruitColor;
  fruitBorderColor = whiteFruitBorderColor;
  branchFruitColor = whiteBranchFruitColor;
  drawFruit();
};

export const drawBlackFruit = () => {
  fruitColor = blackFruitColor;
  fruitBorderColor = blackFruitBorderColor;
  branchFruitColor = blackBranchFruitColor;
  drawFruit();
};

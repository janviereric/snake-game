import {
  drawFruits,
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
} from "../index.js";

const fruits = Math.floor(Math.random() * 10);

export const fruitsAppear = () => {
  if (fruits === 0) {
    drawFruits(redFruitColor, redFruitBorderColor, redBranchFruitColor);
  } else if (fruits === 1) {
    drawFruits(blueFruitColor, blueFruitBorderColor, blueBranchFruitColor);
  } else if (fruits === 2) {
    drawFruits(grayFruitColor, grayFruitBorderColor, grayBranchFruitColor);
  } else if (fruits === 3) {
    drawFruits(pinkFruitColor, pinkFruitBorderColor, pinkBranchFruitColor);
  } else if (fruits === 4) {
    drawFruits(blackFruitColor, blackFruitBorderColor, blackBranchFruitColor);
  } else if (fruits === 5) {
    drawFruits(greenFruitColor, greenFruitBorderColor, greenBranchFruitColor);
  } else if (fruits === 6) {
    drawFruits(whiteFruitColor, whiteFruitBorderColor, whiteBranchFruitColor);
  } else if (fruits === 7) {
    drawFruits(
      orangeFruitColor,
      orangeFruitBorderColor,
      orangeBranchFruitColor
    );
  } else if (fruits === 8) {
    drawFruits(
      purpleFruitColor,
      purpleFruitBorderColor,
      purpleBranchFruitColor
    );
  } else {
    drawFruits(
      yellowFruitColor,
      yellowFruitBorderColor,
      yellowBranchFruitColor
    );
  }
};

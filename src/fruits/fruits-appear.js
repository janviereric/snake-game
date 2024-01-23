import {
  drawFruits,
  firstFruitColor,
  firstFruitBorderColor,
  firstFruitBranchColor,
  secondFruitColor,
  secondFruitBorderColor,
  secondFruitBranchColor,
  thirdFruitColor,
  thirdFruitBorderColor,
  thirdFruitBranchColor,
  fourthFruitColor,
  fourthFruitBorderColor,
  fourthFruitBranchColor,
  fifthFruitColor,
  fifthFruitBorderColor,
  fifthFruitBranchColor,
  sixthFruitColor,
  sixthFruitBorderColor,
  sixthFruitBranchColor,
  seventhFruitColor,
  seventhFruitBorderColor,
  seventhFruitBranchColor,
  eighthFruitColor,
  eighthFruitBorderColor,
  eighthFruitBranchColor,
  ninthFruitColor,
  ninthFruitBorderColor,
  ninthFruitBranchColor,
  tenthFruitColor,
  tenthFruitBorderColor,
  tenthFruitBranchColor,
} from "../index.js";

export const fruitsAppear = (number) => {
  if (number < 5) {
    drawFruits(firstFruitColor, firstFruitBorderColor, firstFruitBranchColor);
  } else if (number > 4 && number < 10) {
    drawFruits(
      secondFruitColor,
      secondFruitBorderColor,
      secondFruitBranchColor
    );
  } else if (number > 9 && number < 15) {
    drawFruits(thirdFruitColor, thirdFruitBorderColor, thirdFruitBranchColor);
  } else if (number > 14 && number < 20) {
    drawFruits(
      fourthFruitColor,
      fourthFruitBorderColor,
      fourthFruitBranchColor
    );
  } else if (number > 19 && number < 25) {
    drawFruits(fifthFruitColor, fifthFruitBorderColor, fifthFruitBranchColor);
  } else if (number > 24 && number < 30) {
    drawFruits(sixthFruitColor, sixthFruitBorderColor, sixthFruitBranchColor);
  } else if (number > 29 && number < 35) {
    drawFruits(
      seventhFruitColor,
      seventhFruitBorderColor,
      seventhFruitBranchColor
    );
  } else if (number > 34 && number < 40) {
    drawFruits(
      eighthFruitColor,
      eighthFruitBorderColor,
      eighthFruitBranchColor
    );
  } else if (number > 39 && number < 45) {
    drawFruits(ninthFruitColor, ninthFruitBorderColor, ninthFruitBranchColor);
  } else if (number > 44) {
    drawFruits(tenthFruitColor, tenthFruitBorderColor, tenthFruitBranchColor);
  } else {
    // draw fruits for number = 0
    drawFruits(firstFruitColor, firstFruitBorderColor, firstFruitBranchColor);
  }
};

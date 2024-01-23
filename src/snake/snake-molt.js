import {
  drawSnakeHeadRightDirection,
  drawSnakeHeadLeftDirection,
  drawSnakeHeadTopDirection,
  drawSnakeHeadBottomDirection,
  drawSnakeBody,
  drawSnakeTailRightDirection,
  drawSnakeTailLeftDirection,
  drawSnakeTailTopDirection,
  drawSnakeTailBottomDirection,
  firstSnakeHeadColor,
  firstSnakeEyePrimaryColor,
  firstSnakeEyeSecondaryColor,
  firstSnakeEyeTertiaryColor,
  firstSnakeNostrilColor,
  firstSnakeBodyColor,
  firstSnakeLongStainColor,
  firstSnakeRoundStainColor,
  firstSnakeTailColor,
  firstSnakeTailStainColorRightDirection,
  firstSnakeTailStainColorLeftDirection,
  firstSnakeTailStainColorTopDirection,
  firstSnakeTailStainColorBottomDirection,
  firstSnakeBorderColor,
  firstSnakeStainBorderColor,
  secondSnakeHeadColor,
  secondSnakeEyePrimaryColor,
  secondSnakeEyeSecondaryColor,
  secondSnakeEyeTertiaryColor,
  secondSnakeNostrilColor,
  secondSnakeBodyColor,
  secondSnakeLongStainColor,
  secondSnakeRoundStainColor,
  secondSnakeTailColor,
  secondSnakeTailStainColorRightDirection,
  secondSnakeTailStainColorLeftDirection,
  secondSnakeTailStainColorTopDirection,
  secondSnakeTailStainColorBottomDirection,
  secondSnakeBorderColor,
  secondSnakeStainBorderColor,
  thirdSnakeHeadColor,
  thirdSnakeEyePrimaryColor,
  thirdSnakeEyeSecondaryColor,
  thirdSnakeEyeTertiaryColor,
  thirdSnakeNostrilColor,
  thirdSnakeBodyColor,
  thirdSnakeLongStainColor,
  thirdSnakeRoundStainColor,
  thirdSnakeTailColor,
  thirdSnakeTailStainColorRightDirection,
  thirdSnakeTailStainColorLeftDirection,
  thirdSnakeTailStainColorTopDirection,
  thirdSnakeTailStainColorBottomDirection,
  thirdSnakeBorderColor,
  thirdSnakeStainBorderColor,
  fourthSnakeHeadColor,
  fourthSnakeEyePrimaryColor,
  fourthSnakeEyeSecondaryColor,
  fourthSnakeEyeTertiaryColor,
  fourthSnakeNostrilColor,
  fourthSnakeBodyColor,
  fourthSnakeLongStainColor,
  fourthSnakeRoundStainColor,
  fourthSnakeTailColor,
  fourthSnakeTailStainColorRightDirection,
  fourthSnakeTailStainColorLeftDirection,
  fourthSnakeTailStainColorTopDirection,
  fourthSnakeTailStainColorBottomDirection,
  fourthSnakeBorderColor,
  fourthSnakeStainBorderColor,
  fifthSnakeHeadColor,
  fifthSnakeEyePrimaryColor,
  fifthSnakeEyeSecondaryColor,
  fifthSnakeEyeTertiaryColor,
  fifthSnakeNostrilColor,
  fifthSnakeBodyColor,
  fifthSnakeLongStainColor,
  fifthSnakeRoundStainColor,
  fifthSnakeTailColor,
  fifthSnakeTailStainColorRightDirection,
  fifthSnakeTailStainColorLeftDirection,
  fifthSnakeTailStainColorTopDirection,
  fifthSnakeTailStainColorBottomDirection,
  fifthSnakeBorderColor,
  fifthSnakeStainBorderColor,
  sixthSnakeHeadColor,
  sixthSnakeEyePrimaryColor,
  sixthSnakeEyeSecondaryColor,
  sixthSnakeEyeTertiaryColor,
  sixthSnakeNostrilColor,
  sixthSnakeBodyColor,
  sixthSnakeLongStainColor,
  sixthSnakeRoundStainColor,
  sixthSnakeTailColor,
  sixthSnakeTailStainColorRightDirection,
  sixthSnakeTailStainColorLeftDirection,
  sixthSnakeTailStainColorTopDirection,
  sixthSnakeTailStainColorBottomDirection,
  sixthSnakeBorderColor,
  sixthSnakeStainBorderColor,
  seventhSnakeHeadColor,
  seventhSnakeEyePrimaryColor,
  seventhSnakeEyeSecondaryColor,
  seventhSnakeEyeTertiaryColor,
  seventhSnakeNostrilColor,
  seventhSnakeBodyColor,
  seventhSnakeLongStainColor,
  seventhSnakeRoundStainColor,
  seventhSnakeTailColor,
  seventhSnakeTailStainColorRightDirection,
  seventhSnakeTailStainColorLeftDirection,
  seventhSnakeTailStainColorTopDirection,
  seventhSnakeTailStainColorBottomDirection,
  seventhSnakeBorderColor,
  seventhSnakeStainBorderColor,
  eighthSnakeHeadColor,
  eighthSnakeEyePrimaryColor,
  eighthSnakeEyeSecondaryColor,
  eighthSnakeEyeTertiaryColor,
  eighthSnakeNostrilColor,
  eighthSnakeBodyColor,
  eighthSnakeLongStainColor,
  eighthSnakeRoundStainColor,
  eighthSnakeTailColor,
  eighthSnakeTailStainColorRightDirection,
  eighthSnakeTailStainColorLeftDirection,
  eighthSnakeTailStainColorTopDirection,
  eighthSnakeTailStainColorBottomDirection,
  eighthSnakeBorderColor,
  eighthSnakeStainBorderColor,
  ninthSnakeHeadColor,
  ninthSnakeEyePrimaryColor,
  ninthSnakeEyeSecondaryColor,
  ninthSnakeEyeTertiaryColor,
  ninthSnakeNostrilColor,
  ninthSnakeBodyColor,
  ninthSnakeLongStainColor,
  ninthSnakeRoundStainColor,
  ninthSnakeTailColor,
  ninthSnakeTailStainColorRightDirection,
  ninthSnakeTailStainColorLeftDirection,
  ninthSnakeTailStainColorTopDirection,
  ninthSnakeTailStainColorBottomDirection,
  ninthSnakeBorderColor,
  ninthSnakeStainBorderColor,
  tenthSnakeHeadColor,
  tenthSnakeEyePrimaryColor,
  tenthSnakeEyeSecondaryColor,
  tenthSnakeEyeTertiaryColor,
  tenthSnakeNostrilColor,
  tenthSnakeBodyColor,
  tenthSnakeLongStainColor,
  tenthSnakeRoundStainColor,
  tenthSnakeTailColor,
  tenthSnakeTailStainColorRightDirection,
  tenthSnakeTailStainColorLeftDirection,
  tenthSnakeTailStainColorTopDirection,
  tenthSnakeTailStainColorBottomDirection,
  tenthSnakeBorderColor,
  tenthSnakeStainBorderColor,
} from "../index.js";

// snake molt head start
// snake molt head right direction start
export const snakeMoltHeadRightDirection = (number) => {
  if (number < 5) {
    drawSnakeHeadRightDirection(
      firstSnakeHeadColor,
      firstSnakeBorderColor,
      firstSnakeNostrilColor,
      firstSnakeEyePrimaryColor,
      firstSnakeEyeSecondaryColor,
      firstSnakeEyeTertiaryColor
    );
  } else if (number > 5 && number < 11) {
    drawSnakeHeadRightDirection(
      secondSnakeHeadColor,
      secondSnakeBorderColor,
      secondSnakeNostrilColor,
      secondSnakeEyePrimaryColor,
      secondSnakeEyeSecondaryColor,
      secondSnakeEyeTertiaryColor
    );
  } else if (number > 10 && number < 16) {
    drawSnakeHeadRightDirection(
      thirdSnakeHeadColor,
      thirdSnakeBorderColor,
      thirdSnakeNostrilColor,
      thirdSnakeEyePrimaryColor,
      thirdSnakeEyeSecondaryColor,
      thirdSnakeEyeTertiaryColor
    );
  } else if (number > 15 && number < 21) {
    drawSnakeHeadRightDirection(
      fourthSnakeHeadColor,
      fourthSnakeBorderColor,
      fourthSnakeNostrilColor,
      fourthSnakeEyePrimaryColor,
      fourthSnakeEyeSecondaryColor,
      fourthSnakeEyeTertiaryColor
    );
  } else if (number > 20 && number < 26) {
    drawSnakeHeadRightDirection(
      fifthSnakeHeadColor,
      fifthSnakeBorderColor,
      fifthSnakeNostrilColor,
      fifthSnakeEyePrimaryColor,
      fifthSnakeEyeSecondaryColor,
      fifthSnakeEyeTertiaryColor
    );
  } else if (number > 25 && number < 31) {
    drawSnakeHeadRightDirection(
      sixthSnakeHeadColor,
      sixthSnakeBorderColor,
      sixthSnakeNostrilColor,
      sixthSnakeEyePrimaryColor,
      sixthSnakeEyeSecondaryColor,
      sixthSnakeEyeTertiaryColor
    );
  } else if (number > 30 && number < 36) {
    drawSnakeHeadRightDirection(
      seventhSnakeHeadColor,
      seventhSnakeBorderColor,
      seventhSnakeNostrilColor,
      seventhSnakeEyePrimaryColor,
      seventhSnakeEyeSecondaryColor,
      seventhSnakeEyeTertiaryColor
    );
  } else if (number > 35 && number < 41) {
    drawSnakeHeadRightDirection(
      eighthSnakeHeadColor,
      eighthSnakeBorderColor,
      eighthSnakeNostrilColor,
      eighthSnakeEyePrimaryColor,
      eighthSnakeEyeSecondaryColor,
      eighthSnakeEyeTertiaryColor
    );
  } else if (number > 40 && number < 46) {
    drawSnakeHeadRightDirection(
      ninthSnakeHeadColor,
      ninthSnakeBorderColor,
      ninthSnakeNostrilColor,
      ninthSnakeEyePrimaryColor,
      ninthSnakeEyeSecondaryColor,
      ninthSnakeEyeTertiaryColor
    );
  } else if (number > 45) {
    drawSnakeHeadRightDirection(
      tenthSnakeHeadColor,
      tenthSnakeBorderColor,
      tenthSnakeNostrilColor,
      tenthSnakeEyePrimaryColor,
      tenthSnakeEyeSecondaryColor,
      tenthSnakeEyeTertiaryColor
    );
  } else {
    // draw snake head right direction for number = 0
    drawSnakeHeadRightDirection(
      firstSnakeHeadColor,
      firstSnakeBorderColor,
      firstSnakeNostrilColor,
      firstSnakeEyePrimaryColor,
      firstSnakeEyeSecondaryColor,
      firstSnakeEyeTertiaryColor
    );
  }
};
// snake molt head right direction end

// snake molt head left direction start
export const snakeMoltHeadLeftDirection = (number) => {
  if (number < 5) {
    drawSnakeHeadLeftDirection(
      firstSnakeHeadColor,
      firstSnakeBorderColor,
      firstSnakeNostrilColor,
      firstSnakeEyePrimaryColor,
      firstSnakeEyeSecondaryColor,
      firstSnakeEyeTertiaryColor
    );
  } else if (number > 5 && number < 11) {
    drawSnakeHeadLeftDirection(
      secondSnakeHeadColor,
      secondSnakeBorderColor,
      secondSnakeNostrilColor,
      secondSnakeEyePrimaryColor,
      secondSnakeEyeSecondaryColor,
      secondSnakeEyeTertiaryColor
    );
  } else if (number > 10 && number < 16) {
    drawSnakeHeadLeftDirection(
      thirdSnakeHeadColor,
      thirdSnakeBorderColor,
      thirdSnakeNostrilColor,
      thirdSnakeEyePrimaryColor,
      thirdSnakeEyeSecondaryColor,
      thirdSnakeEyeTertiaryColor
    );
  } else if (number > 15 && number < 21) {
    drawSnakeHeadLeftDirection(
      fourthSnakeHeadColor,
      fourthSnakeBorderColor,
      fourthSnakeNostrilColor,
      fourthSnakeEyePrimaryColor,
      fourthSnakeEyeSecondaryColor,
      fourthSnakeEyeTertiaryColor
    );
  } else if (number > 20 && number < 26) {
    drawSnakeHeadLeftDirection(
      fifthSnakeHeadColor,
      fifthSnakeBorderColor,
      fifthSnakeNostrilColor,
      fifthSnakeEyePrimaryColor,
      fifthSnakeEyeSecondaryColor,
      fifthSnakeEyeTertiaryColor
    );
  } else if (number > 25 && number < 31) {
    drawSnakeHeadLeftDirection(
      sixthSnakeHeadColor,
      sixthSnakeBorderColor,
      sixthSnakeNostrilColor,
      sixthSnakeEyePrimaryColor,
      sixthSnakeEyeSecondaryColor,
      sixthSnakeEyeTertiaryColor
    );
  } else if (number > 30 && number < 36) {
    drawSnakeHeadLeftDirection(
      seventhSnakeHeadColor,
      seventhSnakeBorderColor,
      seventhSnakeNostrilColor,
      seventhSnakeEyePrimaryColor,
      seventhSnakeEyeSecondaryColor,
      seventhSnakeEyeTertiaryColor
    );
  } else if (number > 35 && number < 41) {
    drawSnakeHeadLeftDirection(
      eighthSnakeHeadColor,
      eighthSnakeBorderColor,
      eighthSnakeNostrilColor,
      eighthSnakeEyePrimaryColor,
      eighthSnakeEyeSecondaryColor,
      eighthSnakeEyeTertiaryColor
    );
  } else if (number > 40 && number < 46) {
    drawSnakeHeadLeftDirection(
      ninthSnakeHeadColor,
      ninthSnakeBorderColor,
      ninthSnakeNostrilColor,
      ninthSnakeEyePrimaryColor,
      ninthSnakeEyeSecondaryColor,
      ninthSnakeEyeTertiaryColor
    );
  } else if (number > 45) {
    drawSnakeHeadLeftDirection(
      tenthSnakeHeadColor,
      tenthSnakeBorderColor,
      tenthSnakeNostrilColor,
      tenthSnakeEyePrimaryColor,
      tenthSnakeEyeSecondaryColor,
      tenthSnakeEyeTertiaryColor
    );
  } else {
    // draw snake head left direction for number = 0
    drawSnakeHeadLeftDirection(
      firstSnakeHeadColor,
      firstSnakeBorderColor,
      firstSnakeNostrilColor,
      firstSnakeEyePrimaryColor,
      firstSnakeEyeSecondaryColor,
      firstSnakeEyeTertiaryColor
    );
  }
};
// snake molt head left direction end

// snake molt head top direction start
export const snakeMoltHeadTopDirection = (number) => {
  if (number < 5) {
    drawSnakeHeadTopDirection(
      firstSnakeHeadColor,
      firstSnakeBorderColor,
      firstSnakeNostrilColor,
      firstSnakeEyePrimaryColor,
      firstSnakeEyeSecondaryColor,
      firstSnakeEyeTertiaryColor
    );
  } else if (number > 5 && number < 11) {
    drawSnakeHeadTopDirection(
      secondSnakeHeadColor,
      secondSnakeBorderColor,
      secondSnakeNostrilColor,
      secondSnakeEyePrimaryColor,
      secondSnakeEyeSecondaryColor,
      secondSnakeEyeTertiaryColor
    );
  } else if (number > 10 && number < 16) {
    drawSnakeHeadTopDirection(
      thirdSnakeHeadColor,
      thirdSnakeBorderColor,
      thirdSnakeNostrilColor,
      thirdSnakeEyePrimaryColor,
      thirdSnakeEyeSecondaryColor,
      thirdSnakeEyeTertiaryColor
    );
  } else if (number > 15 && number < 21) {
    drawSnakeHeadTopDirection(
      fourthSnakeHeadColor,
      fourthSnakeBorderColor,
      fourthSnakeNostrilColor,
      fourthSnakeEyePrimaryColor,
      fourthSnakeEyeSecondaryColor,
      fourthSnakeEyeTertiaryColor
    );
  } else if (number > 20 && number < 26) {
    drawSnakeHeadTopDirection(
      fifthSnakeHeadColor,
      fifthSnakeBorderColor,
      fifthSnakeNostrilColor,
      fifthSnakeEyePrimaryColor,
      fifthSnakeEyeSecondaryColor,
      fifthSnakeEyeTertiaryColor
    );
  } else if (number > 25 && number < 31) {
    drawSnakeHeadTopDirection(
      sixthSnakeHeadColor,
      sixthSnakeBorderColor,
      sixthSnakeNostrilColor,
      sixthSnakeEyePrimaryColor,
      sixthSnakeEyeSecondaryColor,
      sixthSnakeEyeTertiaryColor
    );
  } else if (number > 30 && number < 36) {
    drawSnakeHeadTopDirection(
      seventhSnakeHeadColor,
      seventhSnakeBorderColor,
      seventhSnakeNostrilColor,
      seventhSnakeEyePrimaryColor,
      seventhSnakeEyeSecondaryColor,
      seventhSnakeEyeTertiaryColor
    );
  } else if (number > 35 && number < 41) {
    drawSnakeHeadTopDirection(
      eighthSnakeHeadColor,
      eighthSnakeBorderColor,
      eighthSnakeNostrilColor,
      eighthSnakeEyePrimaryColor,
      eighthSnakeEyeSecondaryColor,
      eighthSnakeEyeTertiaryColor
    );
  } else if (number > 40 && number < 46) {
    drawSnakeHeadTopDirection(
      ninthSnakeHeadColor,
      ninthSnakeBorderColor,
      ninthSnakeNostrilColor,
      ninthSnakeEyePrimaryColor,
      ninthSnakeEyeSecondaryColor,
      ninthSnakeEyeTertiaryColor
    );
  } else if (number > 45) {
    drawSnakeHeadTopDirection(
      tenthSnakeHeadColor,
      tenthSnakeBorderColor,
      tenthSnakeNostrilColor,
      tenthSnakeEyePrimaryColor,
      tenthSnakeEyeSecondaryColor,
      tenthSnakeEyeTertiaryColor
    );
  } else {
    // draw snake head top direction for number = 0
    drawSnakeHeadTopDirection(
      firstSnakeHeadColor,
      firstSnakeBorderColor,
      firstSnakeNostrilColor,
      firstSnakeEyePrimaryColor,
      firstSnakeEyeSecondaryColor,
      firstSnakeEyeTertiaryColor
    );
  }
};
// snake molt head top direction end

// snake molt head bottom direction start
export const snakeMoltHeadBottomDirection = (number) => {
  if (number < 5) {
    drawSnakeHeadBottomDirection(
      firstSnakeHeadColor,
      firstSnakeBorderColor,
      firstSnakeNostrilColor,
      firstSnakeEyePrimaryColor,
      firstSnakeEyeSecondaryColor,
      firstSnakeEyeTertiaryColor
    );
  } else if (number > 5 && number < 11) {
    drawSnakeHeadBottomDirection(
      secondSnakeHeadColor,
      secondSnakeBorderColor,
      secondSnakeNostrilColor,
      secondSnakeEyePrimaryColor,
      secondSnakeEyeSecondaryColor,
      secondSnakeEyeTertiaryColor
    );
  } else if (number > 10 && number < 16) {
    drawSnakeHeadBottomDirection(
      thirdSnakeHeadColor,
      thirdSnakeBorderColor,
      thirdSnakeNostrilColor,
      thirdSnakeEyePrimaryColor,
      thirdSnakeEyeSecondaryColor,
      thirdSnakeEyeTertiaryColor
    );
  } else if (number > 15 && number < 21) {
    drawSnakeHeadBottomDirection(
      fourthSnakeHeadColor,
      fourthSnakeBorderColor,
      fourthSnakeNostrilColor,
      fourthSnakeEyePrimaryColor,
      fourthSnakeEyeSecondaryColor,
      fourthSnakeEyeTertiaryColor
    );
  } else if (number > 20 && number < 26) {
    drawSnakeHeadBottomDirection(
      fifthSnakeHeadColor,
      fifthSnakeBorderColor,
      fifthSnakeNostrilColor,
      fifthSnakeEyePrimaryColor,
      fifthSnakeEyeSecondaryColor,
      fifthSnakeEyeTertiaryColor
    );
  } else if (number > 25 && number < 31) {
    drawSnakeHeadBottomDirection(
      sixthSnakeHeadColor,
      sixthSnakeBorderColor,
      sixthSnakeNostrilColor,
      sixthSnakeEyePrimaryColor,
      sixthSnakeEyeSecondaryColor,
      sixthSnakeEyeTertiaryColor
    );
  } else if (number > 30 && number < 36) {
    drawSnakeHeadBottomDirection(
      seventhSnakeHeadColor,
      seventhSnakeBorderColor,
      seventhSnakeNostrilColor,
      seventhSnakeEyePrimaryColor,
      seventhSnakeEyeSecondaryColor,
      seventhSnakeEyeTertiaryColor
    );
  } else if (number > 35 && number < 41) {
    drawSnakeHeadBottomDirection(
      eighthSnakeHeadColor,
      eighthSnakeBorderColor,
      eighthSnakeNostrilColor,
      eighthSnakeEyePrimaryColor,
      eighthSnakeEyeSecondaryColor,
      eighthSnakeEyeTertiaryColor
    );
  } else if (number > 40 && number < 46) {
    drawSnakeHeadBottomDirection(
      ninthSnakeHeadColor,
      ninthSnakeBorderColor,
      ninthSnakeNostrilColor,
      ninthSnakeEyePrimaryColor,
      ninthSnakeEyeSecondaryColor,
      ninthSnakeEyeTertiaryColor
    );
  } else if (number > 45) {
    drawSnakeHeadBottomDirection(
      tenthSnakeHeadColor,
      tenthSnakeBorderColor,
      tenthSnakeNostrilColor,
      tenthSnakeEyePrimaryColor,
      tenthSnakeEyeSecondaryColor,
      tenthSnakeEyeTertiaryColor
    );
  } else {
    // draw snake head bottoom direction for number = 0
    drawSnakeHeadBottomDirection(
      firstSnakeHeadColor,
      firstSnakeBorderColor,
      firstSnakeNostrilColor,
      firstSnakeEyePrimaryColor,
      firstSnakeEyeSecondaryColor,
      firstSnakeEyeTertiaryColor
    );
  }
};
// snake molt head bottom direction end
// snake molt head end

// snake molt body start
export const snakeMoltBody = (number) => {
  if (number < 5) {
    drawSnakeBody(
      firstSnakeBodyColor,
      firstSnakeBorderColor,
      firstSnakeLongStainColor,
      firstSnakeRoundStainColor,
      firstSnakeStainBorderColor
    );
  } else if (number > 5 && number < 11) {
    drawSnakeBody(
      secondSnakeBodyColor,
      secondSnakeBorderColor,
      secondSnakeLongStainColor,
      secondSnakeRoundStainColor,
      secondSnakeStainBorderColor
    );
  } else if (number > 10 && number < 16) {
    drawSnakeBody(
      thirdSnakeBodyColor,
      thirdSnakeBorderColor,
      thirdSnakeLongStainColor,
      thirdSnakeRoundStainColor,
      thirdSnakeStainBorderColor
    );
  } else if (number > 15 && number < 21) {
    drawSnakeBody(
      fourthSnakeBodyColor,
      fourthSnakeBorderColor,
      fourthSnakeLongStainColor,
      fourthSnakeRoundStainColor,
      fourthSnakeStainBorderColor
    );
  } else if (number > 20 && number < 26) {
    drawSnakeBody(
      fifthSnakeBodyColor,
      fifthSnakeBorderColor,
      fifthSnakeLongStainColor,
      fifthSnakeRoundStainColor,
      fifthSnakeStainBorderColor
    );
  } else if (number > 25 && number < 31) {
    drawSnakeBody(
      sixthSnakeBodyColor,
      sixthSnakeBorderColor,
      sixthSnakeLongStainColor,
      sixthSnakeRoundStainColor,
      sixthSnakeStainBorderColor
    );
  } else if (number > 30 && number < 36) {
    drawSnakeBody(
      seventhSnakeBodyColor,
      seventhSnakeBorderColor,
      seventhSnakeLongStainColor,
      seventhSnakeRoundStainColor,
      seventhSnakeStainBorderColor
    );
  } else if (number > 35 && number < 41) {
    drawSnakeBody(
      eighthSnakeBodyColor,
      eighthSnakeBorderColor,
      eighthSnakeLongStainColor,
      eighthSnakeRoundStainColor,
      eighthSnakeStainBorderColor
    );
  } else if (number > 40 && number < 46) {
    drawSnakeBody(
      ninthSnakeBodyColor,
      ninthSnakeBorderColor,
      ninthSnakeLongStainColor,
      ninthSnakeRoundStainColor,
      ninthSnakeStainBorderColor
    );
  } else if (number > 45) {
    drawSnakeBody(
      tenthSnakeBodyColor,
      tenthSnakeBorderColor,
      tenthSnakeLongStainColor,
      tenthSnakeRoundStainColor,
      tenthSnakeStainBorderColor
    );
  } else {
    // draw snake body for number = 0
    drawSnakeBody(
      firstSnakeBodyColor,
      firstSnakeBorderColor,
      firstSnakeLongStainColor,
      firstSnakeRoundStainColor,
      firstSnakeStainBorderColor
    );
  }
};
// snake molt body end

// snake molt tail  start
// snake molt tail right direction start
export const snakeMoltTailRightDirection = (number) => {
  if (number < 5) {
    drawSnakeTailRightDirection(
      firstSnakeTailColor,
      firstSnakeTailStainColorRightDirection,
      firstSnakeTailStainColorLeftDirection,
      firstSnakeTailStainColorTopDirection,
      firstSnakeTailStainColorBottomDirection,
      firstSnakeStainBorderColor,
      firstSnakeBorderColor
    );
  } else if (number > 5 && number < 11) {
    drawSnakeTailRightDirection(
      secondSnakeTailColor,
      secondSnakeTailStainColorRightDirection,
      secondSnakeTailStainColorLeftDirection,
      secondSnakeTailStainColorTopDirection,
      secondSnakeTailStainColorBottomDirection,
      secondSnakeStainBorderColor,
      secondSnakeBorderColor
    );
  } else if (number > 10 && number < 16) {
    drawSnakeTailRightDirection(
      thirdSnakeTailColor,
      thirdSnakeTailStainColorRightDirection,
      thirdSnakeTailStainColorLeftDirection,
      thirdSnakeTailStainColorTopDirection,
      thirdSnakeTailStainColorBottomDirection,
      thirdSnakeStainBorderColor,
      thirdSnakeBorderColor
    );
  } else if (number > 15 && number < 21) {
    drawSnakeTailRightDirection(
      fourthSnakeTailColor,
      fourthSnakeTailStainColorRightDirection,
      fourthSnakeTailStainColorLeftDirection,
      fourthSnakeTailStainColorTopDirection,
      fourthSnakeTailStainColorBottomDirection,
      fourthSnakeStainBorderColor,
      fourthSnakeBorderColor
    );
  } else if (number > 20 && number < 26) {
    drawSnakeTailRightDirection(
      fifthSnakeTailColor,
      fifthSnakeTailStainColorRightDirection,
      fifthSnakeTailStainColorLeftDirection,
      fifthSnakeTailStainColorTopDirection,
      fifthSnakeTailStainColorBottomDirection,
      fifthSnakeStainBorderColor,
      fifthSnakeBorderColor
    );
  } else if (number > 25 && number < 31) {
    drawSnakeTailRightDirection(
      sixthSnakeTailColor,
      sixthSnakeTailStainColorRightDirection,
      sixthSnakeTailStainColorLeftDirection,
      sixthSnakeTailStainColorTopDirection,
      sixthSnakeTailStainColorBottomDirection,
      sixthSnakeStainBorderColor,
      sixthSnakeBorderColor
    );
  } else if (number > 30 && number < 36) {
    drawSnakeTailRightDirection(
      seventhSnakeTailColor,
      seventhSnakeTailStainColorRightDirection,
      seventhSnakeTailStainColorLeftDirection,
      seventhSnakeTailStainColorTopDirection,
      seventhSnakeTailStainColorBottomDirection,
      seventhSnakeStainBorderColor,
      seventhSnakeBorderColor
    );
  } else if (number > 35 && number < 41) {
    drawSnakeTailRightDirection(
      eighthSnakeTailColor,
      eighthSnakeTailStainColorRightDirection,
      eighthSnakeTailStainColorLeftDirection,
      eighthSnakeTailStainColorTopDirection,
      eighthSnakeTailStainColorBottomDirection,
      eighthSnakeStainBorderColor,
      eighthSnakeBorderColor
    );
  } else if (number > 40 && number < 46) {
    drawSnakeTailRightDirection(
      ninthSnakeTailColor,
      ninthSnakeTailStainColorRightDirection,
      ninthSnakeTailStainColorLeftDirection,
      ninthSnakeTailStainColorTopDirection,
      ninthSnakeTailStainColorBottomDirection,
      ninthSnakeStainBorderColor,
      ninthSnakeBorderColor
    );
  } else if (number > 45) {
    drawSnakeTailRightDirection(
      tenthSnakeTailColor,
      tenthSnakeTailStainColorRightDirection,
      tenthSnakeTailStainColorLeftDirection,
      tenthSnakeTailStainColorTopDirection,
      tenthSnakeTailStainColorBottomDirection,
      tenthSnakeStainBorderColor,
      tenthSnakeBorderColor
    );
  } else {
    // draw snake tail right direction for number = 0
    drawSnakeTailRightDirection(
      firstSnakeTailColor,
      firstSnakeTailStainColorRightDirection,
      firstSnakeTailStainColorLeftDirection,
      firstSnakeTailStainColorTopDirection,
      firstSnakeTailStainColorBottomDirection,
      firstSnakeStainBorderColor,
      firstSnakeBorderColor
    );
  }
};
// snake molt tail right direction end

// snake molt tail left direction start
export const snakeMoltTailLeftDirection = (number) => {
  if (number < 5) {
    drawSnakeTailLeftDirection(
      firstSnakeTailColor,
      firstSnakeTailStainColorRightDirection,
      firstSnakeTailStainColorLeftDirection,
      firstSnakeTailStainColorTopDirection,
      firstSnakeTailStainColorBottomDirection,
      firstSnakeStainBorderColor,
      firstSnakeBorderColor
    );
  } else if (number > 5 && number < 11) {
    drawSnakeTailLeftDirection(
      secondSnakeTailColor,
      secondSnakeTailStainColorRightDirection,
      secondSnakeTailStainColorLeftDirection,
      secondSnakeTailStainColorTopDirection,
      secondSnakeTailStainColorBottomDirection,
      secondSnakeStainBorderColor,
      secondSnakeBorderColor
    );
  } else if (number > 10 && number < 16) {
    drawSnakeTailLeftDirection(
      thirdSnakeTailColor,
      thirdSnakeTailStainColorRightDirection,
      thirdSnakeTailStainColorLeftDirection,
      thirdSnakeTailStainColorTopDirection,
      thirdSnakeTailStainColorBottomDirection,
      thirdSnakeStainBorderColor,
      thirdSnakeBorderColor
    );
  } else if (number > 15 && number < 21) {
    drawSnakeTailLeftDirection(
      fourthSnakeTailColor,
      fourthSnakeTailStainColorRightDirection,
      fourthSnakeTailStainColorLeftDirection,
      fourthSnakeTailStainColorTopDirection,
      fourthSnakeTailStainColorBottomDirection,
      fourthSnakeStainBorderColor,
      fourthSnakeBorderColor
    );
  } else if (number > 20 && number < 26) {
    drawSnakeTailLeftDirection(
      fifthSnakeTailColor,
      fifthSnakeTailStainColorRightDirection,
      fifthSnakeTailStainColorLeftDirection,
      fifthSnakeTailStainColorTopDirection,
      fifthSnakeTailStainColorBottomDirection,
      fifthSnakeStainBorderColor,
      fifthSnakeBorderColor
    );
  } else if (number > 25 && number < 31) {
    drawSnakeTailLeftDirection(
      sixthSnakeTailColor,
      sixthSnakeTailStainColorRightDirection,
      sixthSnakeTailStainColorLeftDirection,
      sixthSnakeTailStainColorTopDirection,
      sixthSnakeTailStainColorBottomDirection,
      sixthSnakeStainBorderColor,
      sixthSnakeBorderColor
    );
  } else if (number > 30 && number < 36) {
    drawSnakeTailLeftDirection(
      seventhSnakeTailColor,
      seventhSnakeTailStainColorRightDirection,
      seventhSnakeTailStainColorLeftDirection,
      seventhSnakeTailStainColorTopDirection,
      seventhSnakeTailStainColorBottomDirection,
      seventhSnakeStainBorderColor,
      seventhSnakeBorderColor
    );
  } else if (number > 35 && number < 41) {
    drawSnakeTailLeftDirection(
      eighthSnakeTailColor,
      eighthSnakeTailStainColorRightDirection,
      eighthSnakeTailStainColorLeftDirection,
      eighthSnakeTailStainColorTopDirection,
      eighthSnakeTailStainColorBottomDirection,
      eighthSnakeStainBorderColor,
      eighthSnakeBorderColor
    );
  } else if (number > 40 && number < 46) {
    drawSnakeTailLeftDirection(
      ninthSnakeTailColor,
      ninthSnakeTailStainColorRightDirection,
      ninthSnakeTailStainColorLeftDirection,
      ninthSnakeTailStainColorTopDirection,
      ninthSnakeTailStainColorBottomDirection,
      ninthSnakeStainBorderColor,
      ninthSnakeBorderColor
    );
  } else if (number > 45) {
    drawSnakeTailLeftDirection(
      tenthSnakeTailColor,
      tenthSnakeTailStainColorRightDirection,
      tenthSnakeTailStainColorLeftDirection,
      tenthSnakeTailStainColorTopDirection,
      tenthSnakeTailStainColorBottomDirection,
      tenthSnakeStainBorderColor,
      tenthSnakeBorderColor
    );
  } else {
    // draw snake tail left direction for number = 0
    drawSnakeTailLeftDirection(
      firstSnakeTailColor,
      firstSnakeTailStainColorRightDirection,
      firstSnakeTailStainColorLeftDirection,
      firstSnakeTailStainColorTopDirection,
      firstSnakeTailStainColorBottomDirection,
      firstSnakeStainBorderColor,
      firstSnakeBorderColor
    );
  }
};
// snake molt tail left direction end

// snake molt tail top direction start
export const snakeMoltTailTopDirection = (number) => {
  if (number < 5) {
    drawSnakeTailTopDirection(
      firstSnakeTailColor,
      firstSnakeTailStainColorRightDirection,
      firstSnakeTailStainColorLeftDirection,
      firstSnakeTailStainColorTopDirection,
      firstSnakeTailStainColorBottomDirection,
      firstSnakeStainBorderColor,
      firstSnakeBorderColor
    );
  } else if (number > 5 && number < 11) {
    drawSnakeTailTopDirection(
      secondSnakeTailColor,
      secondSnakeTailStainColorRightDirection,
      secondSnakeTailStainColorLeftDirection,
      secondSnakeTailStainColorTopDirection,
      secondSnakeTailStainColorBottomDirection,
      secondSnakeStainBorderColor,
      secondSnakeBorderColor
    );
  } else if (number > 10 && number < 16) {
    drawSnakeTailTopDirection(
      thirdSnakeTailColor,
      thirdSnakeTailStainColorRightDirection,
      thirdSnakeTailStainColorLeftDirection,
      thirdSnakeTailStainColorTopDirection,
      thirdSnakeTailStainColorBottomDirection,
      thirdSnakeStainBorderColor,
      thirdSnakeBorderColor
    );
  } else if (number > 15 && number < 21) {
    drawSnakeTailTopDirection(
      fourthSnakeTailColor,
      fourthSnakeTailStainColorRightDirection,
      fourthSnakeTailStainColorLeftDirection,
      fourthSnakeTailStainColorTopDirection,
      fourthSnakeTailStainColorBottomDirection,
      fourthSnakeStainBorderColor,
      fourthSnakeBorderColor
    );
  } else if (number > 20 && number < 26) {
    drawSnakeTailTopDirection(
      fifthSnakeTailColor,
      fifthSnakeTailStainColorRightDirection,
      fifthSnakeTailStainColorLeftDirection,
      fifthSnakeTailStainColorTopDirection,
      fifthSnakeTailStainColorBottomDirection,
      fifthSnakeStainBorderColor,
      fifthSnakeBorderColor
    );
  } else if (number > 25 && number < 31) {
    drawSnakeTailTopDirection(
      sixthSnakeTailColor,
      sixthSnakeTailStainColorRightDirection,
      sixthSnakeTailStainColorLeftDirection,
      sixthSnakeTailStainColorTopDirection,
      sixthSnakeTailStainColorBottomDirection,
      sixthSnakeStainBorderColor,
      sixthSnakeBorderColor
    );
  } else if (number > 30 && number < 36) {
    drawSnakeTailTopDirection(
      seventhSnakeTailColor,
      seventhSnakeTailStainColorRightDirection,
      seventhSnakeTailStainColorLeftDirection,
      seventhSnakeTailStainColorTopDirection,
      seventhSnakeTailStainColorBottomDirection,
      seventhSnakeStainBorderColor,
      seventhSnakeBorderColor
    );
  } else if (number > 35 && number < 41) {
    drawSnakeTailTopDirection(
      eighthSnakeTailColor,
      eighthSnakeTailStainColorRightDirection,
      eighthSnakeTailStainColorLeftDirection,
      eighthSnakeTailStainColorTopDirection,
      eighthSnakeTailStainColorBottomDirection,
      eighthSnakeStainBorderColor,
      eighthSnakeBorderColor
    );
  } else if (number > 40 && number < 46) {
    drawSnakeTailTopDirection(
      ninthSnakeTailColor,
      ninthSnakeTailStainColorRightDirection,
      ninthSnakeTailStainColorLeftDirection,
      ninthSnakeTailStainColorTopDirection,
      ninthSnakeTailStainColorBottomDirection,
      ninthSnakeStainBorderColor,
      ninthSnakeBorderColor
    );
  } else if (number > 45) {
    drawSnakeTailTopDirection(
      tenthSnakeTailColor,
      tenthSnakeTailStainColorRightDirection,
      tenthSnakeTailStainColorLeftDirection,
      tenthSnakeTailStainColorTopDirection,
      tenthSnakeTailStainColorBottomDirection,
      tenthSnakeStainBorderColor,
      tenthSnakeBorderColor
    );
  } else {
    // draw snake tail top direction for number = 0
    drawSnakeTailTopDirection(
      firstSnakeTailColor,
      firstSnakeTailStainColorRightDirection,
      firstSnakeTailStainColorLeftDirection,
      firstSnakeTailStainColorTopDirection,
      firstSnakeTailStainColorBottomDirection,
      firstSnakeStainBorderColor,
      firstSnakeBorderColor
    );
  }
};
// snake molt tail top direction end

// snake molt tail bottom direction start
export const snakeMoltTailBottomDirection = (number) => {
  if (number < 5) {
    drawSnakeTailBottomDirection(
      firstSnakeTailColor,
      firstSnakeTailStainColorRightDirection,
      firstSnakeTailStainColorLeftDirection,
      firstSnakeTailStainColorTopDirection,
      firstSnakeTailStainColorBottomDirection,
      firstSnakeStainBorderColor,
      firstSnakeBorderColor
    );
  } else if (number > 5 && number < 11) {
    drawSnakeTailBottomDirection(
      secondSnakeTailColor,
      secondSnakeTailStainColorRightDirection,
      secondSnakeTailStainColorLeftDirection,
      secondSnakeTailStainColorTopDirection,
      secondSnakeTailStainColorBottomDirection,
      secondSnakeStainBorderColor,
      secondSnakeBorderColor
    );
  } else if (number > 10 && number < 16) {
    drawSnakeTailBottomDirection(
      thirdSnakeTailColor,
      thirdSnakeTailStainColorRightDirection,
      thirdSnakeTailStainColorLeftDirection,
      thirdSnakeTailStainColorTopDirection,
      thirdSnakeTailStainColorBottomDirection,
      thirdSnakeStainBorderColor,
      thirdSnakeBorderColor
    );
  } else if (number > 15 && number < 21) {
    drawSnakeTailBottomDirection(
      fourthSnakeTailColor,
      fourthSnakeTailStainColorRightDirection,
      fourthSnakeTailStainColorLeftDirection,
      fourthSnakeTailStainColorTopDirection,
      fourthSnakeTailStainColorBottomDirection,
      fourthSnakeStainBorderColor,
      fourthSnakeBorderColor
    );
  } else if (number > 20 && number < 26) {
    drawSnakeTailBottomDirection(
      fifthSnakeTailColor,
      fifthSnakeTailStainColorRightDirection,
      fifthSnakeTailStainColorLeftDirection,
      fifthSnakeTailStainColorTopDirection,
      fifthSnakeTailStainColorBottomDirection,
      fifthSnakeStainBorderColor,
      fifthSnakeBorderColor
    );
  } else if (number > 25 && number < 31) {
    drawSnakeTailBottomDirection(
      sixthSnakeTailColor,
      sixthSnakeTailStainColorRightDirection,
      sixthSnakeTailStainColorLeftDirection,
      sixthSnakeTailStainColorTopDirection,
      sixthSnakeTailStainColorBottomDirection,
      sixthSnakeStainBorderColor,
      sixthSnakeBorderColor
    );
  } else if (number > 30 && number < 36) {
    drawSnakeTailBottomDirection(
      seventhSnakeTailColor,
      seventhSnakeTailStainColorRightDirection,
      seventhSnakeTailStainColorLeftDirection,
      seventhSnakeTailStainColorTopDirection,
      seventhSnakeTailStainColorBottomDirection,
      seventhSnakeStainBorderColor,
      seventhSnakeBorderColor
    );
  } else if (number > 35 && number < 41) {
    drawSnakeTailBottomDirection(
      eighthSnakeTailColor,
      eighthSnakeTailStainColorRightDirection,
      eighthSnakeTailStainColorLeftDirection,
      eighthSnakeTailStainColorTopDirection,
      eighthSnakeTailStainColorBottomDirection,
      eighthSnakeStainBorderColor,
      eighthSnakeBorderColor
    );
  } else if (number > 40 && number < 46) {
    drawSnakeTailBottomDirection(
      ninthSnakeTailColor,
      ninthSnakeTailStainColorRightDirection,
      ninthSnakeTailStainColorLeftDirection,
      ninthSnakeTailStainColorTopDirection,
      ninthSnakeTailStainColorBottomDirection,
      ninthSnakeStainBorderColor,
      ninthSnakeBorderColor
    );
  } else if (number > 45) {
    drawSnakeTailBottomDirection(
      tenthSnakeTailColor,
      tenthSnakeTailStainColorRightDirection,
      tenthSnakeTailStainColorLeftDirection,
      tenthSnakeTailStainColorTopDirection,
      tenthSnakeTailStainColorBottomDirection,
      tenthSnakeStainBorderColor,
      tenthSnakeBorderColor
    );
  } else {
    // draw snake tail bottom direction for number = 0
    drawSnakeTailBottomDirection(
      firstSnakeTailColor,
      firstSnakeTailStainColorRightDirection,
      firstSnakeTailStainColorLeftDirection,
      firstSnakeTailStainColorTopDirection,
      firstSnakeTailStainColorBottomDirection,
      firstSnakeStainBorderColor,
      firstSnakeBorderColor
    );
  }
};
// snake molt tail bottom direction end
// snake molt tail end

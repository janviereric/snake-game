import "./index.css";

// folder maps start
export { context2D, gridElement, drawMaps } from "./maps/maps-draw.js";
export { mapLands } from "./maps/maps-land.js";
export {
  firstMapLightColor,
  firstMapDarkColor,
  firstMapBorderColor,
  secondMapLightColor,
  secondMapDarkColor,
  secondMapBorderColor,
  thirdMapLightColor,
  thirdMapDarkColor,
  thirdMapBorderColor,
  fourthMapLightColor,
  fourthMapDarkColor,
  fourthMapBorderColor,
  fifthMapLightColor,
  fifthMapDarkColor,
  fifthMapBorderColor,
  sixthMapLightColor,
  sixthMapDarkColor,
  sixthMapBorderColor,
  seventhMapLightColor,
  seventhMapDarkColor,
  seventhMapBorderColor,
  eighthMapLightColor,
  eighthMapDarkColor,
  eighthMapBorderColor,
  ninthMapLightColor,
  ninthMapDarkColor,
  ninthBorderMapColor,
  tenthMapLightColor,
  tenthMapDarkColor,
  tenthBorderMapColor,
} from "./maps/maps-color.js";
// folder maps end

// folder snake start
export {
  data,
  direction,
  snakePosition,
  gameLoop,
} from "./snake/snake-move.js";

export {
  snake,
  drawSnakeHeadRightDirection,
  drawSnakeHeadLeftDirection,
  drawSnakeHeadTopDirection,
  drawSnakeHeadBottomDirection,
} from "./snake/snake-draw-head.js";

export { drawSnakeBody } from "./snake/snake-draw-body.js";

export {
  drawSnakeTailRightDirection,
  drawSnakeTailLeftDirection,
  drawSnakeTailTopDirection,
  drawSnakeTailBottomDirection,
} from "./snake/snake-draw-tail.js";

export {
  snakeMoltHeadRightDirection,
  snakeMoltHeadLeftDirection,
  snakeMoltHeadTopDirection,
  snakeMoltHeadBottomDirection,
  snakeMoltBody,
  snakeMoltTailRightDirection,
  snakeMoltTailLeftDirection,
  snakeMoltTailTopDirection,
  snakeMoltTailBottomDirection,
} from "./snake/snake-molt.js";

export {
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
} from "./snake/snake-color.js";
// folder snake end

// folder fruits start
export { fruit, drawFruits, generateFruit } from "./fruits/fruits-draw.js";
export {
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
} from "./fruits/fruits-color.js";

export { fruitsAppear } from "./fruits/fruits-appear.js";
// folder fruits end

// folder javascripts start
export { header } from "./assets/javascripts/header.js";
export { menu } from "./assets/javascripts/menu.js";
export { footer } from "./assets/javascripts/footer.js";
export { main } from "./assets/javascripts/main.js";
// folder javascripts end

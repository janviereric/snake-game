import {
  drawMaps,
  lightGreenMapColor,
  darkGreenMapColor,
  greenBorderMapColor,
  lightRedMapColor,
  darkRedMapColor,
  redBorderMapColor,
  lightBlueMapColor,
  darkBlueMapColor,
  blueBorderMapColor,
  lightYellowMapColor,
  darkYellowMapColor,
  yellowBorderMapColor,
  lightPinkMapColor,
  darkPinkMapColor,
  pinkBorderMapColor,
  lightOrangeMapColor,
  darkOrangeMapColor,
  orangeBorderMapColor,
  lightPurpleMapColor,
  darkPurpleMapColor,
  purpleBorderMapColor,
  lightGrayMapColor,
  darkGrayMapColor,
  grayBorderMapColor,
  lightWhiteMapColor,
  darkWhiteMapColor,
  whiteBorderMapColor,
  lightBlackMapColor,
  darkBlackMapColor,
  blackBorderMapColor,
} from "../index.js";

const maps = Math.floor(Math.random() * 10);

export const landMaps = () => {
  if (maps === 0) {
    drawMaps(lightRedMapColor, darkRedMapColor, redBorderMapColor);
  } else if (maps === 1) {
    drawMaps(lightBlueMapColor, darkBlueMapColor, blueBorderMapColor);
  } else if (maps === 2) {
    drawMaps(lightGrayMapColor, darkGrayMapColor, grayBorderMapColor);
  } else if (maps === 3) {
    drawMaps(lightPinkMapColor, darkPinkMapColor, pinkBorderMapColor);
  } else if (maps === 4) {
    drawMaps(lightBlackMapColor, darkBlackMapColor, blackBorderMapColor);
  } else if (maps === 5) {
    drawMaps(lightGreenMapColor, darkGreenMapColor, greenBorderMapColor);
  } else if (maps === 6) {
    drawMaps(lightWhiteMapColor, darkWhiteMapColor, whiteBorderMapColor);
  } else if (maps === 7) {
    drawMaps(lightOrangeMapColor, darkOrangeMapColor, orangeBorderMapColor);
  } else if (maps === 8) {
    drawMaps(lightPurpleMapColor, darkPurpleMapColor, purpleBorderMapColor);
  } else {
    drawMaps(lightYellowMapColor, darkYellowMapColor, yellowBorderMapColor);
  }
};

import {
  drawMaps,
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
} from "../index.js";

export const mapLands = (number) => {
  if (number < 5) {
    drawMaps(firstMapLightColor, firstMapDarkColor, firstMapBorderColor);
  } else if (number > 4 && number < 10) {
    drawMaps(secondMapLightColor, secondMapDarkColor, secondMapBorderColor);
  } else if (number > 9 && number < 15) {
    drawMaps(thirdMapLightColor, thirdMapDarkColor, thirdMapBorderColor);
  } else if (number > 14 && number < 20) {
    drawMaps(fourthMapLightColor, fourthMapDarkColor, fourthMapBorderColor);
  } else if (number > 19 && number < 25) {
    drawMaps(fifthMapLightColor, fifthMapDarkColor, fifthMapBorderColor);
  } else if (number > 24 && number < 30) {
    drawMaps(sixthMapLightColor, sixthMapDarkColor, sixthMapBorderColor);
  } else if (number > 29 && number < 35) {
    drawMaps(seventhMapLightColor, seventhMapDarkColor, seventhMapBorderColor);
  } else if (number > 34 && number < 40) {
    drawMaps(eighthMapLightColor, eighthMapDarkColor, eighthMapBorderColor);
  } else if (number > 39 && number < 45) {
    drawMaps(ninthMapLightColor, ninthMapDarkColor, ninthBorderMapColor);
  } else if (number > 44) {
    drawMaps(tenthMapLightColor, tenthMapDarkColor, tenthBorderMapColor);
  } else {
    // draw maps score for number = 0
    drawMaps(firstMapLightColor, firstMapDarkColor, firstMapBorderColor);
  }
};

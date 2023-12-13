import {
  drawGreenFruit,
  drawRedFruit,
  drawBlueFruit,
  drawYellowFruit,
  drawPinkFruit,
  drawOrangeFruit,
  drawPurpleFruit,
  drawGrayFruit,
  drawWhiteFruit,
  drawBlackFruit,
} from "../index.js";

const fruits = Math.floor(Math.random() * 10);
export const fruitsAppear = () => {
  if (fruits === 0) {
    drawGreenFruit();
  } else if (fruits === 1) {
    drawRedFruit();
  } else if (fruits === 2) {
    drawBlueFruit();
  } else if (fruits === 3) {
    drawYellowFruit();
  } else if (fruits === 4) {
    drawPinkFruit();
  } else if (fruits === 5) {
    drawOrangeFruit();
  } else if (fruits === 6) {
    drawPurpleFruit();
  } else if (fruits === 7) {
    drawGrayFruit();
  } else if (fruits === 8) {
    drawWhiteFruit();
  } else {
    drawBlackFruit();
  }
};

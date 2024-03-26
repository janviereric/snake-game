import {
  data,
  arrColorSnake,
  drawEastDirectionHeadSnake,
  drawWestDirectionHeadSnake,
  drawNorthDirectionHeadSnake,
  drawSouthDirectionHeadSnake,
  drawBodySnake,
  drawEastDirectionTailSnake,
  drawWestDirectionTailSnake,
  drawNorthDirectionTailSnake,
  drawSouthDirectionTailSnake,
} from "../index.js";

// head snake start
// // east direction head snake start
export const selectEastDirectionHeadSnake = () => {
  arrColorSnake.forEach((headSnake, i) => {
    if (headSnake.name === data.snake) {
      drawEastDirectionHeadSnake(
        arrColorSnake[i].colorHeadSnake,
        arrColorSnake[i].colorEyelidSnake,
        arrColorSnake[i].colorScleraSnake,
        arrColorSnake[i].colorPupilSnake,
        arrColorSnake[i].colorNostrilSnake,
        arrColorSnake[i].colorOutlineSnake
      );
    }
  });
};
// // east direction head snake end

// // west direction head snake start
export const selectWestDirectionHeadSnake = () => {
  arrColorSnake.forEach((headSnake, i) => {
    if (headSnake.name === data.snake) {
      drawWestDirectionHeadSnake(
        arrColorSnake[i].colorHeadSnake,
        arrColorSnake[i].colorEyelidSnake,
        arrColorSnake[i].colorScleraSnake,
        arrColorSnake[i].colorPupilSnake,
        arrColorSnake[i].colorNostrilSnake,
        arrColorSnake[i].colorOutlineSnake
      );
    }
  });
};
// // west direction head snake end

// // north direction head snake start
export const selectNorthDirectionHeadSnake = () => {
  arrColorSnake.forEach((headSnake, i) => {
    if (headSnake.name === data.snake) {
      drawNorthDirectionHeadSnake(
        arrColorSnake[i].colorHeadSnake,
        arrColorSnake[i].colorEyelidSnake,
        arrColorSnake[i].colorScleraSnake,
        arrColorSnake[i].colorPupilSnake,
        arrColorSnake[i].colorNostrilSnake,
        arrColorSnake[i].colorOutlineSnake
      );
    }
  });
};
// // north direction head snake end

// // south direction head snake start
export const selectSouthDirectionHeadSnake = () => {
  arrColorSnake.forEach((headSnake, i) => {
    if (headSnake.name === data.snake) {
      drawSouthDirectionHeadSnake(
        arrColorSnake[i].colorHeadSnake,
        arrColorSnake[i].colorEyelidSnake,
        arrColorSnake[i].colorScleraSnake,
        arrColorSnake[i].colorPupilSnake,
        arrColorSnake[i].colorNostrilSnake,
        arrColorSnake[i].colorOutlineSnake
      );
    }
  });
};
// // south direction head snake end
// allows to choose another color for the head snake end

// allows to choose another color for the body snake start
export const bodySnake = () => {
  arrColorSnake.forEach((bodySnake, i) => {
    if (bodySnake.name === data.snake) {
      drawBodySnake(
        arrColorSnake[i].colorSkinSnake,
        arrColorSnake[i].colorLongStainSnake,
        arrColorSnake[i].colorRoundStainSnake,
        arrColorSnake[i].colorOutlineSnake,
        arrColorSnake[i].colorOutlineStainSnake
      );
    }
  });
};
// allows to choose another color for the body snake end

// allows to choose another color for the tail snake start
export const selectEastDirectionTailSnake = () => {
  arrColorSnake.forEach((tailSnake, i) => {
    if (tailSnake.name === data.snake) {
      drawEastDirectionTailSnake(
        arrColorSnake[i].colorTailSnake,
        arrColorSnake[i].colorEastDirectionStainTailSnake,
        arrColorSnake[i].colorOutlineStainSnake,
        arrColorSnake[i].colorOutlineSnake
      );
    }
  });
};
// // right direction tail snake end

// // left direction tail snake start
export const selectWestDirectionTailSnake = () => {
  arrColorSnake.forEach((tailSnake, i) => {
    if (tailSnake.name === data.snake) {
      drawWestDirectionTailSnake(
        arrColorSnake[i].colorTailSnake,
        arrColorSnake[i].colorWestDirectionStainTailSnake,
        arrColorSnake[i].colorOutlineStainSnake,
        arrColorSnake[i].colorOutlineSnake
      );
    }
  });
};
// // left direction tail snake end

// // top direction tail snake start
export const selectNorthDirectionTailSnake = () => {
  arrColorSnake.forEach((tailSnake, i) => {
    if (tailSnake.name === data.snake) {
      drawNorthDirectionTailSnake(
        arrColorSnake[i].colorTailSnake,
        arrColorSnake[i].colorNorthDirectionStainTailSnake,
        arrColorSnake[i].colorOutlineStainSnake,
        arrColorSnake[i].colorOutlineSnake
      );
    }
  });
};
// // top direction tail snake end

// // bottom direction tail snake start
export const selectSouthDirectionTailSnake = () => {
  arrColorSnake.forEach((tailSnake, i) => {
    if (tailSnake.name === data.snake) {
      drawSouthDirectionTailSnake(
        arrColorSnake[i].colorTailSnake,
        arrColorSnake[i].colorSouthDirectionStainTailSnake,
        arrColorSnake[i].colorOutlineStainSnake,
        arrColorSnake[i].colorOutlineSnake
      );
    }
  });
};
// // bottom direction tail snake end
// allows to choose another color for the tail snake end

import { data, arrImgScreen } from "../index.js";

export const selectScreen = () => {
  arrImgScreen.forEach((screen, i) => {
    if (screen.name === data.mode) {
      drawFruit(
        arrImgScreen[i].src,
        arrImgScreen[i].width,
        arrImgScreen[i].height
      );
    }
  });
};

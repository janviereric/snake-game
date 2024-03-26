import { data, arrImgMode } from "../index.js";

export const selectMode = () => {
  arrImgMode.forEach((mode, i) => {
    if (mode.name === data.mode) {
      drawFruit(arrImgMode[i].src, arrImgMode[i].width, arrImgMode[i].height);
    }
  });
};

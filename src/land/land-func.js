import { data, arrImgLand, drawLand } from "../index.js";

// allows to choose another land
export const selectLand = () => {
  arrImgLand.forEach((land, i) => {
    if (land.name === data.land) {
      drawLand(
        arrImgLand[i].colorLightLand,
        arrImgLand[i].colorDarkLand,
        arrImgLand[i].colorBorderLand
      );
    }
  });
};

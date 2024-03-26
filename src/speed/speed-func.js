import { data, arrLevelSpeed } from "../index.js";

export const selectSpeed = () => {
  arrLevelSpeed.forEach((speed, i) => {
    if (speed.name === data.speed) {
      data.move = arrLevelSpeed[i].name;
      data.speed = arrLevelSpeed[i].speed;
    }
  });
};

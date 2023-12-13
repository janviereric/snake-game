import { mapSeaColor } from "../index.js";

const canvas = document.querySelector("canvas");
export const context2D = canvas.getContext("2d");

export const gridElement = 40; // 20 * 20

export const drawMap = () => {
  context2D.fillStyle = mapSeaColor;
  context2D.fillRect(0, 0, 800, 800);
};

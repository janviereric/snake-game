import {
  data,
  ctx,
  grid,
  arrEastDirectionHeadSnake,
  arrWestDirectionHeadSnake,
  arrNorthDirectionHeadSnake,
  arrSouthDirectionHeadSnake,
} from "../index.js";

const drawAnyDirectionHeadSnake = (
  x,
  y,
  width,
  height,
  radii,
  linewidth,
  colorOutline,
  color
) => {
  ctx.beginPath();
  ctx.roundRect(
    data.xySnake[0][0] * grid + x,
    data.xySnake[0][1] * grid + y,
    grid - width,
    grid - height,
    radii
  );
  ctx.linewidth = linewidth;
  ctx.strokeStyle = `${colorOutline}`;
  ctx.fillStyle = `${color}`;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

// draw east direction head snake start
export const drawEastDirectionHeadSnake = (
  colorHeadSnake,
  colorEyelidSnake,
  colorScleraSnake,
  colorPupilSnake,
  colorNostrilSnake,
  colorOutlineSnake
) => {
  arrEastDirectionHeadSnake[0].colorOutline = colorOutlineSnake;
  arrEastDirectionHeadSnake[0].color = colorHeadSnake;
  arrEastDirectionHeadSnake[1].color = colorNostrilSnake;
  arrEastDirectionHeadSnake[2].color = colorNostrilSnake;
  arrEastDirectionHeadSnake[3].colorOutline = colorOutlineSnake;
  arrEastDirectionHeadSnake[3].color = colorEyelidSnake;
  arrEastDirectionHeadSnake[4].colorOutline = colorOutlineSnake;
  arrEastDirectionHeadSnake[4].color = colorEyelidSnake;
  arrEastDirectionHeadSnake[5].color = colorScleraSnake;
  arrEastDirectionHeadSnake[6].color = colorScleraSnake;
  arrEastDirectionHeadSnake[7].color = colorPupilSnake;
  arrEastDirectionHeadSnake[8].color = colorPupilSnake;

  for (let i = 0; i < arrEastDirectionHeadSnake.length; i++) {
    drawAnyDirectionHeadSnake(
      arrEastDirectionHeadSnake[i].x,
      arrEastDirectionHeadSnake[i].y,
      arrEastDirectionHeadSnake[i].width,
      arrEastDirectionHeadSnake[i].height,
      arrEastDirectionHeadSnake[i].radii,
      arrEastDirectionHeadSnake[i].linewidth,
      arrEastDirectionHeadSnake[i].colorOutline,
      arrEastDirectionHeadSnake[i].color
    );
  }
};
// draw east direction head snake end

// draw west direction head snake start
export const drawWestDirectionHeadSnake = (
  colorHeadSnake,
  colorEyelidSnake,
  colorScleraSnake,
  colorPupilSnake,
  colorNostrilSnake,
  colorOutlineSnake
) => {
  arrWestDirectionHeadSnake[0].colorOutline = colorOutlineSnake;
  arrWestDirectionHeadSnake[0].color = colorHeadSnake;
  arrWestDirectionHeadSnake[1].color = colorNostrilSnake;
  arrWestDirectionHeadSnake[2].color = colorNostrilSnake;
  arrWestDirectionHeadSnake[3].colorOutline = colorOutlineSnake;
  arrWestDirectionHeadSnake[3].color = colorEyelidSnake;
  arrWestDirectionHeadSnake[4].colorOutline = colorOutlineSnake;
  arrWestDirectionHeadSnake[4].color = colorEyelidSnake;
  arrWestDirectionHeadSnake[5].color = colorScleraSnake;
  arrWestDirectionHeadSnake[6].color = colorScleraSnake;
  arrWestDirectionHeadSnake[7].color = colorPupilSnake;
  arrWestDirectionHeadSnake[8].color = colorPupilSnake;

  for (let i = 0; i < arrWestDirectionHeadSnake.length; i++) {
    drawAnyDirectionHeadSnake(
      arrWestDirectionHeadSnake[i].x,
      arrWestDirectionHeadSnake[i].y,
      arrWestDirectionHeadSnake[i].width,
      arrWestDirectionHeadSnake[i].height,
      arrWestDirectionHeadSnake[i].radii,
      arrWestDirectionHeadSnake[i].linewidth,
      arrWestDirectionHeadSnake[i].colorOutline,
      arrWestDirectionHeadSnake[i].color
    );
  }
};
// draw west direction head snake end

// draw north direction head snake start
export const drawNorthDirectionHeadSnake = (
  colorHeadSnake,
  colorEyelidSnake,
  colorScleraSnake,
  colorPupilSnake,
  colorNostrilSnake,
  colorOutlineSnake
) => {
  arrNorthDirectionHeadSnake[0].colorOutline = colorOutlineSnake;
  arrNorthDirectionHeadSnake[0].color = colorHeadSnake;
  arrNorthDirectionHeadSnake[1].color = colorNostrilSnake;
  arrNorthDirectionHeadSnake[2].color = colorNostrilSnake;
  arrNorthDirectionHeadSnake[3].colorOutline = colorOutlineSnake;
  arrNorthDirectionHeadSnake[3].color = colorEyelidSnake;
  arrNorthDirectionHeadSnake[4].colorOutline = colorOutlineSnake;
  arrNorthDirectionHeadSnake[4].color = colorEyelidSnake;
  arrNorthDirectionHeadSnake[5].color = colorScleraSnake;
  arrNorthDirectionHeadSnake[6].color = colorScleraSnake;
  arrNorthDirectionHeadSnake[7].color = colorPupilSnake;
  arrNorthDirectionHeadSnake[8].color = colorPupilSnake;

  for (let i = 0; i < arrNorthDirectionHeadSnake.length; i++) {
    drawAnyDirectionHeadSnake(
      arrNorthDirectionHeadSnake[i].x,
      arrNorthDirectionHeadSnake[i].y,
      arrNorthDirectionHeadSnake[i].width,
      arrNorthDirectionHeadSnake[i].height,
      arrNorthDirectionHeadSnake[i].radii,
      arrNorthDirectionHeadSnake[i].linewidth,
      arrNorthDirectionHeadSnake[i].colorOutline,
      arrNorthDirectionHeadSnake[i].color
    );
  }
};
// draw north direction head snake end

// draw south direction head snake start
export const drawSouthDirectionHeadSnake = (
  colorHeadSnake,
  colorEyelidSnake,
  colorScleraSnake,
  colorPupilSnake,
  colorNostrilSnake,
  colorOutlineSnake
) => {
  arrSouthDirectionHeadSnake[0].colorOutline = colorOutlineSnake;
  arrSouthDirectionHeadSnake[0].color = colorHeadSnake;
  arrSouthDirectionHeadSnake[1].color = colorNostrilSnake;
  arrSouthDirectionHeadSnake[2].color = colorNostrilSnake;
  arrSouthDirectionHeadSnake[3].colorOutline = colorOutlineSnake;
  arrSouthDirectionHeadSnake[3].color = colorEyelidSnake;
  arrSouthDirectionHeadSnake[4].colorOutline = colorOutlineSnake;
  arrSouthDirectionHeadSnake[4].color = colorEyelidSnake;
  arrSouthDirectionHeadSnake[5].color = colorScleraSnake;
  arrSouthDirectionHeadSnake[6].color = colorScleraSnake;
  arrSouthDirectionHeadSnake[7].color = colorPupilSnake;
  arrSouthDirectionHeadSnake[8].color = colorPupilSnake;

  for (let i = 0; i < arrSouthDirectionHeadSnake.length; i++) {
    drawAnyDirectionHeadSnake(
      arrSouthDirectionHeadSnake[i].x,
      arrSouthDirectionHeadSnake[i].y,
      arrSouthDirectionHeadSnake[i].width,
      arrSouthDirectionHeadSnake[i].height,
      arrSouthDirectionHeadSnake[i].radii,
      arrSouthDirectionHeadSnake[i].linewidth,
      arrSouthDirectionHeadSnake[i].colorOutline,
      arrSouthDirectionHeadSnake[i].color
    );
  }
};
// draw south direction head snake end

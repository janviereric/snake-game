import { data, ctx, grid, arrStainTailSnake } from "../index.js";

// draw tail snake start
const drawAnyDirectionTailSnake = (colorOutlineSnake, colorTailSnake) => {
  let snakeTail = data.xySnake[data.xySnake.length - 1];
  ctx.beginPath();
  ctx.roundRect(snakeTail[0] * grid, snakeTail[1] * grid, grid, grid, 10);
  ctx.linewidth = 2;
  ctx.strokeStyle = `${colorOutlineSnake}`;
  ctx.fillStyle = `${colorTailSnake}`;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};
// draw tail snake end

const drawAnyDirectionStainTailSnake = (
  x,
  y,
  width,
  height,
  radii,
  linewidth,
  colorOutline,
  color
) => {
  let snakeTail = data.xySnake[data.xySnake.length - 1];
  ctx.beginPath();
  ctx.roundRect(
    snakeTail[0] * grid + x,
    snakeTail[1] * grid + y,
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

// draw east direction tail snake end
export const drawEastDirectionTailSnake = (
  colorTailSnake,
  colorEastDirectionStainTailSnake,
  colorOutlineStainSnake,
  colorOutlineSnake
) => {
  drawAnyDirectionTailSnake(colorOutlineSnake, colorTailSnake);
  for (let i = 0; i < arrStainTailSnake.length; i++) {
    drawAnyDirectionStainTailSnake(
      arrStainTailSnake[i].x,
      arrStainTailSnake[i].y,
      arrStainTailSnake[i].width,
      arrStainTailSnake[i].height,
      arrStainTailSnake[i].radii,
      arrStainTailSnake[i].linewidth,
      colorOutlineStainSnake,
      colorEastDirectionStainTailSnake
    );
  }
};
// east direction tail snake end

// west direction tail snake start
export const drawWestDirectionTailSnake = (
  colorTailSnake,
  colorWestDirectionStainTailSnake,
  colorOutlineStainSnake,
  colorOutlineSnake
) => {
  drawAnyDirectionTailSnake(colorOutlineSnake, colorTailSnake);
  for (let i = 0; i < arrStainTailSnake.length; i++) {
    drawAnyDirectionStainTailSnake(
      arrStainTailSnake[i].x,
      arrStainTailSnake[i].y,
      arrStainTailSnake[i].width,
      arrStainTailSnake[i].height,
      arrStainTailSnake[i].radii,
      arrStainTailSnake[i].linewidth,
      colorOutlineStainSnake,
      colorWestDirectionStainTailSnake
    );
  }
};
// left direction tail snake end

// north direction tail snake start
export const drawNorthDirectionTailSnake = (
  colorTailSnake,
  colorNorthDirectionStainTailSnake,
  colorOutlineStainSnake,
  colorOutlineSnake
) => {
  drawAnyDirectionTailSnake(colorOutlineSnake, colorTailSnake);
  for (let i = 0; i < arrStainTailSnake.length; i++) {
    drawAnyDirectionStainTailSnake(
      arrStainTailSnake[i].x,
      arrStainTailSnake[i].y,
      arrStainTailSnake[i].width,
      arrStainTailSnake[i].height,
      arrStainTailSnake[i].radii,
      arrStainTailSnake[i].linewidth,
      colorOutlineStainSnake,
      colorNorthDirectionStainTailSnake
    );
  }
};
// north direction tail snake end

// south direction tail snake start
export const drawSouthDirectionTailSnake = (
  colorTailSnake,
  colorSouthDirectionStainTailSnake,
  colorOutlineStainSnake,
  colorOutlineSnake
) => {
  drawAnyDirectionTailSnake(colorOutlineSnake, colorTailSnake);
  for (let i = 0; i < arrStainTailSnake.length; i++) {
    drawAnyDirectionStainTailSnake(
      arrStainTailSnake[i].x,
      arrStainTailSnake[i].y,
      arrStainTailSnake[i].width,
      arrStainTailSnake[i].height,
      arrStainTailSnake[i].radii,
      arrStainTailSnake[i].linewidth,
      colorOutlineStainSnake,
      colorSouthDirectionStainTailSnake
    );
  }
};
// south direction tail snake end

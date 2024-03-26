import {
  data,
  ctx,
  grid,
  arrStainBodySnake,
  arrLongStainEastWestFirstBodySnake,
  arrLongStainNorthSouthFirstBodySnake,
} from "../index.js";

// body snake start
export const drawBodySnake = (
  colorSkinSnake,
  colorLongStainSnake,
  colorRoundStainSnake,
  colorOutlineSnake,
  colorOutlineStainSnake
) => {
  let [, ...snakeBody] = data.xySnake;

  for (let body of snakeBody) {
    ctx.beginPath();
    ctx.roundRect(body[0] * grid, body[1] * grid, grid, grid, 10);
    ctx.linewidth = 2;
    ctx.strokeStyle = `${colorOutlineSnake}`;
    ctx.fillStyle = `${colorSkinSnake}`;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    snakeBody.pop();
    snakeBody.push(body);

    // // draw the eight stains body snake start
    const drawStainBodySnake = (x, y, width, height, radii, linewidth) => {
      ctx.beginPath();
      ctx.roundRect(
        body[0] * grid + x,
        body[1] * grid + y,
        grid - width,
        grid - height,
        radii
      );
      ctx.linewidth = linewidth;
      ctx.strokeStyle = `${colorOutlineStainSnake}`;
      ctx.fillStyle = `${colorRoundStainSnake}`;
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    };

    for (let i = 0; i < arrStainBodySnake.length; i++) {
      drawStainBodySnake(
        arrStainBodySnake[i].x,
        arrStainBodySnake[i].y,
        arrStainBodySnake[i].width,
        arrStainBodySnake[i].height,
        arrStainBodySnake[i].radii,
        arrStainBodySnake[i].linewidth
      );
    }
    // // draw the eight stains body snake end

    // // the long stains changes depending on the direction start
    let firstBody = snakeBody[0];
    const drawLongStainFirstBodySnake = (
      x,
      y,
      width,
      height,
      radii,
      linewidth
    ) => {
      ctx.beginPath();
      ctx.roundRect(
        firstBody[0] * grid + x,
        firstBody[1] * grid + y,
        grid - width,
        grid - height,
        radii
      );
      ctx.linewidth = linewidth;
      ctx.strokeStyle = `${colorOutlineStainSnake}`;
      ctx.fillStyle = `${colorLongStainSnake}`;
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    };

    // // draw the four long stains east west for the first body snake start
    switch (data.direction) {
      case "west":
      case "east": {
        for (let i = 0; i < arrLongStainEastWestFirstBodySnake.length; i++) {
          drawLongStainFirstBodySnake(
            arrLongStainEastWestFirstBodySnake[i].x,
            arrLongStainEastWestFirstBodySnake[i].y,
            arrLongStainEastWestFirstBodySnake[i].width,
            arrLongStainEastWestFirstBodySnake[i].height,
            arrLongStainEastWestFirstBodySnake[i].radii,
            arrLongStainEastWestFirstBodySnake[i].linewidth
          );
        }
        break;
      }
      case "north":
      case "south": {
        for (let i = 0; i < arrLongStainNorthSouthFirstBodySnake.length; i++) {
          drawLongStainFirstBodySnake(
            arrLongStainNorthSouthFirstBodySnake[i].x,
            arrLongStainNorthSouthFirstBodySnake[i].y,
            arrLongStainNorthSouthFirstBodySnake[i].width,
            arrLongStainNorthSouthFirstBodySnake[i].height,
            arrLongStainNorthSouthFirstBodySnake[i].radii,
            arrLongStainNorthSouthFirstBodySnake[i].linewidth
          );
        }
        break;
      }
      // // draw the four long stains north south for the first body snake end
    }
    // // the long stain changes depending on the direction end
  }
};
// body snake end

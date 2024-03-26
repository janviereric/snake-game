import { data, ctx, grid } from "../index.js";

// draw the fruit and position it
export const drawFruit = (src, width, height) => {
  const imgFruit = new Image();
  imgFruit.src = src;
  let xFruit = data.xyFruit[0] * grid;
  let yFruit = data.xyFruit[1] * grid;
  if (data.isMenuOpen) {
    // draw the fruit before press to "Jouer" and prevent the image jump
    imgFruit.addEventListener("load", (e) => {
      e.stopPropagation();
      ctx.drawImage(imgFruit, xFruit, yFruit, width, height);
    });
  } else {
    // draw the fruit after press to "Jouer" and prevent the image jump
    ctx.drawImage(imgFruit, xFruit, yFruit, width, height);
  }
};

const containerGame = document.querySelector("#container-game");
containerGame.innerHTML = `<canvas width="600px" height="600px"></canvas>`;
const canvas = containerGame.querySelector("canvas");
export const ctx = canvas.getContext("2d");
export const grid = 40; // 20 * 20

// draw the land like a chessboard
export const drawLand = (colorLightLand, colorDarkLand, colorBorderLand) => {
  ctx.beginPath();
  for (let i = 1; i <= 15; i++) {
    for (let j = 1; j <= 15; j++) {
      ctx.fillStyle = (i + j) % 2 === 0 ? colorLightLand : colorDarkLand;
      ctx.fillRect(grid * (i - 1), grid * (j - 1), 600, 600);
    }
  }
  canvas.style.setProperty("border", `40px solid ${colorBorderLand}`);
  ctx.closePath();
};

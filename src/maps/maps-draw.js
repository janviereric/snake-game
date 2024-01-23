const containerGame = document.querySelector("#container-game");
containerGame.innerHTML = `<canvas width="600px" height="600px"></canvas>`;
const canvas = containerGame.querySelector("canvas");
export const context2D = canvas.getContext("2d");
export const gridElement = 40; // 20 * 20

export const drawMaps = (mapLightColor, mapDarkColor, mapBorderColor) => {
  context2D.beginPath();
  for (let i = 1; i <= 15; i++) {
    for (let j = 1; j <= 15; j++) {
      context2D.fillStyle =
        (i + j) % 2 === 0 ? `${mapLightColor}` : `${mapDarkColor}`;
      context2D.fillRect(
        gridElement * (i - 1),
        gridElement * (j - 1),
        600,
        600
      );
    }
  }
  canvas.style.setProperty("border", `${mapBorderColor}`);
  context2D.closePath();
};

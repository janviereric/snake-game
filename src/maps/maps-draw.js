const canvas = document.querySelector("canvas");
export const context2D = canvas.getContext("2d");

export const gridElement = 40; // 20 * 20

export const drawMaps = (lightMapColor, darkMapColor, borderMapColor) => {
  context2D.beginPath();
  for (let i = 1; i <= 15; i++) {
    for (let j = 1; j <= 15; j++) {
      context2D.fillStyle =
        (i + j) % 2 === 0 ? `${lightMapColor}` : `${darkMapColor}`;
      context2D.fillRect(
        gridElement * (i - 1),
        gridElement * (j - 1),
        600,
        600
      );
    }
  }
  canvas.style.setProperty("border", `${borderMapColor}`);
  context2D.closePath();
};

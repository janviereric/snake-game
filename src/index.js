import "./style.css";

const canvas = document.querySelector("canvas");
const context2D = canvas.getContext("2d");

const drawMap = () => {
  context2D.fillStyle = "#3867d6";
  context2D.fillRect(0, 0, 800, 800);
};

drawMap();

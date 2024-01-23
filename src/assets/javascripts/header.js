import {
  data,
  firstFruitColor,
  firstFruitBorderColor,
  firstFruitBranchColor,
  secondFruitColor,
  secondFruitBorderColor,
  secondFruitBranchColor,
  thirdFruitColor,
  thirdFruitBorderColor,
  thirdFruitBranchColor,
  fourthFruitColor,
  fourthFruitBorderColor,
  fourthFruitBranchColor,
  fifthFruitColor,
  fifthFruitBorderColor,
  fifthFruitBranchColor,
  sixthFruitColor,
  sixthFruitBorderColor,
  sixthFruitBranchColor,
  seventhFruitColor,
  seventhFruitBorderColor,
  seventhFruitBranchColor,
  eighthFruitColor,
  eighthFruitBorderColor,
  eighthFruitBranchColor,
  ninthFruitColor,
  ninthFruitBorderColor,
  ninthFruitBranchColor,
  tenthFruitColor,
  tenthFruitBorderColor,
  tenthFruitBranchColor,
} from "../../index.js";

export const header = (number) => {
  const header = document.querySelector("header");
  header.innerHTML = `
    <h1>Snake Game</h1>
    <div class="container-score">
        <p class="score-number">${number ? number : 0}</p>
        <div class="score-image">
          <canvas width="40px" height="40px"></canvas>
        </div> 
    </div>
    `;
  const scoreImage = header.querySelector(".score-image");
  const canvasScore = scoreImage.querySelector(".score-image > canvas");
  const context2DScore = canvasScore.getContext("2d");
  const gridElementScore = 40;
  const fruitScore = [0, 0];

  const drawFruitsScore = (fruitColor, fruitBorderColor, fruitBranchColor) => {
    context2DScore.beginPath();
    context2DScore.roundRect(
      fruitScore[0] * gridElementScore + 5,
      fruitScore[1] * gridElementScore + 5,
      gridElementScore - 10,
      gridElementScore - 10,
      15
    );
    context2DScore.fillStyle = `${fruitColor}`;
    context2DScore.lineWidth = 2;
    context2DScore.strokeStyle = `${fruitBorderColor}`;
    context2DScore.fill();
    context2DScore.stroke();
    context2DScore.closePath();

    context2DScore.beginPath();
    context2DScore.roundRect(
      fruitScore[0] * gridElementScore + 18,
      fruitScore[1] * gridElementScore + 7,
      gridElementScore - 35,
      gridElementScore - 35,
      5
    );
    context2DScore.fillStyle = `${fruitBranchColor}`;
    context2DScore.fill();
    context2DScore.closePath();
  };

  if (number < 5) {
    drawFruitsScore(
      firstFruitColor,
      firstFruitBorderColor,
      firstFruitBranchColor
    );
  } else if (number > 5 && number < 11) {
    drawFruitsScore(
      secondFruitColor,
      secondFruitBorderColor,
      secondFruitBranchColor
    );
  } else if (number > 10 && number < 16) {
    drawFruitsScore(
      thirdFruitColor,
      thirdFruitBorderColor,
      thirdFruitBranchColor
    );
  } else if (number > 15 && number < 21) {
    drawFruitsScore(
      fourthFruitColor,
      fourthFruitBorderColor,
      fourthFruitBranchColor
    );
  } else if (number > 20 && number < 26) {
    drawFruitsScore(
      fifthFruitColor,
      fifthFruitBorderColor,
      fifthFruitBranchColor
    );
  } else if (number > 25 && number < 31) {
    drawFruitsScore(
      sixthFruitColor,
      sixthFruitBorderColor,
      sixthFruitBranchColor
    );
  } else if (number > 30 && number < 36) {
    drawFruitsScore(
      seventhFruitColor,
      seventhFruitBorderColor,
      seventhFruitBranchColor
    );
  } else if (number > 35 && number < 41) {
    drawFruitsScore(
      eighthFruitColor,
      eighthFruitBorderColor,
      eighthFruitBranchColor
    );
  } else if (number > 40 && number < 46) {
    drawFruitsScore(
      ninthFruitColor,
      ninthFruitBorderColor,
      ninthFruitBranchColor
    );
  } else if (number > 45) {
    drawFruitsScore(
      tenthFruitColor,
      tenthFruitBorderColor,
      tenthFruitBranchColor
    );
  } else {
    // draw fruits score for number = 0
    drawFruitsScore(
      firstFruitColor,
      firstFruitBorderColor,
      firstFruitBranchColor
    );
  }
};

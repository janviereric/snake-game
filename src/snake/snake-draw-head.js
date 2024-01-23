import { context2D, gridElement } from "../index.js";

export const snake = [
  [2, 7],
  [1, 7],
  [0, 7],
];

export const drawSnakeHeadRightDirection = (
  snakeHeadColor,
  snakeBorderColor,
  snakeNostrilColor,
  snakeEyePrimaryColor,
  snakeEyeSecondaryColor,
  snakeEyeTertiaryColor
) => {
  // snake head right direction start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 2,
    snake[0][1] * gridElement,
    gridElement,
    gridElement,
    15
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeHeadColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake right nostril start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 32,
    snake[0][1] * gridElement + 25,
    gridElement - 36,
    gridElement - 38,
    2
  );
  context2D.fillStyle = `${snakeNostrilColor}`;
  context2D.fill();
  context2D.closePath();
  // snake right nostril end

  // snake left nostril start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 32,
    snake[0][1] * gridElement + 12,
    gridElement - 36,
    gridElement - 38,
    2
  );
  context2D.fillStyle = `${snakeNostrilColor}`;
  context2D.fill();
  context2D.closePath();
  // snake left nostril end

  // snake right eye start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 1,
    snake[0][1] * gridElement + 20,
    gridElement - 20,
    gridElement - 20,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeEyePrimaryColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 5,
    snake[0][1] * gridElement + 23,
    gridElement - 25,
    gridElement - 25,
    10
  );
  context2D.fillStyle = `${snakeEyeSecondaryColor}`;
  context2D.fill();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 15,
    snake[0][1] * gridElement + 28,
    gridElement - 35,
    gridElement - 35,
    5
  );
  context2D.fillStyle = `${snakeEyeTertiaryColor}`;
  context2D.fill();
  context2D.closePath();
  // snake right eye end

  // snake left eye start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 1,
    snake[0][1] * gridElement,
    gridElement - 20,
    gridElement - 20,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeEyePrimaryColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 5,
    snake[0][1] * gridElement + 3,
    gridElement - 25,
    gridElement - 25,
    10
  );
  context2D.fillStyle = `${snakeEyeSecondaryColor}`;
  context2D.fill();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 15,
    snake[0][1] * gridElement + 8,
    gridElement - 35,
    gridElement - 35,
    5
  );
  context2D.fillStyle = `${snakeEyeTertiaryColor}`;
  context2D.fill();
  context2D.closePath();
  // snake left eye end
  // snake head right direction end
};

export const drawSnakeHeadLeftDirection = (
  snakeHeadColor,
  snakeBorderColor,
  snakeNostrilColor,
  snakeEyePrimaryColor,
  snakeEyeSecondaryColor,
  snakeEyeTertiaryColor
) => {
  // snake head left direction start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement - 1,
    snake[0][1] * gridElement,
    gridElement,
    gridElement,
    15
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeHeadColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake right nostril start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 4,
    snake[0][1] * gridElement + 13,
    gridElement - 36,
    gridElement - 38,
    2
  );
  context2D.fillStyle = `${snakeNostrilColor}`;
  context2D.fill();
  context2D.closePath();
  // snake right nostril end

  // snake left nostril start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 4,
    snake[0][1] * gridElement + 25,
    gridElement - 36,
    gridElement - 38,
    2
  );
  context2D.fillStyle = `${snakeNostrilColor}`;
  context2D.fill();
  context2D.closePath();
  // snake left nostril end

  // snake right eye start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 19,
    snake[0][1] * gridElement,
    gridElement - 20,
    gridElement - 20,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeEyePrimaryColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 20,
    snake[0][1] * gridElement + 3,
    gridElement - 25,
    gridElement - 25,
    10
  );
  context2D.fillStyle = `${snakeEyeSecondaryColor}`;
  context2D.fill();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 20,
    snake[0][1] * gridElement + 7,
    gridElement - 35,
    gridElement - 35,
    5
  );
  context2D.fillStyle = `${snakeEyeTertiaryColor}`;
  context2D.fill();
  context2D.closePath();
  // snake right eye end

  // snake left eye start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 19,
    snake[0][1] * gridElement + 20,
    gridElement - 20,
    gridElement - 20,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeEyePrimaryColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 20,
    snake[0][1] * gridElement + 23,
    gridElement - 25,
    gridElement - 25,
    10
  );
  context2D.fillStyle = `${snakeEyeSecondaryColor}`;
  context2D.fill();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 20,
    snake[0][1] * gridElement + 28,
    gridElement - 35,
    gridElement - 35,
    5
  );
  context2D.fillStyle = `${snakeEyeTertiaryColor}`;
  context2D.fill();
  context2D.closePath();
  // snake left eye end
  // snake head left direction end
};

export const drawSnakeHeadTopDirection = (
  snakeHeadColor,
  snakeBorderColor,
  snakeNostrilColor,
  snakeEyePrimaryColor,
  snakeEyeSecondaryColor,
  snakeEyeTertiaryColor
) => {
  // snake head top direction start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement,
    snake[0][1] * gridElement - 1,
    gridElement,
    gridElement,
    15
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeHeadColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake right nostril start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 25,
    snake[0][1] * gridElement + 6,
    gridElement - 38,
    gridElement - 36,
    2
  );
  context2D.fillStyle = `${snakeNostrilColor}`;
  context2D.fill();
  context2D.closePath();
  // snake right nostril start

  // snake left nostril start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 13,
    snake[0][1] * gridElement + 6,
    gridElement - 38,
    gridElement - 36,
    2
  );
  context2D.fillStyle = `${snakeNostrilColor}`;
  context2D.fill();
  context2D.closePath();
  // snake left nostril end

  // snake right eye start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 20,
    snake[0][1] * gridElement + 19,
    gridElement - 20,
    gridElement - 20,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeEyePrimaryColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 23,
    snake[0][1] * gridElement + 20,
    gridElement - 25,
    gridElement - 25,
    10
  );
  context2D.fillStyle = `${snakeEyeSecondaryColor}`;
  context2D.fill();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 28,
    snake[0][1] * gridElement + 20,
    gridElement - 35,
    gridElement - 35,
    5
  );
  context2D.fillStyle = `${snakeEyeTertiaryColor}`;
  context2D.fill();
  context2D.closePath();
  // snake right eye end

  // snake left eye start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement,
    snake[0][1] * gridElement + 19,
    gridElement - 20,
    gridElement - 20,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeEyePrimaryColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 2,
    snake[0][1] * gridElement + 20,
    gridElement - 25,
    gridElement - 25,
    10
  );
  context2D.fillStyle = `${snakeEyeSecondaryColor}`;
  context2D.fill();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 7,
    snake[0][1] * gridElement + 20,
    gridElement - 35,
    gridElement - 35,
    5
  );
  context2D.fillStyle = `${snakeEyeTertiaryColor}`;
  context2D.fill();
  context2D.closePath();
  // snake left eye end
  // snake head top direction end
};

export const drawSnakeHeadBottomDirection = (
  snakeHeadColor,
  snakeBorderColor,
  snakeNostrilColor,
  snakeEyePrimaryColor,
  snakeEyeSecondaryColor,
  snakeEyeTertiaryColor
) => {
  // snake head bottom direction start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement,
    snake[0][1] * gridElement + 2,
    gridElement,
    gridElement,
    15
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeHeadColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake right nostril start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 13,
    snake[0][1] * gridElement + 30,
    gridElement - 38,
    gridElement - 36,
    2
  );
  context2D.fillStyle = `${snakeNostrilColor}`;
  context2D.fill();
  context2D.closePath();
  // snake right nostril end

  // snake left nostril start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 25,
    snake[0][1] * gridElement + 30,
    gridElement - 38,
    gridElement - 36,
    2
  );
  context2D.fillStyle = `${snakeNostrilColor}`;
  context2D.fill();
  context2D.closePath();
  // snake left nostril end

  // snake right eye start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement,
    snake[0][1] * gridElement + 2,
    gridElement - 20,
    gridElement - 20,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeEyePrimaryColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 3,
    snake[0][1] * gridElement + 6,
    gridElement - 25,
    gridElement - 25,
    10
  );
  context2D.fillStyle = `${snakeEyeSecondaryColor}`;
  context2D.fill();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 7.5,
    snake[0][1] * gridElement + 16,
    gridElement - 35,
    gridElement - 35,
    5
  );
  context2D.fillStyle = `${snakeEyeTertiaryColor}`;
  context2D.fill();
  context2D.closePath();
  // snake right eye end

  // snake left eye start
  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 20,
    snake[0][1] * gridElement + 2,
    gridElement - 20,
    gridElement - 20,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeEyePrimaryColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 22,
    snake[0][1] * gridElement + 5,
    gridElement - 25,
    gridElement - 25,
    10
  );
  context2D.fillStyle = `${snakeEyeSecondaryColor}`;
  context2D.fill();
  context2D.closePath();

  context2D.beginPath();
  context2D.roundRect(
    snake[0][0] * gridElement + 28,
    snake[0][1] * gridElement + 16,
    gridElement - 35,
    gridElement - 35,
    5
  );
  context2D.fillStyle = `${snakeEyeTertiaryColor}`;
  context2D.fill();
  context2D.closePath();
  // snake left eye end
  // snake head bottom direction end
};

import {
  context2D,
  gridElement,
  snake,
  snakeColorBorder,
  snakeTailColor,
  snakeTailStainColorRightDirection,
  snakeTailStainColorLeftDirection,
  snakeTailStainColorTopDirection,
  snakeTailStainColorBottomDirection,
} from "../snake.js";

export const drawSnakeTailRight = () => {
  let snakeTail = snake[snake.length - 1];
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement,
    gridElement,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailColor;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake tail first stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorRightDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorRightDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 10,
    snakeTail[1] * gridElement + 10,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorRightDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 30,
    snakeTail[1] * gridElement + 10,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorRightDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement + 20,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorRightDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 20,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorRightDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 10,
    snakeTail[1] * gridElement + 30,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorRightDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 30,
    snakeTail[1] * gridElement + 30,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorRightDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail eighth stain start
};

export const drawSnakeTailLeft = () => {
  let snakeTail = snake[snake.length - 1];
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement,
    gridElement,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailColor;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake tail first stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorLeftDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorLeftDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 10,
    snakeTail[1] * gridElement + 10,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorLeftDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 30,
    snakeTail[1] * gridElement + 10,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorLeftDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement + 20,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorLeftDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 20,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorLeftDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 10,
    snakeTail[1] * gridElement + 30,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorLeftDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 30,
    snakeTail[1] * gridElement + 30,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorLeftDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail eighth stain start
};

export const drawSnakeTailTop = () => {
  let snakeTail = snake[snake.length - 1];
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement,
    gridElement,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailColor;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake tail first stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorTopDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorTopDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 10,
    snakeTail[1] * gridElement + 10,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorTopDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 30,
    snakeTail[1] * gridElement + 10,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorTopDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement + 20,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorTopDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 20,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorTopDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 10,
    snakeTail[1] * gridElement + 30,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorTopDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 30,
    snakeTail[1] * gridElement + 30,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorTopDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail eighth stain start
};

export const drawSnakeTailBottom = () => {
  let snakeTail = snake[snake.length - 1];
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement,
    gridElement,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailColor;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake tail first stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorBottomDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail first stain start

  // snake tail second stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorBottomDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail second stain start

  // snake tail third stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 10,
    snakeTail[1] * gridElement + 10,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorBottomDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail third stain start

  // snake tail fourth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 30,
    snakeTail[1] * gridElement + 10,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorBottomDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail fourth stain start

  // snake tail fifth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement + 20,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorBottomDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail fifth stain start

  // snake tail sixth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 20,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorBottomDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail sixth stain start

  // snake tail seventh stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 10,
    snakeTail[1] * gridElement + 30,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorBottomDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail seventh stain start

  // snake tail eighth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 30,
    snakeTail[1] * gridElement + 30,
    gridElement - 30,
    gridElement - 30,
    5
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeTailStainColorBottomDirection;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail eighth stain start
};

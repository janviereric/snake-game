import { context2D, gridElement, snake } from "../index.js";

export const drawSnakeTailRightDirection = (
  snakeTailColor,
  snakeTailStainColorRightDirection,
  snakeTailStainColorLeftDirection,
  snakeTailStainColorTopDirection,
  snakeTailStainColorBottomDirection,
  snakeStainBorderColor,
  snakeBorderColor
) => {
  let snakeTail = snake[snake.length - 1];
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement,
    gridElement,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeTailColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake tail right direction first stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 3,
    snakeTail[1] * gridElement + 3,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorRightDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail right direction first stain end

  // snake tail right direction second stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 3,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorRightDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail right direction second stain end

  // snake tail right direction third stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 12,
    snakeTail[1] * gridElement + 12,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorRightDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail right direction third stain end

  // snake tail right direction fourth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 29,
    snakeTail[1] * gridElement + 12,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorRightDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail right direction fourth stain end

  // snake tail right direction fifth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 3,
    snakeTail[1] * gridElement + 20,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorRightDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail right direction fifth stain end

  // snake tail right direction sixth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 20,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorRightDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail right direction sixth stain end

  // snake tail right direction seventh stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 12,
    snakeTail[1] * gridElement + 29,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorRightDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail right direction seventh stain end

  // snake tail right direction eighth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 29,
    snakeTail[1] * gridElement + 29,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorRightDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail right direction eighth stain end
};

export const drawSnakeTailLeftDirection = (
  snakeTailColor,
  snakeTailStainColorRightDirection,
  snakeTailStainColorLeftDirection,
  snakeTailStainColorTopDirection,
  snakeTailStainColorBottomDirection,
  snakeStainBorderColor,
  snakeBorderColor
) => {
  let snakeTail = snake[snake.length - 1];
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement,
    gridElement,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeTailColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake tail left direction first stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 3,
    snakeTail[1] * gridElement + 3,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorLeftDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail left direction first stain end

  // snake tail left direction second stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 3,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorLeftDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail left direction second stain end

  // snake tail left direction third stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 12,
    snakeTail[1] * gridElement + 12,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorLeftDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail left direction third stain end

  // snake tail left direction fourth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 29,
    snakeTail[1] * gridElement + 12,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorLeftDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail left direction fourth stain end

  // snake tail left direction fifth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 3,
    snakeTail[1] * gridElement + 20,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorLeftDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail left direction fifth stain end

  // snake tail left direction sixth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 20,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorLeftDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail left direction sixth stain end

  // snake tail left direction seventh stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 12,
    snakeTail[1] * gridElement + 29,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorLeftDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail left direction seventh stain end

  // snake tail left direction eighth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 29,
    snakeTail[1] * gridElement + 29,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorLeftDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail left direction eighth stain end
};

export const drawSnakeTailTopDirection = (
  snakeTailColor,
  snakeTailStainColorRightDirection,
  snakeTailStainColorLeftDirection,
  snakeTailStainColorTopDirection,
  snakeTailStainColorBottomDirection,
  snakeStainBorderColor,
  snakeBorderColor
) => {
  let snakeTail = snake[snake.length - 1];
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement,
    gridElement,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeTailColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake tail top direction first stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 3,
    snakeTail[1] * gridElement + 3,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorTopDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail top direction first stain end

  // snake tail top direction second stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 3,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorTopDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail top direction second stain end

  // snake tail top direction third stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 12,
    snakeTail[1] * gridElement + 12,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorTopDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail top direction third stain end

  // snake tail top direction fourth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 29,
    snakeTail[1] * gridElement + 10,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorTopDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail top direction fourth stain end

  // snake tail top direction fifth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 3,
    snakeTail[1] * gridElement + 20,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorTopDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail top direction fifth stain end

  // snake tail sixth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 20,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorTopDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail top direction sixth stain end

  // snake tail top direction seventh stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 12,
    snakeTail[1] * gridElement + 29,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorTopDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail top direction seventh stain end

  // snake tail top direction eighth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 29,
    snakeTail[1] * gridElement + 29,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorTopDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail top direction eighth stain end
};

export const drawSnakeTailBottomDirection = (
  snakeTailColor,
  snakeTailStainColorRightDirection,
  snakeTailStainColorLeftDirection,
  snakeTailStainColorTopDirection,
  snakeTailStainColorBottomDirection,
  snakeStainBorderColor,
  snakeBorderColor
) => {
  let snakeTail = snake[snake.length - 1];
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement,
    snakeTail[1] * gridElement,
    gridElement,
    gridElement,
    10
  );
  context2D.lineWidth = 2;
  context2D.strokeStyle = `${snakeBorderColor}`;
  context2D.fillStyle = `${snakeTailColor}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();

  // snake tail bottom direction first stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 3,
    snakeTail[1] * gridElement + 3,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorBottomDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail bottom direction first stain end

  // snake tail bottom direction second stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 3,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorBottomDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail bottom direction second stain end

  // snake tail bottom direction third stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 12,
    snakeTail[1] * gridElement + 12,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorBottomDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail bottom direction third stain end

  // snake tail bottom direction fourth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 29,
    snakeTail[1] * gridElement + 12,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorBottomDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail bottom direction fourth stain end

  // snake tail bottom direction fifth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 3,
    snakeTail[1] * gridElement + 20,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorBottomDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail bottom direction fifth stain end

  // snake tail bottom direction sixth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 20,
    snakeTail[1] * gridElement + 20,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorBottomDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail bottom direction sixth stain end

  // snake tail bottom direction seventh stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 12,
    snakeTail[1] * gridElement + 29,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorBottomDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail bottom direction seventh stain end

  // snake tail bottom direction eighth stain start
  context2D.beginPath();
  context2D.roundRect(
    snakeTail[0] * gridElement + 29,
    snakeTail[1] * gridElement + 29,
    gridElement - 32,
    gridElement - 32,
    5
  );
  context2D.lineWidth = 1;
  context2D.strokeStyle = `${snakeStainBorderColor}`;
  context2D.fillStyle = `${snakeTailStainColorBottomDirection}`;
  context2D.fill();
  context2D.stroke();
  context2D.closePath();
  // snake tail bottom direction eighth stain end
};

import { context2D, gridElement, snake, direction } from "../index.js";

export const drawSnakeBody = (
  snakeBodyColor,
  snakeBorderColor,
  snakeLongStainColor,
  snakeRoundStainColor,
  snakeStainBorderColor
) => {
  // snake body start
  let [, ...snakeBody] = snake;

  for (let body of snakeBody) {
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement,
      body[1] * gridElement,
      gridElement,
      gridElement,
      10
    );
    context2D.lineWidth = 2;
    context2D.strokeStyle = `${snakeBorderColor}`;
    context2D.fillStyle = `${snakeBodyColor}`;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    snakeBody.pop();
    snakeBody.push(body);

    // snake body first stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 3,
      body[1] * gridElement + 3,
      gridElement - 32,
      gridElement - 32,
      5
    );
    context2D.lineWidth = 1;
    context2D.strokeStyle = `${snakeStainBorderColor}`;
    context2D.fillStyle = `${snakeRoundStainColor}`;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body first stain end

    // snake body second stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 20,
      body[1] * gridElement + 3,
      gridElement - 32,
      gridElement - 32,
      5
    );
    context2D.lineWidth = 1;
    context2D.strokeStyle = `${snakeStainBorderColor}`;
    context2D.fillStyle = `${snakeRoundStainColor}`;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body second stain end

    // snake body third stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 12,
      body[1] * gridElement + 12,
      gridElement - 32,
      gridElement - 32,
      5
    );
    context2D.lineWidth = 1;
    context2D.strokeStyle = `${snakeStainBorderColor}`;
    context2D.fillStyle = `${snakeRoundStainColor}`;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body third stain end

    // snake body fourth stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 29,
      body[1] * gridElement + 12,
      gridElement - 32,
      gridElement - 32,
      5
    );
    context2D.lineWidth = 1;
    context2D.strokeStyle = `${snakeStainBorderColor}`;
    context2D.fillStyle = `${snakeRoundStainColor}`;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body fourth stain end

    // snake body fifth stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 3,
      body[1] * gridElement + 20,
      gridElement - 32,
      gridElement - 32,
      5
    );
    context2D.lineWidth = 1;
    context2D.strokeStyle = `${snakeStainBorderColor}`;
    context2D.fillStyle = `${snakeRoundStainColor}`;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body fifth stain end

    // snake body sixth stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 20,
      body[1] * gridElement + 20,
      gridElement - 32,
      gridElement - 32,
      5
    );
    context2D.lineWidth = 1;
    context2D.strokeStyle = `${snakeStainBorderColor}`;
    context2D.fillStyle = `${snakeRoundStainColor}`;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body sixth stain end

    // snake body seventh stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 12,
      body[1] * gridElement + 29,
      gridElement - 32,
      gridElement - 32,
      5
    );
    context2D.lineWidth = 1;
    context2D.strokeStyle = `${snakeStainBorderColor}`;
    context2D.fillStyle = `${snakeRoundStainColor}`;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body seventh stain end

    // snake body eighth stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 29,
      body[1] * gridElement + 29,
      gridElement - 32,
      gridElement - 32,
      5
    );
    context2D.lineWidth = 1;
    context2D.strokeStyle = `${snakeStainBorderColor}`;
    context2D.fillStyle = `${snakeRoundStainColor}`;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body eighth stain end

    let firstBody = snakeBody[0];
    if (direction === "east" || direction === "west") {
      // snake body first long stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 3,
        firstBody[1] * gridElement + 5,
        gridElement - 25,
        gridElement - 30,
        5
      );
      context2D.lineWidth = 1;
      context2D.strokeStyle = `${snakeStainBorderColor}`;
      context2D.fillStyle = `${snakeLongStainColor}`;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake body first long stain end

      // snake body second long stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 3,
        firstBody[1] * gridElement + 25,
        gridElement - 25,
        gridElement - 30,
        5
      );
      context2D.lineWidth = 1;
      context2D.strokeStyle = `${snakeStainBorderColor}`;
      context2D.fillStyle = `${snakeLongStainColor}`;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake body second long stain end

      // snake body third long stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 22,
        firstBody[1] * gridElement + 5,
        gridElement - 25,
        gridElement - 30,
        5
      );
      context2D.lineWidth = 1;
      context2D.strokeStyle = `${snakeStainBorderColor}`;
      context2D.fillStyle = `${snakeLongStainColor}`;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake body third long stain end

      // snake body fourth long stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 22,
        firstBody[1] * gridElement + 25,
        gridElement - 25,
        gridElement - 30,
        5
      );
      context2D.lineWidth = 1;
      context2D.strokeStyle = `${snakeStainBorderColor}`;
      context2D.fillStyle = `${snakeLongStainColor}`;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake body fourth long stain end
    } else {
      // snake body first long stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 5,
        firstBody[1] * gridElement + 3,
        gridElement - 30,
        gridElement - 25,
        5
      );
      context2D.lineWidth = 1;
      context2D.strokeStyle = `${snakeStainBorderColor}`;
      context2D.fillStyle = `${snakeLongStainColor}`;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake body first long stain end

      // snake body second long stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 5,
        firstBody[1] * gridElement + 22,
        gridElement - 30,
        gridElement - 25,
        5
      );
      context2D.lineWidth = 1;
      context2D.strokeStyle = `${snakeStainBorderColor}`;
      context2D.fillStyle = `${snakeLongStainColor}`;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake first body second stain end

      // snake first body third stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 25,
        firstBody[1] * gridElement + 3,
        gridElement - 30,
        gridElement - 25,
        5
      );
      context2D.lineWidth = 1;
      context2D.strokeStyle = `${snakeStainBorderColor}`;
      context2D.fillStyle = `${snakeLongStainColor}`;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake body third long stain end

      // snake body fourth long stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 25,
        firstBody[1] * gridElement + 22,
        gridElement - 30,
        gridElement - 25,
        5
      );
      context2D.lineWidth = 1;
      context2D.strokeStyle = `${snakeStainBorderColor}`;
      context2D.fillStyle = `${snakeLongStainColor}`;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake body fourth long stain end
    }
  }
  // snake body end
};

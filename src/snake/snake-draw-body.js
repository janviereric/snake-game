import {
  context2D,
  gridElement,
  snake,
  snakeBodyColor,
  snakeBodyStainColor,
  snakeFirstBodyStainColor,
  snakeColorBorder,
  direction,
} from "../index.js";

export const drawSnakeBody = () => {
  // snake body start
  let [, ...snakeBody] = snake;
  context2D.strokeStyle = snakeColorBorder;
  context2D.fillStyle = snakeBodyColor;
  for (let body of snakeBody) {
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement,
      body[1] * gridElement,
      gridElement,
      gridElement,
      5
    );
    context2D.lineWidth = 2;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    snakeBody.pop();
    snakeBody.push(body);

    // snake body first stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement,
      body[1] * gridElement,
      gridElement - 30,
      gridElement - 30,
      5
    );
    context2D.lineWidth = 2;
    context2D.strokeStyle = snakeColorBorder;
    context2D.fillStyle = snakeBodyStainColor;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body first stain end

    // snake body second stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 10,
      body[1] * gridElement + 10,
      gridElement - 30,
      gridElement - 30,
      5
    );
    context2D.lineWidth = 2;
    context2D.strokeStyle = snakeColorBorder;
    context2D.fillStyle = snakeBodyStainColor;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body second stain end

    // snake body third stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 20,
      body[1] * gridElement,
      gridElement - 30,
      gridElement - 30,
      5
    );
    context2D.lineWidth = 2;
    context2D.strokeStyle = snakeColorBorder;
    context2D.fillStyle = snakeBodyStainColor;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body third stain end

    // snake body fourth stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 30,
      body[1] * gridElement + 10,
      gridElement - 30,
      gridElement - 30,
      5
    );
    context2D.lineWidth = 2;
    context2D.strokeStyle = snakeColorBorder;
    context2D.fillStyle = snakeBodyStainColor;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body fourth stain end

    // snake body fifth stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement,
      body[1] * gridElement + 20,
      gridElement - 30,
      gridElement - 30,
      5
    );
    context2D.lineWidth = 2;
    context2D.strokeStyle = snakeColorBorder;
    context2D.fillStyle = snakeBodyStainColor;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body fifth stain end

    // snake body sixth stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 20,
      body[1] * gridElement + 20,
      gridElement - 30,
      gridElement - 30,
      5
    );
    context2D.lineWidth = 2;
    context2D.strokeStyle = snakeColorBorder;
    context2D.fillStyle = snakeBodyStainColor;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body sixth stain end

    // snake body seventh stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 10,
      body[1] * gridElement + 30,
      gridElement - 30,
      gridElement - 30,
      5
    );
    context2D.lineWidth = 2;
    context2D.strokeStyle = snakeColorBorder;
    context2D.fillStyle = snakeBodyStainColor;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body seventh stain end

    // snake body eighth stain start
    context2D.beginPath();
    context2D.roundRect(
      body[0] * gridElement + 30,
      body[1] * gridElement + 30,
      gridElement - 30,
      gridElement - 30,
      5
    );
    context2D.lineWidth = 2;
    context2D.strokeStyle = snakeColorBorder;
    context2D.fillStyle = snakeBodyStainColor;
    context2D.fill();
    context2D.stroke();
    context2D.closePath();
    // snake body eighth stain end

    let firstBody = snakeBody[0];
    if (direction === "e" || direction === "o") {
      // snake first body first stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 3,
        firstBody[1] * gridElement + 5,
        gridElement - 25,
        gridElement - 30,
        5
      );
      context2D.lineWidth = 2;
      context2D.strokeStyle = snakeColorBorder;
      context2D.fillStyle = snakeFirstBodyStainColor;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake first body first stain end

      // snake first body second stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 3,
        firstBody[1] * gridElement + 25,
        gridElement - 25,
        gridElement - 30,
        5
      );
      context2D.lineWidth = 2;
      context2D.strokeStyle = snakeColorBorder;
      context2D.fillStyle = snakeFirstBodyStainColor;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake first body second stain end

      // snake first body third stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 22,
        firstBody[1] * gridElement + 5,
        gridElement - 25,
        gridElement - 30,
        5
      );
      context2D.lineWidth = 2;
      context2D.strokeStyle = snakeColorBorder;
      context2D.fillStyle = snakeFirstBodyStainColor;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake first body third stain end

      // snake first body fourth stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 22,
        firstBody[1] * gridElement + 25,
        gridElement - 25,
        gridElement - 30,
        5
      );
      context2D.lineWidth = 2;
      context2D.strokeStyle = snakeColorBorder;
      context2D.fillStyle = snakeFirstBodyStainColor;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake first body fourth stain end
    } else {
      // snake first body first stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 5,
        firstBody[1] * gridElement + 3,
        gridElement - 30,
        gridElement - 25,
        5
      );
      context2D.lineWidth = 2;
      context2D.strokeStyle = snakeColorBorder;
      context2D.fillStyle = snakeFirstBodyStainColor;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake first body first stain end

      // snake first body second stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 5,
        firstBody[1] * gridElement + 22,
        gridElement - 30,
        gridElement - 25,
        5
      );
      context2D.lineWidth = 2;
      context2D.strokeStyle = snakeColorBorder;
      context2D.fillStyle = snakeFirstBodyStainColor;
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
      context2D.lineWidth = 2;
      context2D.strokeStyle = snakeColorBorder;
      context2D.fillStyle = snakeFirstBodyStainColor;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake first body third stain end

      // snake first body fourth stain start
      context2D.beginPath();
      context2D.roundRect(
        firstBody[0] * gridElement + 25,
        firstBody[1] * gridElement + 22,
        gridElement - 30,
        gridElement - 25,
        5
      );
      context2D.lineWidth = 2;
      context2D.strokeStyle = snakeColorBorder;
      context2D.fillStyle = snakeFirstBodyStainColor;
      context2D.fill();
      context2D.stroke();
      context2D.closePath();
      // snake first body fourth stain end
    }
  }
  // snake body first stain start
  // snake body end
};

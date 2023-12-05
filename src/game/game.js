import "../assets/css/style.css";
import "./game.css";

import { drawMap } from "../map/map.js";
import { snakePosition, drawSnakeBody, move } from "../snake/snake.js";

drawMap();
snakePosition();
drawSnakeBody();
requestAnimationFrame(move);

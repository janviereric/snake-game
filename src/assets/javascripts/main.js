import {
  mapLands,
  fruitsAppear,
  snakePosition,
  snakeMoltBody,
  header,
  menu,
  footer,
} from "../../index.js";

export const main = () => {
  header();
  menu();
  footer();

  // draw the game before started
  mapLands();
  fruitsAppear();
  snakePosition();
  snakeMoltBody();
};

main();

import { data, arrImgFruit } from "../../index.js";

export const header = (number) => {
  const numberHeaderFruit = document.querySelector("#number-header-fruit");
  const imgHeaderFruit = document.querySelector("#img-header-fruit");
  // allows to display the specific fruit
  numberHeaderFruit.innerHTML = `${number ? number : 0}`;
  // allows to display the specific fruit
  arrImgFruit.forEach((fruit, i) => {
    if (fruit.name === data.fruit) {
      imgHeaderFruit.innerHTML = `<img src="${arrImgFruit[i].src}" alt="${arrImgFruit[i].alt}" />`;
      const imgFruit = imgHeaderFruit.querySelector("img");
      imgFruit.setAttribute("height", `${arrImgFruit[i].height}`);
      imgFruit.setAttribute("width", `${arrImgFruit[i].width}`);
    }
  });
};

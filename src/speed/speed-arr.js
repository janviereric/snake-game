import { imgNormal, imgSlow, imgFast, imgScalable } from "../index.js";

export const arrImgSpeed = [
  {
    src: imgNormal,
    alt: "image normale",
    height: 40,
    width: 40,
    name: "normal",
    txt: "La vitesse <span>normale</span> a été selectionnée.",
  },
  {
    src: imgSlow,
    alt: "image lente",
    height: 40,
    width: 40,
    name: "slow",
    txt: "La vitesse <span>lente</span> a été selectionnée.",
  },
  {
    src: imgFast,
    alt: "image rapide",
    height: 40,
    width: 40,
    name: "fast",
    txt: "La vitesse <span>rapide</span> a été selectionnée.",
  },
  {
    src: imgScalable,
    alt: "image évolutive",
    height: 40,
    width: 40,
    name: "scalable",
    txt: "La vitesse <span>évolutive</span> a été selectionnée.",
  },
];

export const arrLevelSpeed = [
  {
    speed: 700,
    name: "normal",
    txt: "normale.",
  },
  {
    speed: 500,
    name: "slow",
    txt: "lente",
  },
  {
    speed: 900,
    name: "fast",
    txt: "rapide",
  },
  {
    speed: 500,
    name: "scalable",
    txt: "évolutive",
  },
];

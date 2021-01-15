// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths

import { SVG } from "@svgdotjs/svg.js";

// canvas Data
const canvaW = 500,
  canvaH = 200;
const scale = 1;

// invoke Data
let adnX = 0;
let adnY = 100;
let adnSize = canvaW;
let adnScalar = 1000; //bp on adn track
let separation = 0;
let x = 100; //leftPosition
// gene data
let name = "glnA";
let size = 500;
let strand = "reverse"; // default forward
// draw data
let color = "aqua";
let opacity = 1;
let stroke = { color: "#000", width: 1, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;
if (sizeP <= 30) {
  sizeP = 30;
}
//Canvas Create
const draw = SVG().addTo("#gene").size(adnSize, canvaH);
// DNA Create
const adn = draw
  .line(adnX, adnY, adnSize, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

// gene draw parameters
const geneH = 40;
const rowW = 25;
const lx1 = sizeP + adnX + x;
const ly1 = geneH;
const lx2 = sizeP + adnX - rowW + x;
const ly2 = 0;
const gene = draw.path(
  "m " +
    (x + adnX) +
    "," +
    geneH / 2 +
    " v " +
    geneH +
    " h " +
    (sizeP - rowW) +
    " v " +
    geneH / 2 +
    " L " +
    lx1 +
    "," +
    ly1 +
    " " +
    lx2 +
    "," +
    ly2 +
    " v " +
    geneH / 2 +
    " z"
);
gene.fill(color);
gene.stroke(stroke);
gene.opacity(opacity);
gene.id("gene");

// name draw
const text = draw.text(name);
text.font({
  family: "Arial",
  size: 18,
  separation: "middle"
});
const nlet = name.length;

// strand effect
if (strand === "reverse") {
  gene.rotate(180).move(x + adnX, -separation - adnY);
  text.move(x + sizeP / 2 - nlet * 5, geneH + adnY + separation / 2 - 10);
} else {
  let y = -separation + adnY - geneH * 2;
  let xi = x + adnX;
  text.move(x + sizeP / 2 - nlet * 5, geneH - separation / 2);
  gene.move(xi, y);
}

let grup = draw.group();
grup.add(adn);
grup.add(gene);
grup.add(text);
grup.scale(scale);

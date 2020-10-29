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
let separation = 10;
let x = 0; //leftPosition
// Operon data
let name = "Operon";
let size = 500;
let strand = "revers"; // default forward

// draw data
let color = "#D552F8";
let opacity = 1;
let stroke = { color: "#000", width: 1, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;
if (sizeP <= 30) {
  sizeP = 30;
}
//Canvas Create
const draw = SVG().addTo("#operon").size(adnSize, canvaH);
// DNA Create
const adn = draw
  .line(adnX, adnY, adnSize, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

// operon draw parameters
const operonH = 40;
const rowW = 30;
const lx1 = sizeP + adnX + x;
const ly1 = operonH;
const lx2 = sizeP + adnX - rowW + x;
//const ly2 = 0;
const operon = draw.path(
  " m " +
    (x + adnX) +
    "," +
    operonH / 2 +
    " v " +
    operonH +
    " h " +
    (sizeP - rowW) +
    " L " +
    lx1 +
    "," +
    ly1 +
    " " +
    lx2 +
    "," +
    operonH / 2 +
    " z"
);
operon.fill(color);
operon.stroke(stroke);
operon.opacity(opacity);

// name draw
const text = draw.text(name);
text.font({
  family: "Arial",
  size: 18,
  separation: ""
});
const nlet = name.length;

// strand effect
if (strand === "reverse") {
  operon.rotate(180).move(x + adnX, -separation - adnY);
  text.move(x + sizeP / 2 - nlet * 5, operonH + 15 + adnY + separation / 2);
} else {
  let y = -separation + adnY - operonH * 2;
  let xi = x + adnX;
  text.move(x + sizeP / 2 - nlet * 5, operonH - 15 - separation / 2);
  operon.move(xi, y);
}

let grup = draw.group();
grup.add(adn);
grup.add(operon);
grup.add(text);
grup.scale(scale);

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
// gene data
let name = "rna";
let size = 10;
let strand = "forwar"; // default forward

// draw data
let color = "red";
let stroke = { color: "#000", width: 3, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;
if (sizeP <= 20) {
  sizeP = 20;
}
//Canvas Create
const draw = SVG().addTo("#rna").size(adnSize, canvaH);
// DNA Create
const adn = draw
  .line(adnX, adnY, adnSize, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

const rnaH = 60;

var rna = draw.rect(rnaH, rnaH / 3);

//position & stroke
let y = adnY - separation;
let xi = x + adnX;
rna.fill(color);
rna.stroke(stroke).move(xi, y);

//draw lines
const lx = x + adnX;
const ly = adnY - separation - rnaH / 3 - 20;
var linea1 = draw
  .line(10, 0, 10, rnaH / 3)
  .stroke(stroke)
  .move(lx + 60, ly);

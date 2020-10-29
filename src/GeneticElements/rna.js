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
let separation = 30;
let x = 0; //leftPosition
// gene data
let name = "rna";
let size = 10;
let strand = "reverse"; // default forward

// draw data
let color = "#000";
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

//draw RNA
const rnaH = 60;

var rna = draw.rect(rnaH, rnaH / 3);

//position & stroke
let y = adnY - separation - 20;
let xi = x + adnX;
rna.fill("none");
rna.stroke(stroke).move(xi, y);

//draw lines
const lx = x + adnX;
const ly = adnY - separation;
var linea1 = draw
  .line(10, 0, 10, rnaH / 3)
  .stroke(stroke)
  .move(lx + 60, ly);
var linea2 = draw
  .line(10, 0, 10, rnaH / 3)
  .stroke(stroke)
  .move(lx + 10, ly);
var linea3 = draw
  .line(10, 0, 10, rnaH / 3)
  .stroke(stroke)
  .move(lx + 20, ly);
var linea4 = draw
  .line(10, 0, 10, rnaH / 3)
  .stroke(stroke)
  .move(lx + 30, ly);
var linea5 = draw
  .line(10, 0, 10, rnaH / 3)
  .stroke(stroke)
  .move(lx + 40, ly);
var linea6 = draw
  .line(10, 0, 10, rnaH / 3)
  .stroke(stroke)
  .move(lx + 50, ly);

// name draw
const text = draw.text(name);
text.font({
  family: "Arial",
  size: 18,
  separation: "middle"
});

//strand effect
if (strand === "reverse") {
  var group = draw.group();
  group.add(rna);
  group.add(linea1);
  group.add(linea2);
  group.add(linea3);
  group.add(linea4);
  group.add(linea5);
  group.add(linea6);

  group.rotate(180).move(xi, adnY - separation - rnaH - 20);
  text.move(xi + rnaH / 4, adnY + rnaH - 10);
} else {
  text.move(xi + rnaH / 4, adnY - rnaH - 10);
}

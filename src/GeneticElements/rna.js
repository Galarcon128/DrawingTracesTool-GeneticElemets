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

// rna data
let name = "rna";
let size = 50;
let strand = "revers"; // default forward

// draw data
let color = "#000";
let stroke = { color: "#000", width: 1, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;

//Canvas Create
const draw = SVG().addTo("#rna").size(adnSize, canvaH);
// DNA Create
const adn = draw
  .line(adnX, adnY, adnSize, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

//draw RNA
const rnax = sizeP;
var rnay = 10;

var rna = draw.rect(rnax, rnay);

//stroke
rna.stroke(stroke);
rna.fill("color");

//draw lines properties

const ly = adnY - separation - rnay;

let l = x + adnX + sizeP;
let i = l - sizeP / 5;
let n = i - sizeP / 5;
let e = n - sizeP / 5;
let s = e - sizeP / 5;
let p = s - sizeP / 5;

var line1 = draw
  .line(l, 0, l, rnay * 2)
  .stroke(stroke)
  .move(l, ly);
var line2 = draw
  .line(i, 0, i, rnay * 2)
  .stroke(stroke)
  .move(i, ly);
var line3 = draw
  .line(n, 0, n, rnay * 2)
  .stroke(stroke)
  .move(n, ly);
var line4 = draw
  .line(e, 0, e, rnay * 2)
  .stroke(stroke)
  .move(e, ly);
var line5 = draw
  .line(s, 0, s, rnay * 2)
  .stroke(stroke)
  .move(s, ly);
var line6 = draw
  .line(p, 0, p, rnay * 2)
  .stroke(stroke)
  .move(p, ly);

let xi = x + adnX;
let y = adnY - separation;
rna.move(xi, y);

// name draw
const text = draw.text(name);
text.font({
  family: "Arial",
  size: 18,
  separation: "middle"
});
var group = draw.group();
group.add(rna);
group.add(line1);
group.add(line2);
group.add(line3);
group.add(line4);
group.add(line5);
group.add(line6);
//strand effect
if (strand === "reverse") {
  group.move(x + adnX, adnY + separation);
  text.move(x + adnX + sizeP / 4, adnY + separation + rnay + 10);
} else {
  group.rotate(180);
  group.move(x + adnX, adnY - separation);
  text.move(x + adnX + sizeP / 4, adnY - 50);
}

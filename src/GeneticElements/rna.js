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
let size = 100;
let strand = "revers"; // default forward

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
const rnax = sizeP;
var rnay = 10;
if (rnay >= 10) {
  rnay = 10;
}
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

//strand effect
if (strand === "reverse") {
  var reversegroup = draw.group();
  reversegroup.add(rna);
  reversegroup.add(line1);
  reversegroup.add(line2);
  reversegroup.add(line3);
  reversegroup.add(line4);
  reversegroup.add(line5);
  reversegroup.add(line6);

  reversegroup.rotate(360);
  reversegroup.move(x + adnX, adnY + separation);

  text.move(x + adnX + sizeP / 4, adnY + separation + rnay + 10);
} else {
  var forwardgroup = draw.group();
  forwardgroup.add(rna);
  forwardgroup.add(line1);
  forwardgroup.add(line2);
  forwardgroup.add(line3);
  forwardgroup.add(line4);
  forwardgroup.add(line5);
  forwardgroup.add(line6);

  forwardgroup.rotate(180);
  forwardgroup.move(x + adnX, adnY - separation);
  text.move(x + adnX + sizeP / 4, adnY - 50);
}
//console.log(size);

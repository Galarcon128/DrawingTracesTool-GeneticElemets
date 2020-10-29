import { SVG } from "@svgdotjs/svg.js";

// canvas Data
const canvaW = 500,
  canvaH = 200;
const scale = 1;

// invoke Data
let adnX = 10;
let adnY = 100;
let adnSize = canvaW;
let adnScalar = 1000; //bp on adn track
let separation = 10;
let x = 0; //leftPosition
// gene data
let name = "Promoter";
let size = 100;
if (size <= 100) {
  size = 100;
}
let strand = "revers"; // default forward

// draw data
let color = "aqua";
let opacity = 1;
let stroke = { color: "#000", width: 1, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;
if (sizeP <= 30) {
  sizeP = 30;
}
//Canvas Create
const draw = SVG().addTo("#promoter").size(adnSize, canvaH);
// DNA Create
const adn = draw
  .line(adnX, adnY, adnSize, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

//Promoter draw parameters
const horizontal = 30;

var promoter = draw.path(
  "M" +
    (x + adnX) +
    "," +
    size +
    "V " +
    sizeP +
    "H " +
    (horizontal + x + adnX) +
    "v"
);
let px = x + adnX;
let py = -separation + adnY - size + sizeP;

promoter.fill("none").move(px, py);
promoter.stroke(stroke);

//Draw little arrow
var arrow = draw.path("m 65,45 5,5 -5,5 v 0");

let ax = x + adnX + horizontal - 5;
let ay = -separation + adnY - sizeP - 5;
arrow.fill("none").move(ax, ay);
arrow.stroke(stroke);

// name draw
const text = draw.text(name);
text.font({
  family: "Arial",
  size: 8,
  separation: "middle"
});

if (strand === "reverse") {
  var group = draw.group();
  group.add(arrow).move(ax, ay);
  group.add(promoter).move(x + adnX - horizontal, adnY + separation);
  text.move(x + adnX - horizontal, adnY + separation + sizeP + 5);
  group.rotate(180);
} else {
  text.move(x + adnX - horizontal + 20, adnY - separation - sizeP - 10);
}

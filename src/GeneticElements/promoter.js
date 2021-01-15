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
let x = 0; //leftPosition
// gene data
let name = "Promoter";
let strand = "revers"; // default forward

// draw data
let stroke = {
  color: "#000",
  width: 1,
  linecap: "round",
  linejoin: "round",
  dasharray: 3
};

//Canvas Create
const draw = SVG().addTo("#promoter").size(adnSize, canvaH);

// DNA Create
const adn = draw
  .line(adnX, adnY, adnSize, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

//Promoter draw parameters
const horizontal = 30;
let altura = 40 + separation;
var promoter = draw.path("M 0 0 V " + -altura + "H " + horizontal + "v");
let px = x + adnX;
let py = adnY - altura;

promoter.fill("none").move(px, py);
promoter.stroke(stroke);

//Draw little arrow
var arrow = draw.path("m 0,0 5,5 -5,5 v 0");

let ax = x + adnX + horizontal - 4;
let ay = adnY - altura - 5;
arrow.fill("none").move(ax, ay);
arrow.stroke(stroke);

// name draw
const text = draw.text(name);
text.font({
  family: "Arial",
  size: 8,
  separation: "middle"
});

//strand effect
if (strand === "reverse") {
  var group = draw.group();
  group.add(arrow).move(ax, ay);
  group.add(promoter).move(x + adnX - horizontal, adnY);
  group.rotate(180);
  text.move(x + adnX - horizontal, adnY + altura + 5);
} else {
  text.move(x + adnX, adnY - altura - 15);
}

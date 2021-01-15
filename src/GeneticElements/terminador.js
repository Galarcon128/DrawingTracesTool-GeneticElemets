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

var draw = SVG().addTo("#terminador").size(canvaW, canvaH);
draw
  .line(adnX, adnY, canvaW, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

//terminador data
let name = "terminador";
let size = 40;
let strand = "revers"; // default forward

// draw data
let opacity = 1;
let stroke = { color: "#000", width: 1, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;
if (sizeP <= 20) {
  sizeP = 20;
}

let hline = 1;
if (sizeP >= 20) {
  hline = sizeP / 2 - 9;
}
var altura = 60 + separation;
var head = draw.path(
  "M 23.2 28 L 23.2 27.1 A 14.7 14.7 0 0 0 30 14.7 A 14.7 14.7 0 0 0 15.2 0 L 15.2 0 A 14.7 14.7 0 0 0 0.5 14.7 A 14.7 14.7 0 0 0 7.2 27.1 L 7.2 28"
);
let headX = adnX + x + (hline - 6);
let headY = adnY - altura - 32;
head.fill("none").move(headX, headY);
head.stroke(stroke);
head.opacity(opacity);

var body = draw.path(
  "M 0,0 v " +
    altura +
    " h -" +
    hline +
    " v 5 h " +
    sizeP +
    " v -5 h -" +
    hline +
    " v " +
    -altura
);
let bodyX = x + adnX;
let bodyY = adnY - altura - 5;
body.fill("none").move(bodyX, bodyY);
body.stroke(stroke);
body.opacity(opacity);

if (strand === "reverse") {
  var group = draw.group();
  group.add(head);
  group.add(body);
  group.rotate(180).move(x + adnX, headY - altura - 34);
}

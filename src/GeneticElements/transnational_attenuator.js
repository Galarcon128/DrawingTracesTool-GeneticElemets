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

var draw = SVG().addTo("#transnational").size(canvaW, canvaH);
draw
  .line(adnX, adnY, canvaW, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

//terminador data
let name = "terminador";
let size = 50;
let strand = "revers"; // default forward

// draw data
let color = "aqua";
let opacity = 1;
let stroke = { color: "#000", width: 2, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;
if (sizeP <= 30) {
  sizeP = 30;
}
var altura = 60;
let hline = 1;
if (size >= 20) {
  hline = size / 2 - 9;
}

let ancho = size;
if (ancho < 20) {
  ancho = 20;
}
var body = draw.path(
  "M 0,0 v " +
    altura +
    " h -" +
    hline +
    " v 5 h " +
    ancho +
    " v -5 h -" +
    hline +
    " v " +
    -altura
);
let bodyX = x + adnX;
let bodyY = adnY - altura - 5;
body.fill(color).move(bodyX, bodyY);
body.stroke(stroke);
body.opacity(opacity);

//draw head
let headH = 30;
var head = draw.circle(headH);

let headX = adnX + x + (hline - 6);
let headY = adnY - altura - 35;
head.fill(color).move(headX, headY);
head.stroke(stroke);
head.opacity(opacity);

//draw rect
var lx = sizeP / 4;
if (lx < 20) {
  lx = 15;
} else if (lx >= 25) {
  lx = 20;
}
var ly = sizeP / 2;
if (ly < 20) {
  ly = 30;
} else if (ly >= 50) {
  ly = 30;
}
var rect = draw.rect(lx, ly);

let rectX = adnX + x + (hline + 10);
let rectY = adnY - separation - altura + 10;
rect.fill(color).move(rectX, rectY);
rect.stroke(stroke);

if (strand === "reverse") {
  var group = draw.group();
  group.add(head);
  group.add(body);
  group.add(rect);
  group.rotate(180).move(x + adnX, headY - altura - 34);
}

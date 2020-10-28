import { SVG } from "@svgdotjs/svg.js";

const canvaW = 200,
  canvaH = 200;

let adnX = 0;
let adnY = 100;
let anchor = 10;
let name = "operon";
let posLeft = 10;
let posRight = 150;
let size = posRight - posLeft;
let strand = "revers";
let color = "purple";
let opacity = 0.6;
let stroke = { color: "#000", width: 1, linecap: "round", linejoin: "round" };

const draw = SVG().addTo("#operon").size(canvaW, canvaH);

draw
  .line(adnX, adnY, canvaW, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

const operonH = 40;
const rowW = 25;
const lx1 = posRight + adnX;
const ly1 = operonH;
const lx2 = posRight + adnX - rowW;
const ly2 = 0;
const operon = draw.path(
  " m " +
    (posLeft + adnX) +
    "," +
    operonH / 2 +
    " v " +
    operonH +
    " h " +
    (size - rowW) +
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

if (strand === "reverse") {
  operon.rotate(180).move(posLeft + adnX, -anchor - adnY);
} else {
  operon.move(posLeft + adnX, -anchor + adnY - operonH * 2);
}

import { SVG } from "@svgdotjs/svg.js";

const canvaW = 200,
  canvaH = 200;

let adnX = 0;
let adnY = 100;
let anchor = 10;
let name = "promoter";
let posLeft = 10;
let posRight = 50;
let size = posRight - posLeft;
var strand = "revers";

let stroke = { color: "#000", width: 2, linecap: "round", linejoin: "round" };

const draw = SVG().addTo("#promoter").size(canvaW, canvaH);

draw
  .line(adnX, adnY, canvaW, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

const promoterH = 100;
const rowW = 10;
const lx1 = promoterH;

var promoter = draw.path(
  "M" +
    (posLeft + adnX) +
    "," +
    promoterH +
    "V " +
    promoterH / 2 +
    "h " +
    (size - rowW) +
    "L 30 40 40 50 30 60 " +
    "v"
);
promoter.fill("none").move(5, 5);
promoter.stroke(stroke);

/*var head = draw.path("m 65,45 5,5 -5,5 v 0");
head.fill("none").move(20, 0);
head.stroke(stroke);
*/
if (strand === "reverse") {
  //group.add(head);
  promoter.rotate(180).move(posLeft + adnX, -anchor - adnY);
}

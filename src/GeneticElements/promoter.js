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
let name = "araC";
let size = 40;
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

const promoterH = 100;
//const rowW = 10;
const lx1 = promoterH;

var promoter = draw.path(
  "M" +
    (x + adnX) +
    "," +
    promoterH +
    "V " +
    promoterH / 2 +
    "h " +
    size +
    //"L 30 40 40 50 30 60 " +
    "v"
);
promoter.fill("none").move(5, 5);
promoter.stroke(stroke);

// name draw
const text = draw.text(name);
text.font({
  family: "Arial",
  size: 12,
  separation: "middle"
});
//const nlet = name.length;

/*var head = draw.path("m 65,45 5,5 -5,5 v 0");
head.fill("none").move(20, 0);
head.stroke(stroke);
*/
if (strand === "reverse") {
  //group.add(head);
  //text.move(posLeft-adnY-anchor-adnY)
  //promoter.rotate(180).move(posLeft + adnX, -anchor - adnY);
}

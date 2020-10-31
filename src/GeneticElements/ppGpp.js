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
let x = 10; //leftPosition

// ppGpp data
let name = "DksA";
let size = 100;
let strand = "revers"; // default forward

// draw data
let opacity = 0.9;
let color = "green";
let stroke = { color: "#000", width: 3, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;
if (sizeP <= 20) {
  sizeP = 20;
}
//Canvas Create
const draw = SVG().addTo("#ppGpp").size(adnSize, canvaH);
// DNA Create
const adn = draw
  .line(adnX, adnY, adnSize, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

//draw ppGpp
let ppGppH = sizeP;
let ppGppy = sizeP / 2;
var ppGpp = draw.ellipse(ppGppH, ppGppy);

//stroke
ppGpp.stroke(stroke);
ppGpp.fill(color);

/*// name draw
const text = draw.text(name);
text.font({
  family: "Arial",
  size: 18,
  separation: "middle"
});
*/
let xi = x + adnX;
let y = adnY - separation - ppGppy;
if (name === "DksA") {
  var DksA = draw.ellipse(ppGppH, ppGppy);
  DksA.stroke(stroke).move(xi, y);
  DksA.fill(color);
  DksA.opacity(opacity);
  ppGpp.stroke(stroke).move(x + adnX + ppGppH - 10, y);
  ppGpp.fill(color);
}

//strand effect

if (strand === "reverse") {
  ppGpp.move(x + adnX + ppGppH - 10, adnY + separation);
  DksA.move(x + adnX, adnY + separation);

  //text.move(xi + tf_binding / 4, adnY + tf_binding - 10);
}

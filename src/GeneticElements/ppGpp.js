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

// ppGpp data
let name = "ppGpp";
let size = 150;
let strand = "forward"; // default forward

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

//stroke & positions
ppGpp.stroke(stroke);
ppGpp.fill(color);
let xi = x + adnX;
let fy = adnY - separation - ppGppy;
let ry = adnY + separation;
let bx = xi + ppGppH - 10;

// name draw
const text1 = draw.text(name);
text1.font({
  family: "Arial",
  size: 14,
  separation: "middle"
});
const text2 = draw.text("ppGpp");
text2.font({
  family: "Arial",
  size: 14,
  separation: "middle"
});
//strand effect
if (name === "DksA" && strand === "forward") {
  var DksAf = draw.ellipse(ppGppH, ppGppy);
  DksAf.stroke(stroke);
  DksAf.fill(color);
  DksAf.opacity(opacity);
  DksAf.move(xi, fy);
  ppGpp.stroke(stroke).move(bx, fy);
  text1.move(xi + ppGppH / 4, adnY - separation - ppGppy + 8);
  text2.move(xi + ppGppH + ppGppH / 8, adnY - separation - ppGppy + 8);
} else if (name === "ppGpp" && strand === "forward") {
  ppGpp.move(xi, fy);
  text1.move(xi + ppGppH / 4, adnY - separation - ppGppy + 8);
  text2.clear();
}

if (name === "DksA" && strand === "reverse") {
  var DksAr = draw.ellipse(ppGppH, ppGppy);
  DksAr.stroke(stroke);
  DksAr.fill(color);
  DksAr.opacity(opacity);
  DksAr.move(xi, ry);
  ppGpp.move(bx, ry);
  text1.move(xi + ppGppH / 4, adnY + separation + ppGppy / 4);
  text2.move(xi + ppGppH + ppGppH / 8, adnY + separation + ppGppy / 4);
} else if (name === "ppGpp" && strand === "reverse") {
  ppGpp.move(xi, ry);
  text1.move(xi + ppGppH / 4, adnY + separation + ppGppy / 4);
  text2.clear();
}

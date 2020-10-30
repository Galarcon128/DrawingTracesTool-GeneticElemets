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
let separation = 30;
let x = 0; //leftPosition
// gene data
let name = "Tf binding";
let size = 10;
let strand = "revers"; // default forward

// draw data
let color = "#000";
let stroke = { color: "#000", width: 3, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;
if (sizeP <= 20) {
  sizeP = 20;
}
//Canvas Create
const draw = SVG().addTo("#TFbindingsite").size(adnSize, canvaH);
// DNA Create
const adn = draw
  .line(adnX, adnY, adnSize, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

//draw RNA
const tf_binding = 60;

var rna = draw.rect(tf_binding, tf_binding / 3);

//position & stroke
let y = adnY - separation - 20;
let xi = x + adnX;
rna.fill("none");
rna.stroke(stroke).move(xi, y);

// name draw
const text = draw.text(name);
text.font({
  family: "Arial",
  size: 18,
  separation: "middle"
});

//strand effect
if (strand === "reverse") {
  rna.rotate(180).move(xi, adnY - separation - tf_binding - 20);
  text.move(xi + tf_binding / 4, adnY + tf_binding - 10);
} else {
  text.move(xi + tf_binding / 4, adnY - tf_binding - 10);
}

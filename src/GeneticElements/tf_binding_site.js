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

// Tf_binding data
let name = "Tf binding";
let size = 50;
let strand = "revers"; // default forward

// draw data
let color = "red";
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

//draw TF_binding
const tfH = sizeP;
var tfy = sizeP / 2;
var tf_binding = draw.rect(tfH, tfy);

//stroke
tf_binding.stroke(stroke);
tf_binding.fill(color);

/*// name draw
const text = draw.text(name);
text.font({
  family: "Arial",
  size: 18,
  separation: "middle"
});
*/

//strand effect
let xi = x + adnX;
let y = adnY - separation - tfy;
if (strand === "reverse") {
  tf_binding.move(x + adnX, adnY + separation);
  //text.move(xi + tf_binding / 4, adnY + tf_binding - 10);
} else {
  tf_binding.move(xi, y);
  //text.move(xi + tf_binding / 4, adnY - tf_binding - 10);
}

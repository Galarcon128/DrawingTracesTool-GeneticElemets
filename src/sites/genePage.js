import { SVG } from "@svgdotjs/svg.js";
import Gene from "../functions/drawGene";

const adnSize = 1000;
const canvaH = 300;
let adnX = 0;
let adnY = 100;
const adnposL = 66835;
const adnposR = 71265;
let adnScalar = adnposR - adnposL; //bp on adn track

const canva = SVG().addTo("#geneTesting").size(adnSize, canvaH);
// DNA Create
canva
  .line(adnX, adnY, adnSize, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

// Gene araA
const g1Name = "araA";
const g1posL = 66835;
const g1posR = 68337;
const g1size = g1posR - g1posL;
const g1strand = "reverse";
const g1separation = 0;
const g1x = ((g1posL - adnposL) * adnSize) / adnScalar; //leftPosition
Gene({
  canva: canva,
  adnX: adnX,
  adnY: adnY,
  adnSize: adnSize,
  adnScalar: adnScalar,
  separation: g1separation,
  x: g1x,
  name: g1Name,
  strand: g1strand,
  size: g1size
});

const g2Name = "araB";
const g2posL = 68348;
const g2posR = 70048;
const g2size = g2posR - g2posL;
const g2strand = "reverse";
const g2separation = 0;
const g2x = ((g2posL - adnposL) * adnSize) / adnScalar; //leftPosition
Gene({
  canva: canva,
  adnX: adnX,
  adnY: adnY,
  adnSize: adnSize,
  adnScalar: adnScalar,
  separation: g2separation,
  x: g2x,
  name: g2Name,
  strand: g2strand,
  size: g2size
});

const g3Name = "araC";
const g3posL = 70387;
const g3posR = 71265;
const g3size = g3posR - g3posL;
const g3strand = "forward";
const g3separation = 0;
const g3x = ((g3posL - adnposL) * adnSize) / adnScalar; //leftPosition
Gene({
  canva: canva,
  adnX: adnX,
  adnY: adnY,
  adnSize: adnSize,
  adnScalar: adnScalar,
  separation: g3separation,
  x: g3x,
  name: g3Name,
  strand: g3strand,
  size: g3size
});

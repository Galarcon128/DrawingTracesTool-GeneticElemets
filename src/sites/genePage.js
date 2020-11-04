import { SVG } from "@svgdotjs/svg.js";
import Gene from "../functions/drawGene";
import Promoter from "../functions/drawPromoter";
import Transnational_Attenuator from "../functions/drawTransnationalAttenuator";
import TF_binding_site from "../functions/drawTF_Binding_site";

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

//Gene araB
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

//Gene araC
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

//Promoter araBp
const p1Name = "araBp";
const p1size = 70075;
const p1strand = "reverse";
const p1separation = 70;
const p1x = ((p1size - adnposL) * adnSize) / adnScalar;
Promoter({
  canva: canva,
  adnX: adnX,
  adnY: adnY,
  adnSize: adnSize,
  adnScalar: adnScalar,
  separation: p1separation,
  x: p1x,
  name: p1Name,
  strand: p1strand,
  size: p1size
});

//Transnational Attenuator Terminator
const taName = "Tansnational Attenuator Terminator";
const taposL = 70049;
const taposR = 70086;
const tasize = taposR - taposL;
const tastrand = "reverse";
const taseparation = 0;
const tax = ((taposL - adnposL) * adnSize) / adnScalar; //leftPosition
Transnational_Attenuator({
  canva: canva,
  adnX: adnX,
  adnY: adnY,
  adnSize: adnSize,
  adnScalar: adnScalar,
  separation: taseparation,
  x: tax,
  name: taName,
  strand: tastrand,
  size: tasize
});

//TFBS AraC
const tf1Name = "AraC";
const tf1posL = 70110;
const tf1posR = 70126;
const tf1size = tf1posR - tf1posL;
const tf1strand = "revers";
const tf1separation = 0;
const tf1x = ((tf1posL - adnposL) * adnSize) / adnScalar; //leftPosition
TF_binding_site({
  canva: canva,
  adnX: adnX,
  adnY: adnY,
  adnSize: adnSize,
  adnScalar: adnScalar,
  separation: tf1separation,
  x: tf1x,
  name: tf1Name,
  strand: tf1strand,
  size: tf1size,
  color: "green"
});

const tf2Name = "AraC";
const tf2posL = 70131;
const tf2posR = 70147;
const tf2size = tf2posR - tf2posL;
const tf2strand = "revers";
const tf2separation = 20;
const tf2x = ((tf2posL - adnposL) * adnSize) / adnScalar; //leftPosition
TF_binding_site({
  canva: canva,
  adnX: adnX,
  adnY: adnY,
  adnSize: adnSize,
  adnScalar: adnScalar,
  separation: tf2separation,
  x: tf2x,
  name: tf2Name,
  strand: tf2strand,
  size: tf2size,
  color: "cyan"
});

const tf3Name = "CRP";
const tf3posL = 70158;
const tf3posR = 70179;
const tf3size = tf3posR - tf3posL;
const tf3strand = "revers";
const tf3separation = 40;
const tf3x = ((tf3posL - adnposL) * adnSize) / adnScalar; //leftPosition
TF_binding_site({
  canva: canva,
  adnX: adnX,
  adnY: adnY,
  adnSize: adnSize,
  adnScalar: adnScalar,
  separation: tf3separation,
  x: tf3x,
  name: tf3Name,
  strand: tf3strand,
  size: tf3size,
  color: "green"
});

const tf4Name = "Arac";
const tf4posL = 70200;
const tf4posR = 70250;
const tf4size = tf4posR - tf4posL;
const tf4strand = "revers";
const tf4separation = 0;
const tf4x = ((tf4posL - adnposL) * adnSize) / adnScalar; //leftPosition
TF_binding_site({
  canva: canva,
  adnX: adnX,
  adnY: adnY,
  adnSize: adnSize,
  adnScalar: adnScalar,
  separation: tf4separation,
  x: tf4x,
  name: tf4Name,
  strand: tf4strand,
  size: tf4size,
  color: "red"
});

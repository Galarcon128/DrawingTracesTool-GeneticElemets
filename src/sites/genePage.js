import { SVG } from "@svgdotjs/svg.js";
import Gene from "../functions/drawGene";
import Promoter from "../functions/drawPromoter";
import Transnational_Attenuator from "../functions/drawTransnationalAttenuator";
import TF_binding_site from "../functions/drawTF_Binding_site";
import DNA from "../functions/drawDna";

// DNA Create
const dnaSize = 1000;
const canvaH = 300;
const dnaX = 0;
const dnaY = 100;
const dnaposL = 66835;
const dnaposR = 71265;
const stroke = { color: "#f06", width: 2, linecap: "round" };
let dnaScalar = dnaposR - dnaposL;

const canva = SVG().addTo("#geneTesting").size(dnaSize, canvaH);

/*DNA({
  canva,
  dnaX : dnaX,
  dnaY : dnaY,
  dnaPosLeft : dnaposL,
  dnaPosRight : dnaposR,
  adnScalar : dnaScalar,
  x : 100,
  size : 100,
  stroke : stroke
});
*/
const dna = canva.line(dnaX, dnaY, dnaSize, dnaY).stroke(stroke);

const strokeAraC = { color: "#000", width: 5, dasharray: 15 };
const fontArac = { color: "#000" };

// Gene araA
const g1Name = "araA";
const g1posL = 66835;
const g1posR = 68337;
const g1size = g1posR - g1posL;
const g1strand = "reverse";
const g1separation = 0;
const g1x = ((g1posL - dnaposL) * dnaSize) / dnaScalar; //leftPosition
Gene({
  canva: canva,
  adn: DNA,
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
const g2x = ((g2posL - dnaposL) * dnaSize) / dnaScalar; //leftPosition
Gene({
  canva: canva,
  dnaX: dnaX,
  dnaY: dnaY,
  dnaSize: dnaSize,
  dnaScalar: dnaScalar,
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
const g3x = ((g3posL - dnaposL) * dnaSize) / dnaScalar; //leftPosition
Gene({
  canva: canva,
  dnaX: dnaX,
  dnaY: dnaY,
  dnaSize: dnaSize,
  dnaScalar: dnaScalar,
  separation: g3separation,
  x: g3x,
  name: g3Name,
  strand: g3strand,
  size: g3size,
  color: "Red",
  stroke: strokeAraC,
  fill: {},
  font: {}
});

//Promoter araBp
const p1Name = "araBp";
const p1size = 70075;
const p1strand = "forward";
const p1separation = 10;
const p1x = ((p1size - dnaposL) * dnaSize) / dnaScalar;
Promoter({
  id: "promotor",
  canva: canva,
  dnaX: dnaX,
  dnaY: dnaY,
  dnaSize: dnaSize,
  dnaScalar: dnaScalar,
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
const tax = ((taposL - dnaposL) * dnaSize) / dnaScalar; //leftPosition
Transnational_Attenuator({
  canva: canva,
  dnaX: dnaX,
  dnaY: dnaY,
  dnaSize: dnaSize,
  dnaScalar: dnaScalar,
  separation: taseparation,
  x: tax,
  name: taName,
  strand: tastrand,
  size: 15
});

//TFBS AraC
const tf1Name = "AraC";
const tf1posL = 70110;
const tf1posR = 70126;
const tf1size = tf1posR - tf1posL;
const tf1strand = "revers";
const tf1separation = 70;
const tf1x = ((tf1posL - dnaposL) * dnaSize) / dnaScalar; //leftPosition
TF_binding_site({
  id: "sadas",
  canva: canva,
  anchor: "promotor",
  dnaX: dnaX,
  dnaY: dnaY,
  dnaSize: dnaSize,
  dnaScalar: dnaScalar,
  separation: tf1separation,
  x: p1x,
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
const tf2x = ((tf2posL - dnaposL) * dnaSize) / dnaScalar; //leftPosition
TF_binding_site({
  canva: canva,
  dnaX: dnaX,
  dnaY: dnaY,
  dnaSize: dnaSize,
  dnaScalar: dnaScalar,
  separation: tf2separation,
  x: tf2x,
  name: tf2Name,
  strand: tf2strand,
  size: tf2size,
  color: "#77a2ff"
});

const tf3Name = "CRP";
const tf3posL = 70158;
const tf3posR = 70179;
const tf3size = tf3posR - tf3posL;
const tf3strand = "revers";
const tf3separation = 40;
const tf3x = ((tf3posL - dnaposL) * dnaSize) / dnaScalar; //leftPosition
TF_binding_site({
  canva: canva,
  dnaX: dnaX,
  dnaY: dnaY,
  dnaSize: dnaSize,
  dnaScalar: dnaScalar,
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
const tf4x = ((tf4posL - dnaposL) * dnaSize) / dnaScalar; //leftPosition
TF_binding_site({
  canva: canva,
  anchor: "",
  dna: dna,
  separation: tf4separation,
  x: tf4x,
  name: tf4Name,
  strand: tf4strand,
  size: 7,
  color: "red"
});

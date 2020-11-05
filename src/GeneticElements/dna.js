import { SVG } from "@svgdotjs/svg.js";

// canvas Data
const canvaW = 500,
  canvaH = 200;
const scale = 1;

// invoke data
let dnaX = 0;
let dnaY = 100;
// dna data
let dnaPosLeft = 800;
let dnaPosRight = 1000;
let dnaScalar = dnaPosRight - dnaPosLeft; //bp on adn track
// draw data
let color = "#f06";
let opacity = 1;
let stroke = { color: color, width: 1, linecap: "round" };
let font = {
  family: "Arial",
  size: 12,
  separation: "middle"
};
//Canvas Create
const draw = SVG().addTo("#dna").size(canvaW, canvaH);
//label create
const dnaLletter = `${dnaPosLeft}`;
const dnaRletter = `${dnaPosRight}`;
draw
  .text(dnaLletter)
  .font(font)
  .move(dnaX, dnaY - font["size"] / 2);
draw
  .text(dnaRletter)
  .font(font)
  .move(
    canvaW - (font["size"] * dnaRletter.length) / 2 - 5,
    dnaY - font["size"] / 2
  );
// DNA Create
const adn = draw
  .line(
    dnaX + (font["size"] * dnaLletter.length) / 2 + 7,
    dnaY,
    canvaW - (font["size"] * dnaRletter.length) / 2 - 7,
    dnaY
  )
  .stroke(stroke)
  .opacity(opacity);

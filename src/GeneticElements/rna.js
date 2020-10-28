import { SVG } from "@svgdotjs/svg.js";

let stroke = { color: "#000", width: 4, linecap: "round", linejoin: "round" };
var strand = "reverse";
let color = "black";
var draw = SVG().addTo("#rna").size(110, 100);

var rna = draw.rect(60, 20);
rna.fill(color).move(5, 5);
rna.stroke(stroke).move(10, 25);

var linea1 = draw.line(10, 0, 10, 20).stroke(stroke).move(10, 5);
var linea2 = draw.line(10, 0, 10, 20).stroke(stroke).move(20, 5);
var linea3 = draw.line(10, 0, 10, 20).stroke(stroke).move(30, 5);
var linea4 = draw.line(10, 0, 10, 20).stroke(stroke).move(40, 5);
var linea5 = draw.line(10, 0, 10, 20).stroke(stroke).move(50, 5);
var linea6 = draw.line(10, 0, 10, 20).stroke(stroke).move(60, 5);

if (strand === "forward") {
  var group = draw.group();
  //group.add(rna);
  group.add(linea1);
  group.add(linea2);
  group.add(linea3);
  group.add(linea4);
  group.add(linea5);
  group.add(linea6);

  group.move(10, 45);
}

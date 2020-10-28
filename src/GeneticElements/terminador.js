import { SVG } from "@svgdotjs/svg.js";

let stroke = { color: "#000", width: 2, linecap: "round", linejoin: "round" };
var strand = "forward";

var draw = SVG().addTo("#terminador").size(110, 100);

var terminador = draw.path(
  "M 23.2 28 L 23.2 27.1 A 14.7 14.7 0 0 0 30 14.7 A 14.7 14.7 0 0 0 15.2 0 L 15.2 0 A 14.7 14.7 0 0 0 0.5 14.7 A 14.7 14.7 0 0 0 7.2 27.1 L 7.2 28"
);
terminador.fill("none").move(5, 2);
terminador.stroke(stroke);

var head = draw.path(
  "M 7.2 28 L 7.2 79.7 L 0.2 79.7 L 0.2 83.7 L 30.2 83.7 L 30.2 79.7 L 23.2 79.7 L 23.2 28"
);
head.fill("none").move(5, 28);
head.stroke(stroke);

if (strand === "reverse") {
  var group = draw.group();
  group.add(terminador);
  group.add(head);
  group.rotate(180).move();
}

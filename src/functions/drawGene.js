import { SVG } from "@svgdotjs/svg.js";

export default function DrawGene({
  canva,
  adnX,
  adnY,
  anchor,
  name,
  posLeft,
  posRight,
  strand,
  color = "aqua",
  opacity,
  stroke = { color: "#f06", width: 1, linecap: "round" }
}) {
  if (!canva) {
    return null;
  }

  var gene = canva.path("M 0,0 V 60 H 85 V 70 L 100,50 85,30 v 10 z");
  gene.fill(color).move(10, 10);
  gene.stroke(stroke);

  if (strand === "reverse") {
    gene.rotate(180);
  }
}

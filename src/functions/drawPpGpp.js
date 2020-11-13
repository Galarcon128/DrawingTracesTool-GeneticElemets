//DrawPpGpp v 0.1.0
/**
 * Falta utilizar anchor
 */

export default function DrawPpGpp({
  id,
  canva,
  anchor,
  dna,
  separation = 0,
  posLeft = 0,
  posRigth = 150,
  name = "ppGpp",
  strand = "forward",
  color = "aqua",
  opacity = 1,
  stroke = { color: "#000", width: 1, linecap: "round" }
}) {
  if (!canva || !dna || !id | (posLeft > posRigth)) {
    return null;
  }
  //atributos
  const dnaX = dna.x,
    size = posRigth - posLeft,
    dnaY = dna.y,
    widthActive = dna.widthActive,
    dnaSize = dna.Size,
    x = ((posLeft - dna.posLeft) * widthActive) / dnaSize;
  let sizeP = (size * widthActive) / dnaSize;
  // scale
  let heigthActive = dna.forwardActive;
  if (strand === "reverse") {
    heigthActive = dna.reverseActive;
  }
  const proportion = heigthActive * 0.1;
  //atributos de cuerpo
  let ppGppH = proportion;
  let ppGppy = proportion / 2;
  //Draw ppGpp
  var ppGpp = canva.ellipse(ppGppH, ppGppy);
  ppGpp.stroke(stroke);
  ppGpp.fill(color);
  //atributos
  let xi = x + dnaX;
  let fy = dnaY - separation - ppGppy;
  let ry = dnaY + separation;
  let bx = xi + ppGppH - 10;

  // name draw
  const text1 = canva.text(name);
  text1.font({
    family: "Arial",
    size: proportion / 5,
    separation: "middle"
  });
  const text2 = canva.text("ppGpp");
  text2.font({
    family: "Arial",
    size: proportion / 6,
    separation: "middle"
  });
  // strand effect
  if (name === "DksA" && strand === "forward") {
    var DksAf = canva.ellipse(ppGppH, ppGppy);
    DksAf.stroke(stroke);
    DksAf.fill(color);
    DksAf.opacity(opacity);
    DksAf.move(xi, fy);
    ppGpp.stroke(stroke).move(bx, fy);
    text1.move(xi + ppGppH / 4, dnaY - separation - ppGppy + 8);
    text2.move(xi + ppGppH + ppGppH / 8, dnaY - separation - ppGppy + 8);
  } else if (name === "ppGpp" && strand === "forward") {
    ppGpp.move(xi, fy);
    text1.move(xi + ppGppH / 4, dnaY - separation - ppGppy + 3);
    text2.clear();
  }
  if (name === "DksA" && strand === "reverse") {
    var DksAr = canva.ellipse(ppGppH, ppGppy);
    DksAr.stroke(stroke);
    DksAr.fill(color);
    DksAr.opacity(opacity);
    DksAr.move(xi, ry);
    ppGpp.move(bx, ry);
    text1.move(xi + ppGppH / 4, dnaY + separation + ppGppy / 4);
    text2.move(xi + ppGppH, dnaY + separation + ppGppy / 4);
  } else if (name === "ppGpp" && strand === "reverse") {
    ppGpp.move(xi, ry);
    text1.move(xi + ppGppH / 4, dnaY + separation + ppGppy / 4);
    text2.clear();

    return {
      id: id,
      canva: canva,
      xi: xi,
      fy: fy,
      bx: bx,
      ry: ry,
      sizeP: sizeP,
      heigth: ppGppH,
      dna: dna,
      separation: separation,
      posLeft: posLeft,
      posRigth: posRigth,
      name: name,
      strand: strand,
      color: color,
      opacity: color,
      stroke: stroke
    };
  }
  //anchor
}

// Promoter 0.1.0
/**
 * Falta utilizar anchor
 */
export default function DrawPromoter({
  id,
  canva,
  anchor,
  dna,
  separation = 20,
  posLeft = 10,
  posRigth = 50,
  name = "Name",
  strand = "forward",
  color = "aqua",
  opacity = 1,
  stroke = { color: "#000", width: 1, linecap: "round" }
}) {
  if (!canva || !dna || !id || posLeft > posRigth) {
    return null;
  }

  // atributos
  const dnaX = dna.x,
    dnaY = dna.y,
    size = posRigth - posLeft,
    widthActive = dna.widthActive,
    dnaSize = dna.Size,
    x = ((posLeft - dna.posLeft) * widthActive) / dnaSize;
  let sizeP = (size * widthActive) / dnaSize;
  //scale
  let heigthActive = dna.forwardActive;
  if (strand === "reverse") {
    heigthActive = dna.reverseActive;
  }
  const proportion = heigthActive * 0.1;
  //atributos de Cuerpo
  const horizontal = proportion + 20;
  let altura = proportion + separation + 50;
  let px = x + dnaX;
  let py = dnaY - altura;

  //atributos de Cabeza
  let ax = x + dnaX + horizontal - 4;
  let ay = dnaY - altura - 5;

  // draw body
  const body = canva.path("M 0 0 V " + -altura + "H " + horizontal + "v");
  body.fill("none").move(px, py);
  body.stroke(stroke);
  // draw arrow
  var arrow = canva.path("m 0,0 5,5 -5,5 v 0");
  arrow.fill("none").move(ax, ay);
  arrow.stroke(stroke);

  // reverse effect
  if (strand === "reverse") {
    var group = canva.group();
    group.add(body);
    group.add(arrow);
    group.transform({
      rotate: 180,
      translateX: -horizontal,
      translateY: altura + 5
    });
    return {
      id: id,
      canva: canva,
      px: px,
      py: py,
      ax: ax,
      ay: ay,
      sizeP: sizeP,
      heigth: horizontal.altura,
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
  //anchor effect
}

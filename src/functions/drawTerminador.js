// Terminador 0.1.0
/**
 * Falta utilizar anchor
 */
export default function DrawTerminador({
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
  let bodyHeigth = proportion * 3 + separation;
  let bodyFootH = proportion / 4;
  let bodyFootW = 0;
  if (sizeP >= proportion) {
    bodyFootW = sizeP / 2 - proportion / 3;
  }
  let bodyX = x + dnaX;
  let bodyY = dnaY - bodyHeigth - bodyFootH;
  //atributos de Cabeza
  let headH = proportion;
  let headX = dnaX + x + sizeP / 2 - headH / 2 - 2;
  let headY = dnaY - bodyHeigth - headH - 8;

  // dibujo de  BODY
  const body = canva.path(
    "M 0,0 v " +
      bodyHeigth +
      " h -" +
      bodyFootW +
      " v " +
      bodyFootH +
      " h " +
      sizeP +
      " v -" +
      bodyFootH +
      " h -" +
      bodyFootW +
      " v " +
      -bodyHeigth
  );
  body.fill(color).move(bodyX, bodyY);
  body.stroke(stroke);
  body.opacity(opacity);
  // dibujo de HEAD
  var head = canva.path(
    "M 23.2 28 L 23.2 27.1 A 14.7 14.7 0 0 0 30 14.7 A 14.7 14.7 0 0 0 15.2 0 L 15.2 0 A 14.7 14.7 0 0 0 0.5 14.7 A 14.7 14.7 0 0 0 7.2 27.1 L 7.2 28"
  );
  head.fill(color).move(headX, headY);
  head.stroke(stroke);
  head.opacity(opacity);

  // reverse effect
  if (strand === "reverse") {
    var group = canva.group();
    group.add(body);
    group.add(head);
    group.transform({
      rotate: 180,
      translateY: bodyHeigth + headH
    });
    return {
      id: id,
      canva: canva,
      bodyX: bodyX,
      bodyY: bodyY,
      headX: headX,
      headY: headY,
      sizeP: sizeP,
      heigth: bodyHeigth,
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

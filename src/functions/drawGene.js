//DrawGene v 0.6.0
/**
 * estructura lista (creo jeje)
 * Problemas de Escala
 */
export default function DrawGene({
  id,
  canva,
  anchor,
  dna,
  separation = 0,
  posLeft = 0,
  posRigth = 20,
  name = "geneName",
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
  const geneH = proportion;
  const rowW = () => {
    if (heigthActive * 0.1 > sizeP) {
      return sizeP * 0.1;
    }
    return heigthActive * 0.1;
  };
  const lx1 = sizeP + dnaX + x;
  const ly1 = geneH;
  const lx2 = sizeP + dnaX - rowW() + x;
  const ly2 = 0;
  let posX = x + dnaX;
  let posY = dnaY - separation - geneH * 2;
  //Draw Gene
  const gene = canva.path(
    "m " +
      (x + dnaX) +
      "," +
      geneH / 2 +
      " v " +
      geneH +
      " h " +
      (sizeP - rowW()) +
      " v " +
      geneH / 2 +
      " L " +
      lx1 +
      "," +
      ly1 +
      " " +
      lx2 +
      "," +
      ly2 +
      " v " +
      geneH / 2 +
      " z"
  );
  gene.move(posX, posY);
  gene.id(id);
  gene.fill(color);
  gene.stroke(stroke);
  gene.opacity(opacity);

  // name draw
  const font = {
    family: "Arial",
    size: geneH * 0.1,
    separation: "middle"
  };
  const text = canva.text(name).font(font);
  // reverse effect
  if (strand === "reverse") {
    if (!anchor) {
      posX = x + dnaX;
      posY = dnaY + separation;
    }
    gene.transform({
      rotate: 180,
      translateY: geneH * 2
    });
    //anchor
    if (anchor) {
      posX = anchor.posX;
      posY = anchor.posY - separation - anchor.heigth;
      if (anchor.strand === "reverse") {
        posX = anchor.posX;
        posY = anchor.posY + anchor.heigth + separation;
      }
    }
    return {
      id: id,
      canva: canva,
      posX: posX,
      posY: posY,
      sizeP: sizeP,
      heigth: geneH,
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
}

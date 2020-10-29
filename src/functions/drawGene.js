export default function DrawGene({
  canva,
  adnX = 0,
  adnY = 100,
  adnSize = 200,
  adnScalar = 1000,
  separation = 0,
  x = 0,
  name = "geneName",
  size = 100,
  strand = "forward",
  color = "aqua",
  opacity = 1,
  stroke = { color: "#000", width: 1, linecap: "round" }
}) {
  if (!canva) {
    return null;
  }
  let sizeP = (size * adnSize) / adnScalar;
  if (sizeP <= 30) {
    sizeP = 30;
  }

  const geneH = 40;
  const rowW = 25;
  const lx1 = sizeP + adnX + x;
  const ly1 = geneH;
  const lx2 = sizeP + adnX - rowW + x;
  const ly2 = 0;
  const gene = canva.path(
    "m " +
      (x + adnX) +
      "," +
      geneH / 2 +
      " v " +
      geneH +
      " h " +
      (sizeP - rowW) +
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
  gene.fill(color);
  gene.stroke(stroke);
  gene.opacity(opacity);

  // name draw
  const text = canva.text(name);
  text.font({
    family: "Arial",
    size: 18,
    separation: "middle"
  });
  const nlet = name.length;

  // strand effect
  if (strand === "reverse") {
    gene.rotate(180).move(x + adnX, -separation - adnY);
    text.move(x + sizeP / 2 - nlet * 5, geneH + adnY + separation / 2);
  } else {
    let y = -separation + adnY - geneH * 2;
    let xi = x + adnX;
    text.move(x + sizeP / 2 - nlet * 5, geneH - separation / 2);
    gene.move(xi, y);
  }
}

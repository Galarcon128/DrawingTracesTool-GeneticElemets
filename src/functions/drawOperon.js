export default function DrawOperon({
  canva,
  adnX = 0,
  adnY = 100,
  adnSize = 200,
  adnScalar = 1000,
  separation = 0,
  x = 0,
  name = "operonName",
  size = 100,
  strand = "forward",
  color = "purple",
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
  const operonH = 40;
  const rowW = 30;
  const lx1 = sizeP + adnX + x;
  const ly1 = operonH;
  const lx2 = sizeP + adnX - rowW + x;

  const operon = canva.path(
    " m " +
      (x + adnX) +
      "," +
      operonH / 2 +
      " v " +
      operonH +
      " h " +
      (sizeP - rowW) +
      " L " +
      lx1 +
      "," +
      ly1 +
      " " +
      lx2 +
      "," +
      operonH / 2 +
      " z"
  );
  operon.fill(color);
  operon.stroke(stroke);
  operon.opacity(opacity);

  const text = canva.text(name);
  text.font({
    family: "Arial",
    size: 18,
    separation: ""
  });
  const nlet = name.length;

  if (strand === "reverse") {
    operon.rotate(180).move(x + adnX, -separation - adnY);
    text.move(x + sizeP / 2 - nlet * 5, operonH + 15 + adnY + separation / 2);
  } else {
    let y = -separation + adnY - operonH * 2;
    let xi = x + adnX;
    text.move(x + sizeP / 2 - nlet * 5, operonH - 15 - separation / 2);
    operon.move(xi, y);
  }
}

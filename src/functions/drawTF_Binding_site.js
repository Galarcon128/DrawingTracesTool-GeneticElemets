export default function DrawTFBindingSite({
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
  color = "none",
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

  const tfH = sizeP;
  let tf_binding = canva.rect(tfH, 20);
  tf_binding.stroke(stroke);
  tf_binding.fill(color);

  // name draw
  const text = canva.text(name);
  text.font({
    family: "Arial",
    size: 10,
    separation: "middle"
  });
  const nlet = name.length;

  //strand effect
  let xi = x + adnX;
  let y = adnY - separation - 20;

  if (strand === "reverse") {
    tf_binding.move(xi, adnY + separation);
    text.move(xi + sizeP / 2 - nlet * 3, adnY + separation);
  } else {
    tf_binding.move(xi, y);
    text.move(xi + sizeP / 2 - nlet * 3, y);
  }
}

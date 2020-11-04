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
  color = "blue",
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
  var tfy = sizeP / 2;
  var tf_binding = canva.rect(tfH, tfy);

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
  let y = adnY - tfy - separation;

  if (strand === "reverse") {
    tf_binding.move(xi, adnY);
    text.move(xi + tf_binding / 2, adnY + tfy / 2 + separation);
  } else {
    tf_binding.move(xi, y);
    text.move(xi + sizeP / 2 - nlet * 2 - 4, adnY - tfy / 2 - separation);
  }
}

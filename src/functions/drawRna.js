// Falta todo jeje
// :'c

export default function DrawRna({
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

  const rnax = sizeP;
  var rnay = 10;

  var rna = canva.rect(rnax, rnay);

  rna.stroke(stroke);
  rna.fill("color");

  const ly = adnY - separation - rnay;

  let l = x + adnX + sizeP;
  let i = l - sizeP / 5;
  let n = i - sizeP / 5;
  let e = n - sizeP / 5;
  let s = e - sizeP / 5;
  let p = s - sizeP / 5;

  var line1 = canva
    .line(l, 0, l, rnay * 2)
    .stroke(stroke)
    .move(l, ly);
  var line2 = canva
    .line(i, 0, i, rnay * 2)
    .stroke(stroke)
    .move(i, ly);
  var line3 = canva
    .line(n, 0, n, rnay * 2)
    .stroke(stroke)
    .move(n, ly);
  var line4 = canva
    .line(e, 0, e, rnay * 2)
    .stroke(stroke)
    .move(e, ly);
  var line5 = canva
    .line(s, 0, s, rnay * 2)
    .stroke(stroke)
    .move(s, ly);
  var line6 = canva
    .line(p, 0, p, rnay * 2)
    .stroke(stroke)
    .move(p, ly);

  let xi = x + adnX;
  let y = adnY - separation;
  rna.move(xi, y);

  const text = canva.text(name);
  text.font({
    family: "Arial",
    size: 18,
    separation: "middle"
  });
  var group = canva.group();
  group.add(rna);
  group.add(line1);
  group.add(line2);
  group.add(line3);
  group.add(line4);
  group.add(line5);
  group.add(line6);

  if (strand === "reverse") {
    group.move(x + adnX, adnY + separation);
    text.move(x + adnX + sizeP / 4, adnY + separation + rnay + 10);
  } else {
    group.rotate(180);
    group.move(x + adnX, adnY - separation);
    text.move(x + adnX + sizeP / 4, adnY - 50);
  }
}

export default function DrawPpGpp({
  canva,
  adnX = 0,
  adnY = 100,
  adnSize = 200,
  adnScalar = 1000,
  separation = 0,
  x = 0,
  name = "ppGpp",
  size = 100,
  strand = "forward",
  color = "green",
  opacity = 0.9,
  stroke = { color: "#000", width: 1, linecap: "round" }
}) {
  if (!canva) {
    return null;
  }
  let sizeP = (size * adnSize) / adnScalar;
  if (sizeP <= 20) {
    sizeP = 20;
  }
  let ppGppH = sizeP;
  let ppGppy = sizeP / 2;
  var ppGpp = canva.ellipse(ppGppH, ppGppy);

  ppGpp.stroke(stroke);
  ppGpp.fill(color);

  let xi = x + adnX;
  let fy = adnY - separation - ppGppy;
  let ry = adnY + separation;
  let bx = xi + ppGppH - 10;

  const text1 = canva.text(name);
  text1.font({
    family: "Arial",
    size: 14,
    separation: "middle"
  });
  const text2 = canva.text("ppGpp");
  text2.font({
    family: "Arial",
    size: 14,
    separation: "middle"
  });

  if (name === "DksA" && strand === "forward") {
    var DksAf = canva.ellipse(ppGppH, ppGppy);
    DksAf.stroke(stroke);
    DksAf.fill(color);
    DksAf.opacity(opacity);
    DksAf.move(xi, fy);
    ppGpp.stroke(stroke).move(bx, fy);
    text1.move(xi + ppGppH / 4, adnY - separation - ppGppy + 8);
    text2.move(xi + ppGppH + ppGppH / 8, adnY - separation - ppGppy + 8);
  } else if (name === "ppGpp" && strand === "forward") {
    ppGpp.move(xi, fy);
    text1.move(xi + ppGppH / 4, adnY - separation - ppGppy + 8);
    text2.clear();
  }
  if (name === "DksA" && strand === "reverse") {
    var DksAr = canva.ellipse(ppGppH, ppGppy);
    DksAr.stroke(stroke);
    DksAr.fill(color);
    DksAr.opacity(opacity);
    DksAr.move(xi, ry);
    ppGpp.move(bx, ry);
    text1.move(xi + ppGppH / 4, adnY + separation + ppGppy / 4);
    text2.move(xi + ppGppH + ppGppH / 8, adnY + separation + ppGppy / 4);
  } else if (name === "ppGpp" && strand === "reverse") {
    ppGpp.move(xi, ry);
    text1.move(xi + ppGppH / 4, adnY + separation + ppGppy / 4);
    text2.clear();
  }
}

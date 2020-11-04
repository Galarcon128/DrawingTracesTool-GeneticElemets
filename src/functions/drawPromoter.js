export default function DrawPromoter({
  canva,
  adnX = 0,
  adnY = 100,
  adnSize = 200,
  adnScalar = 1000,
  separation = 0,
  x = 0,
  name = "promoterName",
  size = 100,
  strand = "forward",
  stroke = { color: "#000", width: 1, linecap: "round", dasharray: 3 }
}) {
  if (!canva) {
    return null;
  }
  const horizontal = 30;
  let altura = 40 + separation;

  const promoter = canva.path("M 0 0 V " + -altura + "H " + horizontal + "v");

  let px = x + adnX;
  let py = adnY - altura;
  promoter.fill("none").move(px, py);
  promoter.stroke(stroke);

  var arrow = canva.path("m 0,0 5,5 -5,5 v 0");
  let ax = x + adnX + horizontal - 4;
  let ay = adnY - altura - 5;
  arrow.fill("none").move(ax, ay);
  arrow.stroke(stroke);

  // name draw
  const text = canva.text(name);
  text.font({
    family: "Arial",
    size: 10,
    separation: "middle"
  });

  //strand effect
  if (strand === "reverse") {
    var group = canva.group();
    group.add(arrow).move(ax, ay);
    group.add(promoter).move(x + adnX - horizontal, adnY);
    group.rotate(180);
    text.move(x + adnX - horizontal, adnY + altura + 5);
  } else {
    text.move(x + adnX, adnY - altura - 15);
  }
}

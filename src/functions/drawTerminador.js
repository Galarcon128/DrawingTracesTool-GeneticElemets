export default function DrawTerminador({
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
  let hline = 1;
  if (sizeP >= 20) {
    hline = sizeP / 2 - 9;
  }
  var altura = 60 + separation;
  var head = canva.path(
    "M 23.2 28 L 23.2 27.1 A 14.7 14.7 0 0 0 30 14.7 A 14.7 14.7 0 0 0 15.2 0 L 15.2 0 A 14.7 14.7 0 0 0 0.5 14.7 A 14.7 14.7 0 0 0 7.2 27.1 L 7.2 28"
  );
  let headX = adnX + x + (hline - 6);
  let headY = adnY - altura - 32;
  head.fill("none").move(headX, headY);
  head.stroke(stroke);
  head.opacity(opacity);

  var body = canva.path(
    "M 0,0 v " +
      altura +
      " h -" +
      hline +
      " v 5 h " +
      sizeP +
      " v -5 h -" +
      hline +
      " v " +
      -altura
  );
  let bodyX = x + adnX;
  let bodyY = adnY - altura - 5;
  body.fill("none").move(bodyX, bodyY);
  body.stroke(stroke);
  body.opacity(opacity);

  if (strand === "reverse") {
    var group = canva.group();
    group.add(head);
    group.add(body);
    group.rotate(180).move(x + adnX, headY - altura - 34);
  }
}

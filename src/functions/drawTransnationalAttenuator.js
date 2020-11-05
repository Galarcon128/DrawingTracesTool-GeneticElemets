export default function DrawTransnationalAttenuator({
  canva,
  adnX = 0,
  adnY = 100,
  adnSize = 200,
  adnScalar = 1000,
  separation = 0,
  x = 0,
  name = "Name",
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

  var altura = 60 + separation;
  let hline = 1;
  if (sizeP >= 20) {
    hline = sizeP / 2 - 9;

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
    body.fill(color).move(bodyX, bodyY);
    body.stroke(stroke);
    body.opacity(opacity);

    let headH = 30;
    var head = canva.circle(headH);
    let headX = adnX + x + (hline - 6);
    let headY = adnY - altura - 30;
    head.fill(color).move(headX, headY);
    head.stroke(stroke);
    head.opacity(opacity);

    var lx = sizeP / 4;
    if (lx < 20) {
      lx = 15;
    } else if (lx >= 25) {
      lx = 20;
    }
    var ly = sizeP / 2;
    if (ly < 20) {
      ly = 30;
    } else if (ly >= 50) {
      ly = 30;
    }
    var rect = canva.rect(lx, ly);

    let rectX = adnX + x + (hline + lx - 5);
    let rectY = adnY - altura + 10;
    rect.fill(color).move(rectX, rectY);
    rect.stroke(stroke);

    if (strand === "reverse") {
      var group = canva.group();
      group.add(head);
      group.add(body);
      group.add(rect);
      group.rotate(180).move(x + adnX, headY - altura - 30);
    }
  }
}

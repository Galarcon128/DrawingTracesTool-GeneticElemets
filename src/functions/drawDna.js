//draw DNA v 0.9.0
/**
 * Falta estructura
 *
 */
export default function DrawDna({
  id,
  canva,
  x = 0,
  y = 100,
  dnaPosLeft = 800,
  dnaPosRight = 1000,
  name = "DNA",
  color = "#f06",
  opacity = 1,
  stroke = { color: "#000", width: 1, linecap: "round" },
  font = {
    family: "Arial",
    size: 12,
    separation: "middle"
  }
}) {
  //validacion
  if (!canva || !id) {
    return null;
  }
  const canvaW = canva.node.clientWidth;
  //const canvaH = canva.node.clientHeight;
  //draw rext
  const dnaLletter = `${dnaPosLeft}`;
  const dnaRletter = `${dnaPosRight}`;
  canva
    .text(dnaLletter)
    .font(font)
    .move(x, y - font["size"] / 2);
  canva
    .text(dnaRletter)
    .font(font)
    .move(
      canvaW - (font["size"] * dnaRletter.length) / 2 - 2,
      y - font["size"] / 2
    );
  // DNA Create
  const lx1 = x + (font["size"] * dnaLletter.length) / 2 + 5;
  const lx2 = canvaW - (font["size"] * dnaRletter.length) / 2 - 7;
  const dna = canva.line(lx1, y, lx2, y).stroke(stroke).opacity(opacity);
  const widthActive = lx2 - lx1;
  const forwardActive = y;
  const reverseActive = y - stroke.width;
  //
  return {
    id: id,
    canva: canva,
    draw: dna,
    x: lx1,
    y: y,
    widthActive: widthActive,
    forwardActive: forwardActive,
    reverseActive: reverseActive,
    posLeft: dnaPosLeft,
    posRight: dnaPosRight,
    Size: dnaPosRight - dnaPosLeft,
    name: name,
    color: color,
    opacity: opacity,
    stroke: stroke,
    font: font
  };
}

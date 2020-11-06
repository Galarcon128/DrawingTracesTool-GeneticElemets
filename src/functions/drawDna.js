export default function DrawDna({
  canva,
  dnaX = 0,
  dnaY = 100,
  dnaPosLeft = 800,
  dnaPosRight = 1000,
  adnScalar = 1000,
  separation = 0,
  x = 0,
  name = "DNA",
  dnaSize = 100,
  strand = "forward",
  color = "#f06",
  opacity = 1,
  stroke = { color: "#000", width: 1, linecap: "round" }
}) {
  if (!canva) {
    return null;
  }

  let font = {
    family: "Arial",
    size: 12,
    separation: "middle"
  };
  //const canvaW = 500;
  const dnaLletter = `${dnaPosLeft}`;
  const dnaRletter = `${dnaPosRight}`;
  canva
    .text(dnaLletter)
    .font(font)
    .move(dnaX, dnaY - font["size"] / 2);
  canva
    .text(dnaRletter)
    .font(font)
    .move(
      dnaSize - (font["size"] * dnaRletter.length) / 2 - 2,
      dnaY - font["size"] / 2
    );
  // DNA Create
  const adn = canva
    .line(
      dnaX + (font["size"] * dnaLletter.length) / 2 + 5,
      dnaY,
      dnaSize - (font["size"] * dnaRletter.length) / 2 - 7,
      dnaY
    )
    .stroke(stroke)
    .opacity(opacity);
}

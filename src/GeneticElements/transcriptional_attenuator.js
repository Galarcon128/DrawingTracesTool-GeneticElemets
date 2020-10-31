import { SVG } from "@svgdotjs/svg.js";

// canvas Data
const canvaW = 500,
  canvaH = 200;
const scale = 1;

// invoke Data
let adnX = 0;
let adnY = 150;
let adnSize = canvaW;
let adnScalar = 1000; //bp on adn track
let separation = 10;
let x = 60; //leftPosition

var draw = SVG().addTo("#transcriptional").size(canvaW, canvaH);
draw
  .line(adnX, adnY, canvaW, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

//Transnational data
let name = "terminador";
let size = 50;
let strand = "revers"; // default forward

// draw data
let color = "aqua";
let opacity = 1;
let stroke = { color: "#000", width: 2, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;
if (sizeP <= 30) {
  sizeP = 30;
}
//draw Transcriptional

var altura = 40;
let hline = 1;
if (size >= 20) {
  hline = size / 2 - 9;
}

let ancho = 60;
if (ancho < 10) {
  ancho = 10;
}

var body = draw.path(
  "M 0,0" +
    "v " +
    altura +
    " h -" +
    hline +
    " v 5 h " +
    ancho +
    " v -5 h -" +
    hline +
    " v " +
    -altura
);
let bodyX = -hline + x + adnX + 6;
let bodyY = adnY - altura - separation;
body.fill("none").move(bodyX, bodyY);
body.stroke(stroke);
body.opacity(opacity);

//draw middle line
var line = draw.path("m 0 0" + "V" + (altura + 5));

let lineX = -hline + x + adnX + ancho / 2 + 6;
let lineY = adnY - separation - altura;
line.stroke(stroke).move(lineX, lineY);

//draw head

var head1 = draw.path(
  "m 25 55 c -11.9155 -9.512 -5 -23 1.662 -25.85 l 0.000109 -1.75156 C 30.8719 24.6817 33.4152 20.0142 33.416 15.0039 C 33.4159 6.8556 26.8104 0.250109 18.6621 0.250003 v 0 C 10.5138 0.250109 3.90831 6.8556 3.9082 15.0039 C 3.91361 20.0093 5.7943 24.6707 10 27.3848 v 0.865234 v 26.75"
);
var head2 = draw.path(
  "m 59.1669 315.613 v 0 c 3.57289 -2.44514 5.73149 -6.64601 5.73214 -11.1554 c -0.000091 -7.33366 -5.60626 -13.2788 -12.5219 -13.2788 v 0 c -6.91559 0.0001 -12.5218 5.94519 -12.5219 13.2788 c 0.0046 4.50501 2.1627 8.70032 5.73214 11.1431 v 0.0122"
);

/*let headX = adnX + x + (hline - 6);
let headY = adnY - altura - separation - 25;

*/
let head1X = x + adnX;
let head1Y = adnY - separation - altura - 56;
head1.fill("none").move(head1X, head1Y);

let head2X = x + adnX + hline - 1;
let head2Y = adnY - separation - altura - 26;
head2.fill("none").move(head2X, head2Y);
head1.stroke(stroke);
head1.opacity(opacity);
head2.stroke(stroke);
head2.opacity(opacity);

/*if (strand === "reverse") {
  var group = draw.group();
  group.add(head);
  group.add(body);
  group.rotate(180).move(x + adnX, headY - altura - 34);
}
*/

console.log(size);
console.log(sizeP);

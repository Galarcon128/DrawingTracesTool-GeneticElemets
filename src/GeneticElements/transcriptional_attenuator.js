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
let x = 10; //leftPosition

var draw = SVG().addTo("#transcriptional").size(canvaW, canvaH);
draw
  .line(adnX, adnY, canvaW, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

//Transnational data
let name = "terminador";
let size = 100;
let strand = "revers"; // default forward

// draw data
let color = "none";
let opacity = 1;
let stroke = { color: "#000", width: 2, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;
if (sizeP <= 30) {
  sizeP = 30;
}
//draw Transcriptional
var altura = 40;
let hline = 0;
if (sizeP >= 30) {
  hline = sizeP / 2 - 15;
}

var body = draw.path(
  "M 0,0" +
    "v " +
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
let bodyY = adnY - altura - separation;
body.fill("none").move(bodyX, bodyY);
body.stroke(stroke);

//draw head

var head1 = draw.path(
  "m 25 55 c -11.9 -9.5 -5 -23 1.6 -25. l 0.0 -1.7 C 30 24.6 33.4 20 33.4 15 C 33.4 6.8 26.8 0.2 18.6 0.2 v 0 C 10.5 0.250109 3.90831 6.8556 3.9082 15.0039 C 3.91361 20.0093 5.7943 24.6707 10 27.3848 v 0.865234 v 26.75"
);
var head2 = draw.path(
  "m 60 110 v 0 c 3.57289 -2.44514 5.73149 -6.64601 5.73214 -11.1554 c -0.000091 -7.33366 -5.60626 -13.2788 -12.5219 -13.2788 v 0 c -6.91559 0.0001 -12.5218 5.94519 -12.5219 13.2788 c 0.0046 4.50501 2.1627 8.70032 5.73214 11.1431 v 0.0122"
);

let head = draw.group();
head.add(head1);
head.add(head2);
head.fill(color).stroke(stroke);

let headX = x + adnX + hline - 6;
let headY = adnY - separation - 96;
head.move(headX, headY);

//draw middle line
var line = draw.path("m 10 -5" + "V" + altura + "");

let lineX = x + adnX + sizeP / 2;
let lineY = adnY - separation - altura;
line.stroke(stroke).move(lineX, lineY);

/*if (strand === "reverse") {
  var group = draw.group();
  group.add(head);
  group.add(body);
  group.rotate(180).move(x + adnX, headY - altura - 34);
}
*/

console.log(size);
console.log(sizeP);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
var aTrouver = getRandomInt(0, 500);
var i = 0;
var liste = [];
var body = document.getElementsByTagName("body");
liste.push(-1);
/*
window.addEventListener("load", function () {
  var outP = document.createElement("output");
  outP.value = aTrouver;
  body[0].appendChild(outP);
  document.getElementById("square").value = liste[i];
  document.getElementById("index").value = i.toString();
});
*/
const input = document.getElementById("nombre");

function xyz() {
  var nombre = document.getElementById("nombre").value;
  nombre = (nombre - aTrouver) * (nombre - aTrouver);
  liste.push(nombre);
  i = liste.length - 1;
  document.getElementById("square").value = liste[i];
  document.getElementById("index").value = i.toString();
  if (nombre == 0) {
    var elem = document.createElement("p");
    var text = document.createTextNode(
      "vous avez trouvé le nombre : " + aTrouver
    );
    elem.appendChild(text);
    body[0].appendChild(elem);
  }
}

function down() {
  if (i > 1) i--;
  document.getElementById("index").value = i.toString();
  document.getElementById("square").value = liste[i];
}
function up() {
  if (i < liste.length - 1) i++;
  document.getElementById("index").value = i.toString();
  document.getElementById("square").value = liste[i];
}

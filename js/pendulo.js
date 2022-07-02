var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

function disenharCircunferencia(x, y, radio) {
  pincel.fillStyle = "white";
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpiarPantalla() {
  pincel.clearRect(0, 0, 600, 400);
}

var x = 0;
var flag = 1;
function actualizarPantalla() {
  if (flag == 1) {
    limpiarPantalla();
    disenharCircunferencia(x, 20, 10);
    x++;
    if (x >= 600) {
      flag = 0;
    }
  }
  if (flag == 0) {
    limpiarPantalla();
    disenharCircunferencia(x, 20, 10);
    x--;
    if (x <= 0) {
      flag = 1;
    }
  }
}
setInterval(actualizarPantalla, 5);

var maquinaselect = Math.floor(Math.random() * 3);

var veces = parseInt(prompt("¿Cuantas veces desea jugar?"));

var piedra = 0;
var papel = 1;
var tijera = 2;

var juego = 0;

var opciones = ["Piedra", "Papel", "Tijera"];

for (juego; juego < veces; juego++) {

  var opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

  alert("Elegiste " + opciones[opcionUsuario]);
  alert("Javascript eligió " + opciones[maquinaselect]);

  if (opcionUsuario == piedra) {
    if (maquinaselect == piedra) {
      alert("Empate!");
      location.reload();
    } else if (maquinaselect == papel) {
      alert("Perdiste!");
      location.reload();
    } else if (maquinaselect == tijera) {
      alert("Ganaste!");
      location.reload();
    }
  } else if (opcionUsuario == papel) {
    if (maquinaselect == piedra) {
      alert("Ganaste!");
      location.reload();
    } else if (maquinaselect == papel) {
      alert("Empate!");
      location.reload();
    } else if (maquinaselect == tijera) {
      alert("Perdiste!");
      location.reload();
    }
  } else if (opcionUsuario == tijera) {
    if (maquinaselect == piedra) {
      alert("Perdiste!");
      location.reload();
    } else if (maquinaselect == papel) {
      alert("Ganaste!");
      location.reload();
    } else if (maquinaselect == tijera) {
      alert("Empate!");
      location.reload();
    }
  }
}
if (juego == veces) {
  alert("Terminaste de jugar!");
}

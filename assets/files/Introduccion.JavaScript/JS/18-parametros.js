'use strict'

// Parametros REST y SPREAD

/*
    REST,SPREAD: ...
*/

function listadoFrutas(fruta1, fruta2, ...restoFrutas){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log(restoFrutas);
}

listadoFrutas("Naranjas","Sandia","Pera","Coco","melocoton");

'use strict'

// Transformación de textos

/* 
    to: Srive para  indicar que queramos transformar en exto
    toString: Convierte a String
*/

var numero = 444;

var texto1 = "Bienvenido a JavaScript";

var texto2 = "No estoy aprendiendo nada";

var dato = numero.toString();
    dato = texto1.toUpperCase();

console.log(dato);

// Calcular longitud

/*
    length: Sirve para saber si hay algo en la variable o en el array
    
*/

var nombre = "Maravilla";

console.log(nombre.length);

// Concatenar o unir textos

//var textoTotal = texto1+" "+texto2;

var textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal)
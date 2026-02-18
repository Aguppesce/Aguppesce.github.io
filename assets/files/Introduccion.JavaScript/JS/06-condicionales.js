'use strict'

// Condicionales IF
//Si A es igual a B entonces haz algo

var edad1 = 20;

var edad2 = 12;

//Si pasa esto
if (edad1 > edad2) {
    //Ejecuta esto
    console.log("edad1 es mayor que edad2");
} else {
    console.log("edad1 es inferior");
}

// Ejemplo más complejo

var edad = 34;

var nombre = 'Carlos Maravilla Privitera';

/* Operadores Racionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

if (edad >= 18) {
    //Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
    if (edad <= 33) {
        console.log('Todavia es joven');
    } else if (edad >= 70) {
        console.log('Eres anciano');
    } else {
        console.log('Ya no eres  joven');
    }
} else {
    //Es menor de edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

// Operadores Lógicos
/*
    AND(Y): &&
    OR(O): ||
    NEGACION: !
*/

var year = 2018;

// Negación

if (year != 2016) {
    console.log("El año no es 2016, el año es:" + year);
}

// AND

if (year >=2000 && year <= 2020) {
    console.log("Estamos en la era actual");
    }else {
        console.log("Estamos en la era postmoderna");
}

// OR

if (year >=2008 || year == 2018) {
    console.log("El año acaba en 8");
}

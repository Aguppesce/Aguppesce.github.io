 'use strict' 

// Let y var

// Prueba con var

var numero = 20;

console.log(numero); // valor

// Cambio el valor

if(true){
    numero = 40;
    console.log(numero); // valor 40
}
console.log(numero=30); // valor 40

// Prueba con let

var texto = "Curso de JS";

console.log(texto); // Valor JS

if(true){
    let texto = "Curso de Angular";
    console.log(texto); // Valor Angular
}
console.log(texto); // Valor JS

// Con LET limitamos una sola y VAR define una variable global
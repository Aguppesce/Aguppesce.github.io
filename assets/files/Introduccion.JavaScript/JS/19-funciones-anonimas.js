'use strict'

// Funciones y Callback

// Es una funcion que no tiene nombre

var peliculas = nombre => {
    return "La pelicula es: "+nombre;
}

// Un Callback es una función que ejecuta otra función dentro

function sumame(numero1, numero2){
    var sumar = numero1+numero2;
    
    return sumar;
}

console.log(sumame(4,5));

// Función flecha

//=>

// En ves de usar function(), podemos usar =>
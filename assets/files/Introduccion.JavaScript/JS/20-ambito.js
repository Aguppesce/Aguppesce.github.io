'uset strict'

// El ambito de las variables

var texto = "Hola soy una variable global";

var numero = 10;

function HolaMundo(texto){
    var elemento = "Estoy adentro";
    
    console.log(texto);
    console.log(numero);
    console.log(elemento);
    
}

HolaMundo(texto);

// Si una variable ha sido creada adentro de una función esta no se puede llamar desde afuera, solamente puede ser llamada desde dentro de la función en donde fue creada.

console.log(elemento);
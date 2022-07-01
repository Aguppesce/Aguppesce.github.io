'use strict'

// Modo infinito

//Bucle While (Mientras que)

var year = 2040;

// Operador de incremento

while(year != 1998) {
    // ejecuta esto
    console.log("Estamos en el año: " + year);
    
    // Parar un bucle 
    /*if (year == 2020) {
        break;
        }*/
    
    year--;
}

// Do while
// Ejecuta y comprueba después

var years = 30;

do {
    alert("Solo cuando sea diferente a 20");
    years--;
} while(years > 25)
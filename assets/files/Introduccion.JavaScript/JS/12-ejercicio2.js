'use strict'

/*
    Utilizando un bucle, mostrar la suma y la media de todos los números introducidos, hasta introducir un número negativo y mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduce numeros hasta que metas uno negativo', 0));
    
    if(isNaN(numero)){
        numero =0;
    }else if(numero >=0){
        suma = suma + numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);
}while(numero >= 0)
    
    alert("la suma de todos los numeros: "+ suma);
    alert("la media de todos los numeros: "+ (suma/contador));
'use strict'

// Arrays, arreglos, matrices

var nombre = "maravilla";

var nombres = ["maravilla","privitera","messi"]
// 0            1           2
var lenguajes = new Array("PHP","Wordpress","Angular");
//      0       1           2    
//console.log(nombres[1]);
/*
var elemento = parseInt(prompt("Que elemento del array quieres?",0));

if(elemento >= nombres.length) {
    alert("Introduce el numero correcto menor que"+nombres.length);
}else{
    alert("El usuario seleccionador es:"+nombres[elemento])
}
//alert(nombres[elemento]);
*/

document.write("<h1>Lenguajes de Programación</h1>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++) {
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/

lenguajes.forEach((elemento, index, data)=>{
    document.write("<li>"+elemento+"</li>")
});

document.write("</ul>");
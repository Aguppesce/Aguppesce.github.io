'use strict'

// Metodos de busqueda

var texto1 = "Bienvenidos a JavaScript";

var texto2 = "No estoy aprendiendo";

/* Buscar en posición
   
    indexOf, indica la posición en la que esta
    search, indica la posición del elemento
    match, busca una palabra o parte de una palabra (diferencia mayusculas de minusculas)
    includes, si la palabra esta dentro de una palabras u oración va a tirar un "true" si no tira un "false"
    
        
    var busqueda = texto1.search("a");
console.log(busqueda);
*/

/* Sacar frases 

var busqueda = texto1.includes("mierda");
console.log(busqueda);
*/

// Reemplazar texto

var busqueda = texto1.replace("JavaScript","Angular");
console.log(busqueda);
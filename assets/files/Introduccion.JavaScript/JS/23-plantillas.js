'use strict'

// Plantillas de texto, plantillas de javascript

var nombre = prompt("Introduce tu nombre");

var apellido = prompt("Introduce tu apellido");

// var texto = "Mi nombre es: "+nombre+"</br> Mi apellido es: "+apellido

var texto = ` 
    <h1>Hola</h1>
    <h3>Nombre: ${nombre}</h3>
    <h1>Apellido: ${apellido}</h1>
`;
    
document.write(texto);

//ESTO ES EN JAVASCRIPT
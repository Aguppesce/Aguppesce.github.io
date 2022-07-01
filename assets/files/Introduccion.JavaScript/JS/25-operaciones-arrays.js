'use strict'

var categorias = ['accion', 'terror', 'suspenso'];

var peliculas = ['Torrente1','Torrente2','Torrente3','Torrente4'];

var cine = [categorias,peliculas];

// console.log(cine[0][1]);

var elemento = prompt("Introduce tu película: ");

while(elemento!="acabar"){
    elemento=prompt("Introduce tu película: ");
    peliculas.push(elemento);
}

console.log(peliculas);

/*
    peliculas.push(elemento);
    push: agrega algo a un array
*/
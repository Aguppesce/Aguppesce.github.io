//VIDEO 96: 03:40

//Variables
const presupuestoUsuario = prompt("Cuál es tu presupuesto semanal?");
const formulario = document.getElementById("agregar-gasto");

let cantidadPresupuesto;

//Clases
//Clase de presupuesto
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    //Método para ir restando del presupuesto actual
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }

}

//Clase de Interfaz maneja todo lo relacionado a el HTML
class Interfaz{
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector("span#total");
        const restanteSpan = document.querySelector("span#restante");

        //Insertar al HTML
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }
}

//Event Listeners
document.addEventListener("DOMContentLoaded", function(){
    if(presupuestoUsuario === null || presupuestoUsuario === ""){
        window.location.reload();
    }else{

        //Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        
        //Instanciar la clase de Interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});

formulario.addEventListener("submit",function(e){
    e.preventDefault();
    
    //Leer del formulario de Gastos
    const nombreGasto = document.querySelector("#gasto").value;
    const cantidadGasto = document.querySelector("#cantidad").value;

    //Instanciar la Interfaz
    const ui = new Interfaz();

    //Comprobar que los campos no esten vacíos
    if(nombreGasto === "" || cantidadGasto === ""){
        console.log("Hubo un error")
    }else{
        console.log("El gasto se agrego");
    }
});


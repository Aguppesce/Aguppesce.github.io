//Constructor para Seguro
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

//Toodo lo que se muestra
function Interfaz() { }

//Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarError = function (mensaje, tipo) {
    const div = document.createElement("div");

    if (tipo === "error") {
        div.classList.add("mensaje","error");
    } else {
        div.classList.add("mensaje","correcto");
    }

    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function(){
        document.querySelector(".mensaje").remove();
    },3000);
}

//Event Listener 
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    //Leer la marca selecciona del select
    const marca = document.getElementById("marca");
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    //Leer el año seleccionado del <select>
    const anio = document.getElementById("anio");
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    //Lee el valor del radio button
    const tipo = document.querySelector("input[name='tipo']:checked").value;

    //Crear instancia de Interfaz
    const interfaz = new Interfaz();

    //Revisamos que los campos no esten vacíos
    if (marcaSeleccionada === "" || anioSeleccionado === "" || tipo === "") {
        //Interfaz imprimiendo un error
        interfaz.mostrarError("Faltan datos, revisa el formulario y prueba de nuevo", "error");
    } else {
        //Instancia seguro y mostrar interfaz
        console.log("Todo correcto");
    }
});

const max = new Date().getFullYear(),
    min = max - 20;

const selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}
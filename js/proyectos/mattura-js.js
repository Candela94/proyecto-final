

// --------------------------
//      Variables
//---------------------------

const headers = document.querySelectorAll(".Acordeon-header");
const contenido = document.querySelectorAll(".Acordeon-contenido");



// --------------------------
//   Funciones y listeners
//---------------------------

headers.forEach((header) => {

    header.addEventListener("click", ( )=> {

        //Buscamos el siguiente hermano directo relacionado 
        const cont = header.closest("Acordeon-contenido");

        contenido.forEach((content) => {
            content.classList.remove("active");

        });

        cont.classList.toggle("active");


    });

});
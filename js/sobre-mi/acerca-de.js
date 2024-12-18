


//1. Constantes y variables

const paginas = document.querySelectorAll(".Acordeon-pag");
const contenidos = document.querySelectorAll(".Acordeon-contenido");



//2. Funciones y addEventListeners




paginas.forEach((pagina) => {

    pagina.addEventListener("click", () => {


        //const contentId = pagina.dataset.content;
        //const content = document.getElementById(contentId);


        //cerramos todas las paginas antes de abrir
        // yo habia puesto directamente pag.classList.remove("u-isActive)
        paginas.forEach(pag => {
            if (pag !== pagina) {
                pag.classList.remove("u-isActive");
                pag.querySelector(".Acordeon-contenido").classList.remove("u-txtActive");
            }
        });


        // contenido.forEach(cont => {
        //     cont.classList.remove("u-txtActive");
        // });

        //abrimos página seleccionada


        pagina.classList.toggle("u-isActive");
        const contenido = pagina.querySelector(".Acordeon-contenido");
        contenido.classList.add("u-txtActive");
        // if (content) {
        // content.classList.add("u-txtActive");
        // }
    });




});


paginas[0].click();
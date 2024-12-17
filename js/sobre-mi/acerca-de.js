


//1. Constantes y variables

const paginas = document.querySelectorAll(".Main-acordeonPag");
const contenido = document.querySelectorAll(".Main-acordeonPagContenido");



//2. Funciones y addEventListeners

paginas.forEach((pagina) => {

    pagina.addEventListener("click", () => {


        const contentId = pagina.dataset.content;
        const content = document.getElementById(contentId);


        //cerramos todas las paginas antes de abrir
        // yo habia puesto directamente pag.classList.remove("u-isActive)
        paginas.forEach(pag => {
            if (pag !== pagina) {
                pag.classList.remove("u-isActive")
            }
        });


        contenido.forEach(cont => {
            cont.classList.remove("u-txtActive");
        });

        //abrimos página seleccionada


        pagina.classList.toggle("u-isActive");
        if (content) {
        content.classList.add("u-txtActive");
        }
    });




});
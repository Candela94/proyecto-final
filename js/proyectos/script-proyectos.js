

//Datos de las cards
const proyectos = [


    { title: "Mattura", description: "Mattura", alt: "Mattura", file: "img/mattura/mattura-portada.png", logo: "img/mattura/logo-light-mattura.png", description: "imagen 1" },

    { title: "Rutea", description: "Rutea", alt: "Rutea", file: "img/rutea/rutea-portada.png", logo: "img/rutea/rutea-logo.png", description: "imagen 2" },

    { title: "unavioska.", description: "unavioska.", alt: "unavioska.", file: "img/vioska/vioska-portada.png", logo: "img/vioska/una-vioska-logo.png", description: "imagen 3" },

    { title: "musicplayer", description: "musicplayer", alt: "musicplayer", file: "img/vioska/vioska-portada.png", logo: "img/vioska/una-vioska-logo.png", description: "imagen 3" },

    { title: "cocoZone", description: "cocoZone", alt: "cocoZone", file: "img/cocos/cocos-portada.png", logo: "img/cocos/cocos-logo.png", description: "imagen 4" },

    { title: "Giftopia", description: "Giftopia", alt: "Giftopia", file: "img/giftopia/d.png", logo: "img/giftopia/giftopia-logo.png", description: "imagen 5" },

];



// -----------------------------------------------
//    1.Selección de constantes y variables 
// -----------------------------------------------


const slider = document.querySelector('.Main-slider');

const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");


const pag1 = proyectos.slice(0, 3); //la primera página va a tener los 3 primeros proyectos 
const pag2 = proyectos.slice(3, 6); //segunda pagina con los ultimos 3 proyectos 

let paginaActual = 1; //mostramos la primera pagina






// -----------------------------------------------
//    2.Definición de funciones y eventListeners
// -----------------------------------------------


function mostrarCards() {

    slider.innerHTML = ""; //limpiamos slider antes de agregar cards

    let proyectosPagina;

    if (paginaActual === 1) {
        proyectosPagina = pag1;  //mostrar proyectos 1,2 y 3


    } else if (paginaActual === 2) {  //mostramos proyectos 4, 5 y 6
        proyectosPagina = pag2;

    }




    proyectosPagina.forEach((proyecto) => {

        const card = document.createElement('div');

        card.classList.add('Main-card');
        card.innerHTML = `
                        
                        <img src = "${proyecto.file}" alt = "${proyecto.alt}" class= "card-img">

                         <div class="card-info">
                        <h3 class="card-tittle">${proyecto.title}</h3>
                        <p class="card-p">${proyecto.description}</p>
                    </div>

        `

        //agregar card al slider 
        slider.appendChild(card);

    });
}








btnSig.addEventListener('click', () => {
  

    if(paginaActual < 2) {
        paginaActual++;
        mostrarCards();
    }

});


btnAnt.addEventListener('click', () => {

    if(paginaActual > 1) {
        paginaActual--;
        mostrarCards();
    }

});







// -----------------------------------------------
//    3.Ejecutamos
// -----------------------------------------------

mostrarCards();

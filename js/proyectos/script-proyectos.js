


const lista_imagenes = [

    
    {file: "img/mattura/mattura-portada.png" , logo: ".img/mattura/logo-light-mattura.png", description : "imagen 1"}, 
    {file: "img/rutea/rutea-portada.png" ,logo: ".img/rutea/rutea-logo.png",  description : "imagen 2"},
    {file: "img/vioska/vioska-portada.png" , logo: ".img/vioska/una-vioska-logo.png", description : "imagen 3"},
    {file: "img/cocos/cocos-portada.png" , logo: ".img/cocos/cocos-logo.png", description : "imagen 4"},
    {file: "img/giftopia/d.png" , logo: ".img/giftopia/giftopia-logo.png", description : "imagen 5"},

]



// -----------------------------------------------
//    1.Selección de constantes y variables 
// -----------------------------------------------


const slider = document.querySelector('.Slider');
const images = [];    //esto va a ser una lista de elementos html con imágenes




const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");

const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");


let indice = 0; //indice de la imagen actual 






// -----------------------------------------------
//    2.Definición de funciones y eventListeners
// -----------------------------------------------


// Event listeners 

btnSig.addEventListener("click", siguienteImagen );
btnAnt.addEventListener("click", anteriorImagen);




//Funciones 



function mostrarImagenes(){
    console.log("Se están cargando las imágenes");

    slider.innerHTML = ""; //limpieza del contenedor del slider 
    const {file,description, logo} = lista_imagenes[indice];

    const img = document.createElement("img");
    img.classList.add("Slider-img");
    img.src = file;
    img.alt = description;
    img.logo = logo;


   const sliderLogo = document.createElement("img");
   sliderLogo.classList.add("Slider-logo")



    slider.appendChild(img);


//esto es lo que tenia yo, chat gpt me ha corregido. 

 // lista_imagenes.map((imagen) => {

    //     const img = document.createElement('img');  //creamos una etiqueta imagen
    //     img.classList.add("Slider-img");
    //     img.src = `${imagen.file}`;
    //     img.alt = imagen.description;

    //     slider.appendChild(img);
       


    //     totalImages = images.length;

    // });



};


function siguienteImagen() {
    indice = (indice + 1) % lista_imagenes.length; //avanzamos en la lista 
    mostrarImagenes();
}


function anteriorImagen() {

if (indice === 0) {
    indice = lista_imagenes.lenght -1; } else { indice -- ;}
    mostrarImagenes();
}

    // indice = (indice - 1 + lista_imagenes.lenght) % lista_imagenes.length; //avanzamos en la lista 
    // mostrarImagenes();






// -----------------------------------------------
//    3.Ejecutamos
// -----------------------------------------------

mostrarImagenes();
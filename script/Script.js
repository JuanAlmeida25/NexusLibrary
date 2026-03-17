const tituloOriginal = 'Nexus Library';
const logoOriginal = "src/Logo_Nexus.svg";
let temporizador;

const librosBanner = [

    {
        categoria: "Realismo mágico / Cien Años de Soledad",
        titulo: "Una obra que redefinió la literatura latinoamericana.",
        descripcion: "Cien años de soledad narra la historia de macondo y de una familia marcada por el amor, la memoria y el estilo. Una novela donde lo imposible ocurre con naturalidad y la soledad atraviesa generaciones. Un clásico que se lee, se vive.",
        imagen: "src/bookCovers/cienAnosbook.svg"
    },
    {
        categoria: "Fantasía Épica / Juego de Tronos",
        titulo: "El invierno se acerca a la biblioteca.",
        descripcion: "Sumérgete en la lucha por el Trono de Hierro donde las traiciones y los dragones marcan el destino de Poniente.",
        imagen: "src/bookCovers/aGameOfThrones.svg"
    },
    {
        categoria: "Misterio / El código Da Vinci",
        titulo: "Descubre los secretos ocultos en el arte.",
        descripcion: "Un asesinato en el Louvre desencadena una búsqueda frenética de una verdad protegida por siglos.",
        imagen: "src/bookCovers/daVinciCode.svg"
    }
]

let indiceActual = 0;

const bannerImg = document.querySelector('.book-main');
const bannerTitulo = document.querySelector('.banner_content h1');
const bannerCat = document.querySelector('.category');
const bannerDesc = document.querySelector('.description');

/*function cambiarBanner() {
    indiceActual = (indiceActual + 1) % librosBanner.length;
    const libro = librosBanner[indiceActual]

    document.querySelector('.banner').style.opacity = 0;

    setTimeout(() => {
        bannerImg.src = libro.imagen;
        bannerTitulo.innerText = libro.titulo;
        bannerCat.innerText = libro.categoria;
        bannerDesc.innerText = libro.descripcion;
        document.querySelector('.banner').style.opacity = 1
    }, 500);
};

setInterval(cambiarBanner, 7000)*/

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function actualizarBanner(index) {
    const banner = document.querySelector('.banner');
    banner.style.opacity = 0;

    setTimeout(() => {
        const libro = librosBanner[index];
        bannerImg.src = libro.imagen;
        bannerTitulo.innerText = libro.titulo;
        bannerCat.innerText = libro.categoria;
        bannerDesc.innerText = libro.descripcion;
        banner.style.opacity = 1;
    }, 500);
};

nextBtn.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % librosBanner.length;
    actualizarBanner(indiceActual);
    reiniciarIntervalo()
});

prevBtn.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + librosBanner.length) % librosBanner.length;
    actualizarBanner(indiceActual);
    reiniciarIntervalo()
});

let autoCambio = setInterval(() => {
    indiceActual = (indiceActual + 1) % librosBanner.length;
    actualizarBanner(indiceActual);
}, 5000);

function reiniciarIntervalo() {
    clearInterval(autoCambio);
    autoCambio = setInterval(() => {
        indiceActual = (indiceActual + 1) % librosBanner.length;
        actualizarBanner(indiceActual);
    }, 5000);
};


//Nombre de pestaña

window.addEventListener('blur', () => {
    clearTimeout(temporizador);
    document.title = "¡Vuelve por favor!";
});

window.addEventListener('focus', () => {
    document.title = "¡Gracias por volver!";

    temporizador = setTimeout(() => {
        document.title = tituloOriginal;
    }, 2000);
});
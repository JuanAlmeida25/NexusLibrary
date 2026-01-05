const tituloOriginal = 'Nexus Library';
const logoOriginal = "src/Logo_Nexus.svg"; 
let temporizador;

window.addEventListener('blur', () => {
    clearTimeout(temporizador);
    document.title = "¡Vuelve por favor! 🥺";
});

window.addEventListener('focus', () => {
    document.title = "¡Gracias por volver! 😊";

    temporizador = setTimeout(() => {
        document.title = tituloOriginal;
    }, 2000);
});
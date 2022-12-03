function iniciarJuego() {
    let botonMokeponJugador = document.getElementById('boton-mokepones')
    botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador)
}

function seleccionarMokeponJugador() {
    alert("SELECCIONASTE TU MOKEPON")

}

window.addEventListener('load', iniciarJuego)
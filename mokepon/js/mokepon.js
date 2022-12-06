function iniciarJuego() {
    let botonMokeponJugador = document.getElementById('boton-mokepones')
    botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador)
}

function seleccionarMokeponJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    if (inputHipodoge.checked) {
        alert("Seleccionaste a HIPODOGE")
    } else if (inputCapipepo.checked) {
        alert("Seleccionaste a CAPIPEPO")
    } else if (inputRatigueya.checked) {
        alert("Seleccionaste a RATIGUEYA")
    } else {
        alert('SELECCIONA UN MOKEPON') 
    }
}

window.addEventListener('load', iniciarJuego)
function iniciarJuego() {
    let botonMokeponJugador = document.getElementById('boton-mokepones')
    botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador)
}

function seleccionarMokeponJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMokeponJugador = document.getElementById('mokepon-jugador')


    if (inputHipodoge.checked) {
        spanMokeponJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMokeponJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMokeponJugador.innerHTML = 'Ratigueya'
    } else {
        alert('SELECCIONA UN MOKEPON') 
    }
}

window.addEventListener('load', iniciarJuego)
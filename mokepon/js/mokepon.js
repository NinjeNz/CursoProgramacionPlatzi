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

    seleccionarMokeponEnemigo()
}

function seleccionarMokeponEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    let spanMokeponEnemigo = document.getElementById('mokepon-enemigo')
    
    if (ataqueAleatorio == 1) {
        spanMokeponEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2) {
        spanMokeponEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMokeponEnemigo.innerHTML = 'Ratigueya'
    }
    
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
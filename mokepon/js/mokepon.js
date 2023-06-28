let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMokeponJugador = document.getElementById('boton-mokepones')
    botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
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
    let mokeponAleatorio = aleatorio(1,3)
    let spanMokeponEnemigo = document.getElementById('mokepon-enemigo')
    
    if (mokeponAleatorio == 1) {
        spanMokeponEnemigo.innerHTML = 'Hipodoge'
    } else if (mokeponAleatorio == 2) {
        spanMokeponEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMokeponEnemigo.innerHTML = 'Ratigueya'
    }
    
}

function ataqueFuego() {
    ataqueJugador='FUEGO'
    ataqueRandomEnemigo()
}

function ataqueAgua() {
    ataqueJugador='AGUA'
    ataqueRandomEnemigo()
}

function ataqueTierra() {
    ataqueJugador='TIERRA'
    ataqueRandomEnemigo()
}

function ataqueRandomEnemigo(){
   let ataqueAleatorio = aleatorio(1,3)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
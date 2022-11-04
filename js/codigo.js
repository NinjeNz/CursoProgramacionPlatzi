 
            function aleatorio(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }

            function eleccion(jugada) {
                let resultado = ""
                if(jugada == 1) {
                    resultado = "Piedra 🥌"
                } else if(jugada == 2) {
                    resultado = "Papel 📄"
                } else if (jugada == 3) {
                    resultado = "Tijera ✂️"
                } else {
                    resultado = "MAL ELEGIDO"
                }
                return resultado
            }

            function combate(movplayer, movpc) {
                let resultado = ""
                if(movpc == movplayer){
                    alert("EMPATE")
                    empates ++
                } else if(movplayer == 1 && movpc == 3 || movplayer == 2 && movpc == 1 || movplayer == 3 && movpc == 2) {
                    alert("GANASTE")
                    triunfos ++
                } else {
                    alert("PERDISTE")
                    perdidas ++
                } 
                return resultado
                
                //Una forma mas comprimida de hacerlo utilizando matematicas
                /*resta = jugador - pc

                if(resta == 1 || resta == -2){
                    triunfos ++
                    alert("ganaste")
                } else if(resta == 0){
                    empates ++
                    alert("empataron")
                } else {
                    perdidas ++
                    alert("perdiste")
                }*/
            }

            // 1 es piedra, 2 es papel, 3 es tijera
            let jugador = 0
            let pc = 0
            let triunfos = 0
            let perdidas = 0
            let empates = 0
            while(triunfos < 3 && perdidas < 3) {
                pc = aleatorio(1,3)
                jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
                alert("Tu eliges: " + eleccion(jugador))
                alert("PC elige: " + eleccion(pc))
                combate(jugador, pc)   
            }
            alert("Ganaste " + triunfos + " veces, perdiste " + perdidas + " veces, empataron " + empates + " veces") 
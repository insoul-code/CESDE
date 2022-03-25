function iniciar(){
    console.log("Estoy iniciando el programa")
}

function procesar(){
    setTimeout(function(){
        console.log("Estoy procesando el programa")
    },3000)
}

function finalizar(){
    console.log("Estoy finalizando el programa")
}

iniciar()
procesar()
finalizar()
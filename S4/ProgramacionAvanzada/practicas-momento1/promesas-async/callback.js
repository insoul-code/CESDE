//Función principal
function principal(callback){
    setTimeout(function(){
        console.log("Soy el proceso principal")
        callback()
    },2000)
}
//Llamando la función principal - callback
principal(secundaria)

//Declarando el callback
function secundaria(){
    console.log("Soy el proceso callback")
}
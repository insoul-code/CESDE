//Función principal
function principal(){
    let promesa = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Soy el proceso principal")
            let numero = 2
            if(numero>=5){
                resolve("Soy el proceso callback (Positivo)")
            }else{
                resolve("Soy el proceso callback (Negativo)")
            }
        },2000)
    })
    return promesa
}
//Llamando la función principal - callback
principal()
.then(function(respuesta){
    console.log(respuesta)
})
.catch((error)=>{
    console.log(error)
})
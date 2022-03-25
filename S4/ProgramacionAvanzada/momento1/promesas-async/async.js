//Función principal
function principal(){
    let promesa = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Soy el proceso principal")
            let numero = 10
            if(numero>=5){
                resolve("Terminé (Positivo)")
            }else{
                resolve("Terminé (Negativo)")
            }
        },2000)
    })
    return promesa
}

async function secundaria(){
    try{
        await principal()
        console.log("Soy el proceso del callback")
    }catch(error){
        console.log("Error madafoca")
    }
}

/*Llamo a la funciíon secundaria ya que esta solo
se ejecuta (espera) si y solo si la principal termina*/
secundaria()
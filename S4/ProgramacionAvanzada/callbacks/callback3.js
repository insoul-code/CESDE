// Declarando la función principal
function registrarUsuario(nombre,edad,password,callback){
    setTimeout(function(){
        let usuario = {
            nombre,
            edad,
            password
        }
        callback(usuario)
    },3000)
}

registrarUsuario('Santiago',19,'micontra',function(usuario){
    if(usuario.edad < 18 || usuario.nombre == "Ramiro"){
        console.log("Eres menor de edad, no puedes ingresar aparte te llamas "+usuario.nombre+" y ese nombre es muy feo")
    }else{
        console.log("Bienvenido, ¡tienes $500,000 COP por nuevo usuario!")
    }
})
function funcionPrincipal(funcionSecundaria){
    setTimeout(function(){
        console.log("Soy el proceso principal")
        funcionSecundaria()
    },3000)

}

funcionPrincipal(function(){
    console.log("Soy la función secundaria")
})
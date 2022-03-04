function calcularSuma(numero1,numero2,callback){
    setTimeout(function(){
        let suma = numero1+numero2
        callback(suma)
    },5000)
}

calcularSuma(5,5,function(suma){
    console.log("La suma es: "+suma)
})
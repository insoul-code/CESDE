function construirArreglo(num1,num2,num3,num4,num5,callback){
    setTimeout(function(){
        let numeros=Array(num1,num2,num3,num4,num5)
        callback(numeros)
    },5000)
}

construirArreglo(3,4,6,7,8,function(numeros){
    let suma=0
    numeros.forEach(function(numero){
        suma = suma + numero
    })
    console.log("La suma del arreglo es: "+suma)
})
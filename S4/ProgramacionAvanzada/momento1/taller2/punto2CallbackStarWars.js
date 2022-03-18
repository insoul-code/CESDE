//Función principal
function filtrarPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,buscarPlanos){
    let planos = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
    let planosFiltrados = planos.filter(function(plano){
        return plano<=10
    })
    buscarPlanos(planosFiltrados)
}

//Función callback - llamando la función principal

filtrarPlanos(100,20,15,16,40,10,5,1,13,22,function(planos){
    if(planos.length == 0){
        console.log("Siga buscando")
    }else{
        console.log("Arranca la nave")
    }
})

let calcular = (numero) => Math.pow(numero,3);
if(calcular(2)>8){
    console.log("F")
}else{
    console.log("B")
}
let nombres = ["cucaracha","lechuga","jamon"]
let tipos = ["insecto","vegetal","animal"]
let niveles = [200,100,450,300,260]
let alimentos = []
for(let i=0; i<50; i++){
    let alimento = {}
    alimento.nombre = nombres[Math.floor(Math.random()*nombres.length)]
    alimento.tipo = tipos[Math.floor(Math.random()*tipos.length)]
    alimento.nivel = niveles[Math.floor(Math.random()*niveles.length)]
    alimentos.push(alimento)
}

//Función principal
function obtenerAlimentosVegetales(filtrarVegetales){
    setTimeout(function(){
        let arrayAlimentos = alimentos.filter(function(alimento){
            return alimento.tipo == "vegetal" && alimento.nivel >200
        })
        filtrarVegetales(arrayAlimentos)
    },1000)
}

obtenerAlimentosVegetales(function(recibirFiltrados){
    nivelesSuma=0
    recibirFiltrados.forEach(recibirFiltrado => {
        nivelesSuma += recibirFiltrado.nivel
    });
    console.log(alimentos)
    console.log(`La suma de energia de los alimentos vegetales con más de 200 de energía es: ${nivelesSuma}`)
})
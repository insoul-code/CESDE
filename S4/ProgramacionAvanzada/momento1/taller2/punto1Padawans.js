//Función principal
let padawans = [
    {nombre:"Julio",planeta:"Naboo",edad:15,estatura:"1.65"}
]

function asignarActividad(padawans,clasificar){
    setTimeout(function(){
        let arrayPadawans = padawans
        clasificar(arrayPadawans)
    },10000)
}

//Llamando función principal callback
asignarActividad(padawans,function(infoPadawans){
    infoPadawans.filter(function(infoPadawan){
        if(infoPadawan.edad>15){
            console.log("Se le asigna la actividad: Manejo de sable de luz")
        }else{
            console.log("Se le asigna la actividad: Manejo de la fuerza")
        }
    })
})
function registrarPersonas(personas,callback){
    setTimeout(function(){
        let solteros = personas.filter(function(persona){
            return (persona.estadoCivil == false)
        })
        callback(solteros)
    },3000)
}

let personasCesde = [
    {
    nombre: "Paco",
    salario: 1000000,
    estadoCivil: true
    },
    {
    nombre: "Jose",
    salario: 2000000,
    estadoCivil: false
    },
    {
    nombre: "Paco",
    salario: 1000000,
    estadoCivil: false
    }
]

registrarPersonas(personasCesde,function(solteros){
    let suma = 0;
    solteros.forEach(soltero => {
        suma = suma+soltero.salario
    });
    console.log(solteros)
    console.log(`La suma de los salarios de los solteros es: $${suma}`)
})
let personas = [
    {
        nombre: "Santiago",
        edad: 28
    },
    {
        nombre: "Monica",
        edad: 25
    },
    {
        nombre: "Jose",
        edad: 29
    },
    {
        nombre: "Sorelly",
        edad: 34
    },
    {
        nombre: "Arnulfo",
        edad: 47
    }
]

//Array métodos
//1.Filtrado

let filtrado = personas.filter(function(persona){
    return (persona.edad>40);
})

let filtradoFlecha = personas.filter(persona=>(persona.edad>40))

console.log(filtrado)
console.log(filtradoFlecha)

//2.Map
let map = personas.map(function(persona){
    return(persona.nombre+" es de Medayork")
})

let mapFlecha = personas.map(persona=>(persona.nombre+" es de Bucaramanchester"))

console.log(map)
console.log(mapFlecha)

//3.Foreach
personas.forEach(persona => {
    persona.nombre="nn";
})

console.log(personas)
//Funcion tradicional
function pilotoNave(nombrePiloto){
    let pilot = nombrePiloto;
    let result = pilot.substr(" "+8);
    return result;
}

let result = pilotoNave("ARQ2556: Nodin Chavdri")
console.log(`El piloto de la nave es:${result}`)

//Funcion tradicional
function pilotoNaveOptmizada(nombrePiloto){
    let result = nombrePiloto.substr(" "+8);
    return result;
}

let result2 = pilotoNaveOptmizada("ARQ2556: Nodin Chavdri")
console.log(`El piloto de la nave es:${result2}`)

//Optimizada arrow function
let pilotoNaveArrow = (nombrePiloto) => result = nombrePiloto.substr(" "+8);

let result3 = pilotoNaveArrow("ARQ2556: Nodin Chavdri")
console.log(`El piloto de la nave es:${result3}`)
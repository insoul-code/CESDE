//Funcion tradicional
function temperaturaEndorMoon(tempMin,tempMax){
    let tempMedia = tempMin*tempMax/100;
    return tempMedia;
}

let result = temperaturaEndorMoon(35,48)
console.log(`La temperatura media de la luna de endor es: ${result}`)

//Optimizada arrow function
let temperaturaEndorMoonArrow = (tempMin,tempMax) => result = tempMin*tempMax/100;

let result2 = temperaturaEndorMoonArrow(35,48)
console.log(`La temperatura media de la luna de endor es: ${result2}`)
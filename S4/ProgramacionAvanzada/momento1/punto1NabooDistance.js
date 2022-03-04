//Funcion tradicional
function calcularDistancia(x1,x2,y1,y2){
    let restaX = x2-x1;
    let restaY = y2-y1;
    let potenciax = Math.pow(restaX,2);
    let potenciay = Math.pow(restaY,2);
    let sumaPotencias = potenciax+potenciay;
    let raiz = Math.sqrt(sumaPotencias);
    return raiz;
}

//Optimizada
function calcularDistanciaOptimizada(x1,x2,y1,y2){
    let raiz = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    return raiz;
}

//Optimizada arrow function
let calcularDistanciaOptimizadaArrow = (x1,x2,y1,y2) => 
raiz = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))

let distanciaTradicional = calcularDistancia(0,-10,0,-10);
console.log(`La distancia es: ${distanciaTradicional.toFixed(2)}`)

let distanciaOptimizada = calcularDistanciaOptimizada(0,-10,0,-10);
console.log(`La distancia es: ${distanciaOptimizada.toFixed(2)}`)

let distanciaArrow = calcularDistanciaOptimizadaArrow(0,-10,0,-10);
console.log(`La distancia es: ${distanciaArrow.toFixed(2)}`)

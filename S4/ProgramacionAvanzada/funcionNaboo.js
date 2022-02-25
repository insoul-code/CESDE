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

let distancia1 = calcularDistancia(0,-10,0,-10);
console.log(`La distancia es: ${distancia1.toFixed(2)}`)

let distancia2 = calcularDistanciaOptimizada(0,-10,0,-10);
console.log(`La distancia es: ${distancia2.toFixed(2)}`)

let distancia3 = calcularDistanciaOptimizadaArrow(0,-10,0,-10);
console.log(`La distancia es: ${distancia3.toFixed(2)}`)

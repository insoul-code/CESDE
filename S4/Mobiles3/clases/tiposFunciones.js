//Función tradicional
function sumar(valor1, valor2){
    return valor1+valor2
}

console.log(sumar(30,70))

//Funciónn anónima
let sumar23a = function(valor1,valor2){return valor1+valor2}
console.log(sumar23a(100,200))

//Función flecha
let sumarFlecha = (valor1,valor2)=>valor1+valor2
console.log(sumarFlecha(300,200))

let sumarFlecha2 = (a,b) =>{return a+b}
console.log(sumarFlecha2(400,300))

if(sumarFlecha2(40,19)>60){
    console.log("Tiene derecho al bono")
}else{
    console.log("No tiene derecho al bono")
}

//Ternarios
console.log(sumarFlecha2(67,2) > 70 ? "Tiene derecho a un viaje" : "Gana una lavadora Haceb")

//Potencia de cualquier número
let mathPo = (num,potencia)=>Math.pow(num, potencia)
console.log(mathPo(7,2))//Potencia
console.log(mathPo(2,1/2))//Raíz cuadrada
console.log(mathPo(2,1/3))//Raíz cubica
console.log(mathPo(2,1/4))//Raíz cuarta

//Raíz cuadrada de cualquier número
let raizCuadrada = (numero)=>Math.sqrt(numero)
console.log(raizCuadrada(16))

//Raíz cubo de cualquier número
let raizCubo = (numero)=>Math.cbrt(numero)
console.log(raizCuadrada(16))
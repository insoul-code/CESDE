let nota1 = 3.5
let nota2 = 4.0
let nombre = "kase-o"
var asignatura = "Móviles 3"
let estado = false

if(estado){
    console.log(`Su estado es activo y su nombre es: ${nombre}`)
}

// 1. For números pares

/*console.log("Los siguientes números son pares")
 for(let i = 1; i<= 10; i++){
     if(i % 2 == 0){
         console.log(i)
     }
 }*/

// 2. While números impares

// let n = 1;
/* console.log("Los siguientes números son impares")
 while(n <= 10){
     if(n % 2 == 1){
         console.log(n)
     }
     n++
 }*/

// 3. Ternario

/* disponible = estado ? "Disponible" : "No disponible"
 console.log(disponible)*/

 // Do.. While Fibonacci

// 4. Array
/*numeros = [10,20,30,40,50]
for(let pos = 0; pos < numeros.length; pos++){
    console.log(numeros[pos])
}

// 5. For of: Recorrer una lista
/*for(numero of numeros){
    console.log(`El número del array es ${numero}`)
}

let datosemp = {"id":"10", "nombre":"Fly So High", "estado":true, "salario":6000000}
console.log(`El nombre del empleado es ${datosemp.nombre} y su salario es $${datosemp.salario}`)

//Iterador de objetos
for (campo in datosemp){
    console.log(`${campo}: ${datosemp[campo]}`)
}*/

function mensaje(mens){
    console.log(mens)
}

mensaje("Mensaje desde el parámetro")
mensaje("Welcome to tomorrowland")

function calcular(val1,val2,operador){
    let resultado
    switch (operador){
        case "+":
            resultado = val1 + val2
            break
        case "-":
            resultado = val1 - val2
            break
        case "*":
            resultado = val1 * val2
            break
        case "/":
            resultado = val1 / val2
            break
        default:
            console.log("Las operaciones que puedes realizar son sumar(+), dividir(/), restar(-) y multiplicar(*)")
    }
    return (resultado) 
}

misuma = calcular(30,70,"+")
miresta = calcular(70,30,"-")
mimultiplica = calcular(60,24,"*")
midivision = calcular(30,70,"/")
console.log(`Suma: ${misuma}, Resta: ${miresta}, Multiplicación: ${mimultiplica}, División: ${midivision}`)
console.log(`División simple ${calcular(10,2,"/")}`)

if(calcular(45,63,"*") > 2000000){
    console.log("Es superior a 2 millones")
}else{
    console.log("Es igual o menor que 2 millones")
}

console.log(calcular(20,5,"*")>50? "Es superior a 50": "Es inferior o igual a 50")

console.log("Serie de Fibonacci")
function fibonacci(cant){
    var limit = cant;
	var fibo = [0,1];
    console.log(0)
	for(i=2; i <= limit; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
		console.log(fibo[i]);	
	}
}

fibonacci(10)

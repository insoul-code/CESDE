let nombrePersona = "Iniesta"
function saludar(nombrePersona){
    return("Buenos días "+nombrePersona);
}

console.log(saludar("Zlatan"))
let result=saludar(nombrePersona)
console.log(result)

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
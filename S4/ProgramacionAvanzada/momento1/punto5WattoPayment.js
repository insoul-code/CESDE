const salarioMensual = 3500000;
const comision = 1500000;

//Funcion tradicional
function salarioMensualVendedor(numNavesVendidas){
    let comisiones = comision * numNavesVendidas
    let salario = salarioMensual+comisiones*0.95
    return salario
}

let salarioPersona = salarioMensualVendedor(3)
let convertSalario =  Intl.NumberFormat('es-CO')
console.log(`El salario es: $${convertSalario.format(salarioPersona)} COP`)

//Optimizada arrow function
let salarioMensualVendedorArrow = (numNavesVendidas) => {
    comisiones2 = comision*numNavesVendidas
    return salrioNeto = salarioMensual+comisiones2*0.95
}

let salarioPersona2 = salarioMensualVendedorArrow(3)
let convertSalario2 =  Intl.NumberFormat('es-CO')
console.log(`El salario es: $${convertSalario2.format(salarioPersona2)} COP`)
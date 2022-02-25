/*Callbacks (Sirve para invocar otra función dentro de otra función)
 function saludar(){
     var name = prompt("Ingrese nombre");
     alert(`Hola, ${name}`);
 }

 function login(){
     var user = prompt("Ingrese usuario");
     alert(`Bienvenido, ${user}`);
 }

 function documento(){
     var di = prompt("Ingrese identificación");
     alert(`Su identificación es, ${di}`);
 }

 function llamarFuncion(cfn){
    //  var name = prompt("Ingrese nombre");
    //  llamar la función saludar
     cfn()
 }

 llamarFuncion(saludar)
 llamarFuncion(login)
 llamarFuncion(documento)*/

/*function operaciones() {
    var number1 = parseInt(prompt("Ingrese numero 1"));
    var number2 = parseInt(prompt("Ingrese número 2"));
    let sumar = number1+number2;
    let restar = number1-number2;
    let multiplicar = number1*number2;
    let dividir = number1/number2;
    alert(`El resultado de ${number1} y ${number2} en las diferentes operaciones aritmeticas es: 
    \nSuma: ${sumar}, 
    \nResta: ${restar}, 
    \nMultiplicación: ${multiplicar}, 
    \nDivisión: ${dividir}`);
}

function operacionsCuadradas(){
    var num1 = parseInt(prompt("Ingrese numero 1"));
    var num2 = parseInt(prompt("Ingrese número 2"));
    let potencia = Math.pow(num1,num2)
    let cubo = Math.sqrt(num1,num2)
    alert(`El resultado de ${num1} y ${num2} en las diferentes raices y potencia es: 
    \nPotencia: ${potencia}, 
    \nRaíz: ${cubo}`);
}

function callB(llamar){
    llamar()
}

callB(operaciones);
callB(operacionsCuadradas);*/

let sumarFlecha = (valor1,valor2) => {
    result = valor1+valor2;
    alert(`El resultado es, ${result}`);
};
let restarFlecha = (valor1,valor2) => {
    result = valor1-valor2;
    alert(`El resultado es, ${result}`);
};
let multiplicarFlecha = (valor1,valor2) => {
    result = valor1*valor2;
    alert(`El resultado es, ${result}`);
};
let dividirFlecha = (valor1,valor2) => {
    result = valor1/valor2;
    alert(`El resultado es, ${result}`);
};

function callBack(funt){
    let number1 = parseInt(prompt("Ingrese numero 1"));
    let number2 = parseInt(prompt("Ingrese número 2"));
    funt(number1,number2);
}

callBack(sumarFlecha)
callBack(restarFlecha)
callBack(dividirFlecha)
callBack(multiplicarFlecha)

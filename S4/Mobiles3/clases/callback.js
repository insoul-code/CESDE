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

/*let sumarFlecha = (valor1,valor2) => {
    result = valor1+valor2;
    alert(`El resultado de la suma es: ${result}`);
};
let restarFlecha = (valor1,valor2) => {
    result = valor1-valor2;
    alert(`El resultado de la resta es: ${result}`);
};
let multiplicarFlecha = (valor1,valor2) => {
    result = valor1*valor2;
    alert(`El resultado de la multiplicación es: ${result}`);
};
let dividirFlecha = (valor1,valor2) => {
    result = valor1/valor2;
    alert(`El resultado de la división es: ${result}`);
};

function callBack(funt){
    let number1 = parseInt(prompt("Ingrese numero 1"));
    let number2 = parseInt(prompt("Ingrese número 2"));
    funt(number1,number2);
}

callBack(sumarFlecha)
callBack(restarFlecha)
callBack(multiplicarFlecha)
callBack(dividirFlecha)*/

/*let myImage = document.getElementById('img')
myImage.style.visibility = "hidden"

function servidor(){
    setTimeout(function(){
      console.log('El servidor ha generado una respuesta...')
      myImage.style.visibility = "hidden"
    },5000)
}

function fcpeticion(fn){
    fn() // Simular la peticion al servidor
    document.getElementById("parrafo").innerHTML = "Hello World";
    myImage.style.visibility = "visible"
}

// Ejecución del callback 
fcpeticion(servidor)*/

//Promesas

/*const myPromise = new Promise((resolve, reject) => {
    let myState = false;
    if(myState){
        resolve("Esta habilitado")
    }else{
        reject("No esta habilitado")
    }
});

let misdatos = document.getElementById("parrafo")

myPromise
    .then((message)=>{
        misdatos.innerHTML = message
    })
    .catch(function(error){
        misdatos.innerHTML = error
    })*/

function fpromesa(salario){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(salario > 1800000){
                let empleadoUno = {cedula:"123", nombre:"Santiago Restrepo", telefono:"3004987668"};
                resolve(empleadoUno)
            }else{
                reject("No tiene acceso al evento")
            }
        },3000)
    })
}

/*let showInfoEmpleado = document.getElementById("listaItems")

fpromesa(2000000)
    .then((empleado)=>{
        showInfoEmpleado.innerHTML = empleado.nombre;
        console.log(`Cédula: ${empleado.cedula}, Nombre: ${empleado.nombre}, Teléfono: ${empleado.telefono}`)
    })
    .catch(function(valor){
        console.log(valor)
    })*/

let usuarios = [
    {user:"TiagoResru",nombre:"Santiago Restrepo",email:"tiago@gmail.com"},
    {user:"Anaconda",nombre:"Ana Maria Restrepo",email:"anaconda@gmail.com"},
    {user:"Moni",nombre:"Monica Mejia",email:"moni@gmail.com"},
    {user:"Juma",nombre:"Jose Maria",email:"jose@gmail.com"}
]

function promesaUsuarios(datos){
    return new Promise((resolve,reject)=>{
        let estado = true;
        if(estado){
            resolve(datos)
        }
        else{
            reject("No hay información para mostrar.")
        }
    })
}



//Ejecutar promesa
promesaUsuarios(usuarios)
    .then((data)=>{
        //Recorrer arreglo de objetos
        let html = "";
        html += `<table><th>Usuario</th><th>Nombre</th><th>Email</th>`
        for(let i=0; i<data.length; i++){
            html += `<tr>
                        <td>${data[i].user}</td>
                        <td>${data[i].nombre}</td>
                        <td>${data[i].email}</td>
                    </tr>`;
        }
        html += `</table>`
        document.getElementById('datosUsuarios').innerHTML = html;
    })
    .catch((error)=>{
        document.getElementById('datosUsuarios').innerHTML = error;
    })

//Async y await
function promesaAsync(){
    return new Promise((resolve,reject)=>{
        console.log("Cargando los usuarios");
        setTimeout(()=>{
            resolve(usuarios)
        },3000)
    })
}

//Función que invoca la promesa de tipo async
async function obtenerUsuarios(){
    let misUsuarios = await promesaAsync()
    console.log(misUsuarios)
}
obtenerUsuarios()
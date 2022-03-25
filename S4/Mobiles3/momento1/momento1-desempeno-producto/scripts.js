let inmuebles = [
    {idInmueble:"001",direccion:"Calle 12 54 56",precio:300000000,estado:true},
    {idInmueble:"002",direccion:"Cra 98 67 sur 30",precio:450000000,estado:true},
    {idInmueble:"003",direccion:"Avenida 80 47 89",precio:160000000,estado:false},
    {idInmueble:"004",direccion:"Calle 42 Sur",precio:190000000,estado:true},
    {idInmueble:"005",direccion:"Diagonal 32b",precio:250000000,estado:true},
    {idInmueble:"006",direccion:"Calle 40aa Sur",precio:360000000,estado:true},
    {idInmueble:"007",direccion:"Calle 40dd Sur",precio:233000000,estado:true},
    {idInmueble:"008",direccion:"Carrera 6 Este",precio:120000000,estado:false},
    {idInmueble:"009",direccion:"Camino De La Vida 78",precio:90000000,estado:true},
    {idInmueble:"010",direccion:"Carrera 25aa",precio:120000000,estado:true}
]

let idInmueble = document.getElementById('idInmueble')
let direccion = document.getElementById('direccion')
let precio = document.getElementById('precio')
let mensajeidInmueble = document.getElementById('mensajeidInmueble')
let mensajeDireccion = document.getElementById('mensajeDireccion')
let mensajePrecio = document.getElementById('mensajePrecio')
let btnEnviar = document.getElementById('btnEnviar')
let btnBuscar = document.getElementById('btnBuscar')
let btnListar = document.getElementById('btnListar')
let enviado = document.getElementById('enviado')
let errorEnviado = document.getElementById('errorEnviado')
let convertCop =  Intl.NumberFormat('es-CO')

//Validación de formulario
idInmueble.addEventListener('focus',function(){
    mensajeidInmueble.innerHTML = "El campo es obligatorio y solo se aceptan números"
})
idInmueble.addEventListener('blur',function(){
    mensajeidInmueble.innerHTML = ""
})
direccion.addEventListener('focus',function(){
    mensajeDireccion.innerHTML = "La dirección es obligatoria"
})
direccion.addEventListener('blur',function(){
    mensajeDireccion.innerHTML = ""
})
precio.addEventListener('focus',function(){
    mensajePrecio.innerHTML = "El precio debe estar entre 100 millones y 500 millones de pesos COP"
})
precio.addEventListener('blur',function(){
    mensajePrecio.innerHTML = ""
})

function enviarInmueble(id,dir,pre){
    return new Promise((resolve,reject)=>{
        if(id != "" && dir != "" && pre != ""){
            resolve("El inmueble ha sido enviado")
        }
        else{
            reject("No se han diligenciado todos los campos")
        }
    })
}


function enviarInfo(){
    setTimeout(function(){
        enviarInmueble(idInmueble.value,direccion.value,precio.value)
        .then((res)=>{
            document.getElementById('respuesta').innerHTML = res
            document.getElementById('respuesta').style.display = "block"
            document.getElementById('idInmueble').value = ""
            document.getElementById('direccion').value = ""
            document.getElementById('precio').value = ""
        })
        .catch((error)=>{
            document.getElementById('respuesta').innerHTML = error
            document.getElementById('respuesta').style.display = "block"
        })
    },2000)
}

function buscarInmueble(){
    inmuebles.filter(function(inmueble){
        if(idInmueble.value == inmueble.idInmueble){
            document.getElementById('direccion').value = inmueble.direccion;
            document.getElementById('precio').value = `$${convertCop.format(inmueble.precio)} COP`;
            document.getElementById('respuestaBusqueda').style.display = "none"
        }else{
            document.getElementById('respuestaBusqueda').innerHTML = "El inmueble no exite en la base de datos"
        }
    })
}

function promesaInmuebles(datos){
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
function listarInmuebles(){
    let filtroInmuebles = inmuebles.filter(function(filtroInmueble){
        return filtroInmueble.estado == true && filtroInmueble.precio >= 200000000 && filtroInmueble.precio <= 300000000 
    })
    promesaInmuebles(filtroInmuebles)
        .then((data)=>{
            //Recorrer arreglo de objetos
            let html = "";
            html += `<h5>Listado de inmuebles en venta y que están entre 200 a 300 millones de pesos COP</h5>`
            html += `<table><th>Id</th><th>Dirección</th><th>Precio</th>`
            for(let i=0; i<data.length; i++){
                html += `<tr>
                            <td>${data[i].idInmueble}</td>
                            <td>${data[i].direccion}</td>
                            <td>$${convertCop.format(data[i].precio)} COP</td>
                        </tr>`;
            }
            html += `</table>`
            document.getElementById('listado').innerHTML = html;
        })
        .catch((error)=>{
            document.getElementById('listado').innerHTML = error;
        })
}
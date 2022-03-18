//Punto1
let productos = [
    {referencia:"Control Xbox Series S",descripcion:"Control Xbox Series S inalambrico",precio:300000,existencia:20},
    {referencia:"Control Xbox Elite 2",descripcion:"Control Xbox Elite 2 inalambrico",precio:750000,existencia:5},
    {referencia:"Xbox Series S",descripcion:"Consola de juego microsoft",precio:1600000,existencia:10},
    {referencia:"Xbox Series X",descripcion:"Consola de juego microsoft pro",precio:3000000,existencia:2},
    {referencia:"Play station 5 no disc",descripcion:"Consola de juego Sony",precio:2500000,existencia:2},
    {referencia:"Play station 5 disc",descripcion:"Consola de juego Sony pro",precio:3600000,existencia:6},
    {referencia:"Resident Evil 9 - PS5",descripcion:"Juego con trama de suspenso",precio:233000,existencia:6},
    {referencia:"Biohazard - XBOX",descripcion:"Resident Evil, known in Japan as Biohazard",precio:200000,existencia:35},
    {referencia:"The last cube",descripcion:"Puzzle game",precio:90000,existencia:9},
    {referencia:"Assassin's Creed® Valhalla",descripcion:"Los vikingos no descansan",precio:120000,existencia:7}
]

// punto2
function buscarProductoPrompt(callback){
    var productoRef = prompt("Ingrese la referencia del producto(referencia):")
    let espere = document.getElementById('espere')
    let myImage = document.getElementById('img')
    let noProduct = document.getElementById('noProduct1')
    let convertSalario2 =  Intl.NumberFormat('es-CO')
    myImage.style.display = "block"
    espere.style.display = "block"
    noProduct.style.display = "none"
    setTimeout(function(){
        productos.filter(function(producto){
            if(productoRef == producto.referencia){
                document.getElementById('input1').value = producto.referencia;
                document.getElementById('input2').value = producto.descripcion;
                document.getElementById('input3').value = `$${convertSalario2.format(producto.precio)} COP`;
                document.getElementById('input4').value = producto.existencia;
            }else{
                // noProduct.style.display = "block"
            }
            espere.style.display = "none"
            myImage.style.display = "none"
            callback()
        })
    },3000)
}
buscarProductoPrompt(function(){})

function buscarProducto(datos){
    return new Promise((resolve,reject)=>{
        let estado = true;
        if(estado){
            resolve(datos)
        }
        else{
            reject("No hay productos para mostrar.")
        }
    })
}

buscarProducto(productos)
    .then((datos)=>{
        var productoRef = prompt("Ingrese la referencia del producto(referencia):")
        let noProduct = document.getElementById('noProduct2')
        datos.filter(function(dato){
            if(productoRef == dato.referencia){
                let convertSalario2 =  Intl.NumberFormat('es-CO')
                document.getElementById('producto').innerHTML = `Nombre: <span>${dato.referencia}</span> <br> Descripción:<span>${dato.descripcion}</span><br> Precio:<span>$${convertSalario2.format(dato.precio)} COP</span> <br> Existencia:<span> ${dato.existencia}</span>`;
                noProduct.style.display = "none"
            }
        })
    }).catch((error)=>{
        noProduct.style.display = "block"
        document.getElementById('noProduct2').innerHTML = error
    })
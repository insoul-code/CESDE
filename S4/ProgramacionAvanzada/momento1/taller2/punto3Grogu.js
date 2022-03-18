//Arreglo de alimentos grogu
let alimentos = [
    {nombre: "Oruga de mango", tipo: "Insecto" , energia: 200},
    {nombre: "Pescado brazeado", tipo: "Animal" , energia: 500},
    {nombre: "Rambutan", tipo: "Vegetal" , energia: 350},
    {nombre: "Maní", tipo: "Vegetal" , energia: 230},
    {nombre: "Cucaracha dulce", tipo: "Insecto" , energia: 297},
    {nombre: "Redvelvet", tipo: "Vegetal" , energia: 120},
    {nombre: "Bistec", tipo: "Animal" , energia: 500},
    {nombre: "Pasta", tipo: "Vegetal" , energia: 350},
    {nombre: "Piña", tipo: "Vegetal" , energia: 245},
    {nombre: "Manzana", tipo: "Vegetal" , energia: 230},
    {nombre: "Banano", tipo: "Insecto" , energia: 200},
    {nombre: "Tacos de carne", tipo: "Animal" , energia: 500},
    {nombre: "Zapote", tipo: "Vegetal" , energia: 350},
    {nombre: "Almendras", tipo: "Vegetal" , energia: 230},
    {nombre: "Cucaracha", tipo: "Insecto" , energia: 297},
    {nombre: "Pan", tipo: "Vegetal" , energia: 450},
    {nombre: "Hormiga", tipo: "Insecto" , energia: 200},
    {nombre: "Leche de tigre", tipo: "Animal" , energia: 500},
    {nombre: "Marañon", tipo: "Vegetal" , energia: 350},
    {nombre: "Nueces", tipo: "Vegetal" , energia: 230},
    {nombre: "Mandioca", tipo: "Insecto" , energia: 200},
    {nombre: "Queso", tipo: "Animal" , energia: 500},
    {nombre: "Semillas", tipo: "Vegetal" , energia: 350},
    {nombre: "Arandanos", tipo: "Vegetal" , energia: 230},
    {nombre: "Gusano", tipo: "Insecto" , energia: 297},
    {nombre: "Lechuga", tipo: "Vegetal" , energia: 450},
    {nombre: "Banano", tipo: "Vegetal" , energia: 200},
    {nombre: "Uva", tipo: "Vegetal" , energia: 100},
    {nombre: "Carimañola", tipo: "Vegetal" , energia: 350},
    {nombre: "Moluscos", tipo: "Vegetal" , energia: 230},//
    {nombre: "Pollo", tipo: "Insecto" , energia: 200},
    {nombre: "Pescado", tipo: "Animal" , energia: 500},
    {nombre: "Res", tipo: "Vegetal" , energia: 350},
    {nombre: "Falafel", tipo: "Vegetal" , energia: 230},
    {nombre: "Mariposa", tipo: "Insecto" , energia: 297},
    {nombre: "Chia", tipo: "Vegetal" , energia: 450},
    {nombre: "Libelula", tipo: "Insecto" , energia: 200},
    {nombre: "Cerdo", tipo: "Animal" , energia: 500},
    {nombre: "Almond", tipo: "Vegetal" , energia: 350},
    {nombre: "Peanuts", tipo: "Vegetal" , energia: 110},
    {nombre: "Alacran", tipo: "Insecto" , energia: 200},
    {nombre: "Panceroti", tipo: "Animal" , energia: 187},
    {nombre: "Repollo", tipo: "Vegetal" , energia: 40},
    {nombre: "Kibes", tipo: "Vegetal" , energia: 230},
    {nombre: "Metapod", tipo: "Insecto" , energia: 297},
    {nombre: "Anion", tipo: "Vegetal" , energia: 30},
    {nombre: "Cien pies", tipo: "Insecto" , energia: 200},
    {nombre: "Tomahawck", tipo: "Animal" , energia: 500},
    {nombre: "Lettuce", tipo: "Vegetal" , energia: 150},
    {nombre: "Nuez del nogal", tipo: "Vegetal" , energia: 20},
]

//Función principal
function obtenerAlimentosVegetales(filtrarVegetales){
    setTimeout(function(){
        let arrayAlimentos = alimentos.filter(function(alimento){
            return alimento.tipo == "Vegetal" && alimento.energia >200
        })
        filtrarVegetales(arrayAlimentos)
    },1000)
}

obtenerAlimentosVegetales(function(recibirFiltrados){
    energiaSuma=0
    recibirFiltrados.forEach(recibirFiltrado => {
        energiaSuma += recibirFiltrado.energia
    });
    
    console.log(`La suma de energia de los alimentos vegetales con más de 200 de energía es: ${energiaSuma}`)
})
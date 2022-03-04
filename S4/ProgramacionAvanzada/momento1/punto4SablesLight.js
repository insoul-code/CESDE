//Arreglo de sables
let sables = [
    {color: "verde", energia: 72 , portador: "Obi Wan"},
    {color: "azul", energia: 26 , portador: "Shelly"},
    {color: "rojo", energia: 26 , portador: "Frank"},
    {color: "violeta", energia: 72 , portador: "Maxin"},
    {color: "azul", energia: 10 , portador: "Megma"},
    {color: "rojo", energia: 15 , portador: "Leon"},
    {color: "rojo", energia: 50 , portador: "Naomi"},
    {color: "naranja", energia: 17 , portador: "Kimbo"},
    {color: "azul", energia: 26 , portador: "Slice"},
    {color: "violeta", energia: 26 , portador: "Xoobber"},
    {color: "azul", energia: 50 , portador: "Custer"},
    {color: "verde", energia: 50 , portador: "Bull"},
    {color: "violeta", energia: 26 , portador: "Poco"},
    {color: "verde", energia: 38 , portador: "Foreman"},
    {color: "azul", energia: 50 , portador: "Emerson"},
    {color: "peru", energia: 50 , portador: "Calater"},
    {color: "peru", energia: 72 , portador: "Khal Drogo"},
    {color: "azul", energia: 17 , portador: "Kumar Najil"},
    {color: "verde", energia: 17 , portador: "Foster the people"},
    {color: "verde", energia: 50 , portador: "Momo"},
]

//Función anónima
let filtradoSables = sables.filter(function(sable){
    return(sable.energia<20)
})

console.log(filtradoSables)

//Optimizada arrow function
let filtradoSablesArrow = sables.filter(sable=>(sable.energia<20))

console.log(filtradoSablesArrow)
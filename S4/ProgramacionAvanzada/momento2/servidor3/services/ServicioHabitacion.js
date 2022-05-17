//Importamos el módelo de datos
import { modeloHabitación } from "../models/habitacionModelo.js"

export class ServicioHabitacion{

    constructor(){}

    async buscarTodos(){
        return(await modeloHabitación.find())
    }

    async buscarPorId(id){
        return(await modeloHabitación.findById(id))
    }

    async registrar(datosPeticion){
        return(await new modeloHabitación(datosPeticion).save())
    
    }

    async editar(id,datosPeticion){
        return(await modeloHabitación.findByIdAndUpdate(id,datosPeticion))
    }

    async eliminar(id){
        return(await modeloHabitación.findByIdAndDelete(id))
    }
}

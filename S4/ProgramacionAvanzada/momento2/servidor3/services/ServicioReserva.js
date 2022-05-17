//Importamos el módelo de datos
import {modeloReserva} from "../models/reservaModelo.js"

export class ServicioReserva{

    constructor(){}

    async buscarPorId(id){
        return(await modeloReserva.findById(id))
    }

    async registrar(datosPeticion){
        let reservaRegistro=new modeloReserva(datosPeticion)
        return(await reservaRegistro.save())
    }

    async editar(id,datosPeticion){
        return(await modeloReserva.findByIdAndUpdate(id,datosPeticion))
        
    }

    async eliminar(id){
        return(await modeloReserva.findByIdAndDelete(id))
    }

}

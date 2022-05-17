//En los ControladorHabitaciones se importan los servicios
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
export class ControladorHabitacion{
    constructor(){

    }

    async buscarTodos(request,response){
        let servicio=new ServicioHabitacion()//Se instancia la clase servicio
        try{
            response.status(200).json({
                mensaje: "Éxito en la búsqueda de todos",
                data: await servicio.buscarTodos(),
                estado: true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Upps, error en la búsqueda de todos",
                data:[],
                estado:false
            })
        }
    }
    async buscarPorId(request,response){
        let id=request.params.id //Capturo el id que llega por la url
        console.log('El id solicitado es: '+id)
        let servicio=new ServicioHabitacion()//Se instancia la clase servicio
        try{
            response.status(200).json({
                mensaje: "Éxito en la búsqueda por id "+id,
                data: await servicio.buscarPorId(id),
                estado: true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Upps, error en la búsqueda por id",
                data:{},
                estado:false
            })
        }
    }
    async insertar(request,response){
        let datosPeticion=request.body
        console.log(datosPeticion)
        let servicio=new ServicioHabitacion()//Se instancia la clase servicio
        try{
            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Éxito insertando el registro",
                data:datosPeticion,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error insertando el registro",
                estado:false
            })
        }
    }
    async editar(request,response){
        let id = request.params.id
        let datosPeticion = request.body
        let servicio=new ServicioHabitacion()//Se instancia la clase servicio
        try{
            await servicio.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"Éxito editando el registro",
                data: null,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error editando el registro",
                estado:false
            })
        }
    }
    async eliminar(request,response){
        let id = request.params.id
        let servicio=new ServicioHabitacion()//Se instancia la clase servicio
        try{
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje:"El registro ha sido eliminado",
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error el eliminar el registro",
                estado:false
            })
        }
    }
}
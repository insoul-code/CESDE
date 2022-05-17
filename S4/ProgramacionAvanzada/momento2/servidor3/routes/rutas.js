import express from 'express'
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'
//Creamos el objeto para poder usar la clase ControladorHabitacion
let controlador = new ControladorHabitacion()
let controladorReserva = new ControladorReserva()
/*Una variable para almacenar la funcionalidad de express router
que es la que me permite personalizar y seperar mis RUTAS*/

export let rutas = express.Router()

rutas.get('/API/v1/buscarTodos', controlador.buscarTodos)
rutas.get('/API/v1/buscarPorId/:id', controlador.buscarPorId)
rutas.post('/API/v1/insertar', controlador.insertar)
rutas.put('/API/v1/editar/:id', controlador.editar)
rutas.delete('/API/v1/eliminar/:id', controlador.eliminar)

rutas.get('/API/v1/buscarTodosReserva', controladorReserva.buscarTodos)
rutas.get('/API/v1/buscarPorIdReserva/:id', controladorReserva.buscarPorId)
rutas.post('/API/v1/insertarReserva', controladorReserva.insertar)
rutas.put('/API/v1/editarReserva/:id', controladorReserva.editar)
rutas.delete('/API/v1/eliminarReserva/:id', controladorReserva.eliminar)
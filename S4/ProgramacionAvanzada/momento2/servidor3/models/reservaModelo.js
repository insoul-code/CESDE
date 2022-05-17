import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ReservaHabitacion = new Schema({
    fechaIn:{
        type: Date,
        required: true
    },
    fechaOut:{
        type: Date,
        required: true
    },
    costoReserva:{
        type: Number,
        required: true
    },
    idCliente: {
      type: String,
      required: true
    },
    numeroPersonas:{
      type: Number,
      required: true
    },
    idHabitacion:{
      type: String,
      required: true
    }
  })

  //Creo finalmente el módelo de datos
export const modeloReserva=mongoose.model('reservas',ReservaHabitacion)
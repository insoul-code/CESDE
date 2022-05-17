import mongoose from 'mongoose'
const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const Habitacion = new Schema({
  nombre: {
    type: String,
    required: true
  },
  precio:{
      type: Number,
      required: true
  },
  numeroPersonas:{
    type: Number,
    required: true
  },
  foto:{
      type: String,
      required: true
  }
})

//Creo finalmente el módelo de datos
export const modeloHabitación=mongoose.model('habitaciones',Habitacion)
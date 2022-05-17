//Importo a mongoose encargado de crear la conexión
import mongoose from 'mongoose';

export async function conectar(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log('Éxito conectandonos a BD')
    }catch(error){
        console.log('Fallo al conectarnos a BD'+error)
    }
}
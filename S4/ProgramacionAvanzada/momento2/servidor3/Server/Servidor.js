import express from 'express'
import { rutas } from '../routes/rutas.js'
import { conectar } from '../database/conexion.js'
export class Servidor{
    constructor(){
        this.app = express()
        this.conectarConBD()
        this.llamarAuxiliares()
        this.enrutarPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log(`Servidor encendido en el puerto ${process.env.PORT}`)
        })
    }

    enrutarPeticiones(){
        this.app.use('/', rutas)
    }

    //Middleware
    llamarAuxiliares(){
        this.app.use(express.json())
    }

    //Conectar con la base de datos
    conectarConBD(){
        conectar()
    }
}
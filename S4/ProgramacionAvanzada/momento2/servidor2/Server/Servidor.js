import express from 'express'

export class Servidor{
    constructor(){
        this.app = express()
        this.routeRequest()
    }

    activateServer(){
        this.app.listen(process.env.PORT, function(){
            console.log(`Servidor encendido en el puerto ${process.env.PORT}`)
        })
    }

    routeRequest(){
        this.app.get('/API/v1/viernes', function (req, res) {
            res.send(200)
        })
        this.app.get('/API/v1/viernes', function (req, res) {
            res.send(200)
        })
        this.app.post('/API/v1/viernes', function (req, res) {
            res.send(200)
        })
        this.app.put('/API/v1/viernes', function (req, res) {
            res.send(200)
        })
        this.app.delete('/API/v1/viernes', function (req, res) {
            res.send(200)
        })
    }
}
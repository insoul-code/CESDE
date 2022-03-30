const express = require('express')
const app = express()

require('dotenv').config()
console.log(process.env.PORT)

app.get('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo soy GET')
})
app.post('/api/v1/viernes', function (req, res) {
    res.send('Hola mundo soy post')
})
app.put('/api/v1/viernes', function (req, res) {
    res.send('Hola mundo soy put')
})
app.delete('/api/v1/viernes', function (req, res) {
    res.send('Hola mundo soy delete')
})
app.listen(process.env.PORT, function(){
    console.log(`Servidor encendido en el puerto ${process.env.PORT}`)
})
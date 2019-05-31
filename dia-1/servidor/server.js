const express = require('express')
const cors = require ('cors')
const controller = require('./comidasController')
const bodyParse = ('body-parse')
controller.getAll()

const servidor = express()
servidor.use(cors())

servidor.get("/comidas", (request, response)=>{
    response.send(controller.getAll())
    
})
servidor.post('./comidas',bodyParse.json(),(request,response)=>{
    controller.add(request.body)
    response.send(201)

})
servidor.listen(3000)
console.log('servidor rodando')
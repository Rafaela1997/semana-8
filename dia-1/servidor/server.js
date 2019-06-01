const express = require('express')
const cors = require ('cors')
const controller = require('./comidasController')
const bodyParse = require("body-parser")

const servidor = express()
servidor.use(cors())
servidor.use(bodyParse.json())

servidor.get("/comidas", (request, response)=>{
    response.send(controller.getAll())
    
})
servidor.post("/comidas",(request,response)=>{
    controller.add(request.body)
    response.send(201)

})

servidor.delete("/comidas/:id", (request, response)=> {
    controller.remove(request.params.id)
    response.sendStatus(204)
})

servidor.listen(3000)
console.log('servidor rodando')
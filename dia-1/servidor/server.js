const express = require('express')
const cors = require ('cors')
const controller = require('./comidasController')

controller.getAll()


// const servidor = http.createServer(function(request, response){
//     if(request.url ==='/'){
//         response.end('to com sono')
//     }else if (request.url=== '/comidas'){
//       response.writeHead(200,{"Content-Type": "text/html;charset=utf-8"})
        
//         if(request.method=== 'GET'){
//             response.writeHead(200,{
//                 "Content-Type": "application/json",
//                 "access-Control-Allow-Origin":"*"
//             })

//             response.write(JSON.stringify(comidas))
//             response.end()
//         }else if (request.method === 'POST'){
//             response.writeHead(201,{
//                 "Content-Type": "text/html;charset=utf-8"
//             })
//             response.end("ainda estou com sono")
//         }
//     }
// })
const servidor = express()
servidor.use(cors())

servidor.get("/comidas", (request, response)=>{
    response.send(controller.getAll())

})
servidor.listen(3000)
console.log('servidor rodando')
const http = require ('http')

const servidor = http.createServer(function(request, response){
    if(request.url ==='/'){
        response.end('to com sono')
    }else if (request.url=== '/comidas'){
      response.writeHead(200,{"Content-Type": "text/html;charset=utf-8"})
        response.end ("<h1>respostão diferente</h1>")
        if(request.method=== 'GET'){
            response.writeHead(200,{
                "Content-Type": "text/html;charset=utf-8"
            })
            response.end('resposta do GET')
        }

    }
})

servidor.listen(3000)
console.log('servidor rodando')
const http = require ('http')

const comidas = {
    comidas:[
        {
    "nome" : "fricase",
    "descrição":"frango com creme de leite",
    "imagem":"https://img.itdg.com.br/images/recipes/000/010/254/294238/294238_original.jpg"
},

    {"nome" : "brigadeiro",
     "descrição":"doce de chocolate",
    "imagem":"https://www.comercialmartini.com.br/wp-content/uploads/2016/09/brigadeiro.png"
}
]
}

const servidor = http.createServer(function(request, response){
    if(request.url ==='/'){
        response.end('to com sono')
    }else if (request.url=== '/comidas'){
      response.writeHead(200,{"Content-Type": "text/html;charset=utf-8"})
        
        if(request.method=== 'GET'){
            response.writeHead(200,{
                "Content-Type": "application/json",
                "access-Control-Allow-Origin":"*"
            })

            response.write(JSON.stringify(comidas))
            response.end()
        }else if (request.method === 'POST'){
            response.writeHead(201,{
                "Content-Type": "text/html;charset=utf-8"
            })
            response.end("ainda estou com sono")
        }
    }
})

servidor.listen(3000)
console.log('servidor rodando')
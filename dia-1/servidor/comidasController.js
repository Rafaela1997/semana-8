<<<<<<< HEAD
const comidas = {
    comidasFavoritas:[]
}
const getAll = () => {
    return comidas
}

const add = (comida) => {
   comida.id = Math.random().toString(36).substr(-8)
    getAll().comidasFavoritas.push(comida)
}//gera um Id

const remove =  (id) => {
    let comidasRestantes = getAll()
     getAll().comidasFavoritas=comidasRestantes.comidasFavoritas.filter((comida) => {
         return comida.id !== id
     })
}
module.exports = {
getAll,
add,
remove
}
=======
const comidas = {
    comidasFavoritas:[
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
const getAll = () => {
    return comidas
}

const add = (comida) => {
    comidas.comidasFavoritas.push()
}
module.exports = {
getAll,
add
}
>>>>>>> d99bf174e742e6a8e9747e18754126cce4f32b22

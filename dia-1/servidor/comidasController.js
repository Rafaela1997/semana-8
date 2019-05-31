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

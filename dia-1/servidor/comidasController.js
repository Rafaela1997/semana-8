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

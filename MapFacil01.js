const array = [1, 2, 3, 4, 5]

const novoArray = array.map(multiplicacao)

function multiplicacao(elemento){
    return elemento * 2
}

console.log(novoArray)
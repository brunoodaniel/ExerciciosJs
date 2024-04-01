const array = ["Olá", "como", "você", "esta?"]

function comprimentoStrings(array){
    return array.length
}

const comprimento = array.map(comprimentoStrings)
console.log(comprimento)
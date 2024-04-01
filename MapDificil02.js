const array = [9, 37, 437, 81, 60]

function calculaRaizQuadrada(numero){
    let numeroTranformado = Math.sqrt(numero)
    return parseInt(numeroTranformado)
}

const arrayQuadrado = array.map(calculaRaizQuadrada)
console.log(arrayQuadrado)
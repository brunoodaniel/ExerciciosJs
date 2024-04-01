const matriz = [
    [16, 24, 564, 32],
    [3, 15, 445, 43],
    [55, 25, 93, 456, 293]
]

function somaDasLinhas(matriz){
    const somaNumeros = (numero) => {
        let soma = 0

        numero.forEach(numero => {
            soma += numero
        })

        return soma 
    }

    return matriz.map(somaNumeros)
}

const soma = somaDasLinhas(matriz)

console.log(soma)
const matriz = [
    array01 = [12, 63, 144, 73],

    array2 = [93, 25, 145, 63],

    array3 = [24, 15, 43, 26, 29]
]

somaDasLinhas(matriz)

function somaDasLinhas(matriz){
    matriz.forEach(arrayAtual => {
        let soma = 0
        arrayAtual.forEach(numero => {
            soma += numero
        });
        console.log(soma)
    });
}


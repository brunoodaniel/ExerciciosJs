const matriz = [
    array01 = [12, 63, 144, 73],

    array2 = [93, 25, 145, 63],

    array3 = [24, 15, 43, 26, 29]
]

maior(matriz)

function maior(matriz){
    matriz.forEach(arrayAtual => {
        let maior = 0
        arrayAtual.forEach(numero => {
            if(numero > maior){
                maior = numero
            }
        });
        console.log(maior)
    });
}

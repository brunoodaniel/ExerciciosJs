const numeros = [12, 35, 91, 24, 42]

imprimirSoma(numeros)

function imprimirSoma(numeros){
    let soma = 0

    numeros.forEach(numero => {
        soma += numero
    })
    
    console.log(soma)
}

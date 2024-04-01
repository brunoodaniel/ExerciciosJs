const array = ["Olá", "eu", "sou", "o", "Bruno!"]

imprimirMaiusculas(array)

function imprimirMaiusculas(array){
    array.forEach(elemento => {
        console.log(elemento.toLocaleUpperCase())
    })
}
const palavras = ["Sou", "o", "Bruno!"]

const palavrasMaiusculas = palavras.map(maiusculas)

function maiusculas(palavras){
    return palavras.toUpperCase()
}

console.log(palavrasMaiusculas)
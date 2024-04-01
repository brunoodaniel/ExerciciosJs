const pessoas = [
    {nome: 'Marcos', idade: 28},
    {nome: 'Kaylane', idade: 21},
    {nome: 'Bruno', idade: 19}
]

function extrairIdade(pessoas) {
    return pessoas.map(pessoa => pessoa.idade);
}
  
const idades = extrairIdade(pessoas)
console.log(idades)
  
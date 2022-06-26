const Daniel = {
    nome:'Daniel',
    idade:'28',
    cidade:'Nova Iguaçu'
}
console.log(Daniel)

Daniel.telefone = 275696969
console.log(Daniel)

delete Daniel.cidade;
console.log(Daniel)

const cadastro=[{
    nome:"Thamires",
    idade: 25,
    telefone:200000,
    amigos:["joão", "Maria", "josé" , "valentina"],
},
{
    nome:"Paula",
    idade: 28,
    telefone:789456123,
    amigos:["Isa", "Vitor", "Fausto Silva" , "Mc"],
},
{
    nome:"Nandico",
    idade: 21,
    telefone:2145454,
    amigos:["Peterson", "Renan", "Erick" , "Andrey"],
},
{
    nome:"Safadão",
    idade: 30,
    telefone:1234567,
    amigos:["Patrick", "Lucas", "Andreza" , "Marc"],
},
{
    nome:"Maria",
    idade: 55,
    telefone: "não possui número de telefone",
    amigos:["Don L", "Criolo", "Black alien" , "Leandro"],
},]
console.log(cadastro[0].amigos[3])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[0])
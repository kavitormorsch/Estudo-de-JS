const pessoa = {
    nome: 'Kauê',
    sobrenome: 'Vitor Morsch',
    idade: 17,
    endereco: {
        rua: 'Av Maracanã',
        numero: '1111'
    }
}
           
const { carro = 'Fiat Cronos', //dando um valor default para variavel caso não exista
nome: n //dando um nome para a variavel retirada do objeto
, sobrenome, idade, 
endereco: { rua, numero} //retirando variaveis de dentro do objeto endereço dentro do objeto pessoa
} = pessoa;

const {nome, ...resto} = pessoa;
console.log(n, sobrenome, idade, carro, rua, numero, resto);
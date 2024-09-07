/*
Novos Métodos
Object.values (mostra os valores de cada chave do objeto)
Object.entries (combinação de Object.keys e Object.values, mostrando ambos em cada index de um array)    
Object.assign(destino,any) (outra forma de fazer a mesma coisa que o spread)
Object.getOwnPropertyDescriptor(o, 'prop') (mostra as definições da chave, as mesmas do defineproperty)
... (spread operator, addendum: pode se expandir depois de um spread com mais chavess)

Métodos já vistos

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperty (define propriedades do objeto como: é enúmeravel, editável, configurável, seu valor base, etc.)
Object.defineProperties (mesma coisa que defineProperty exceto para várias chaves do objeto)
*/

const produto = {nome: 'Caneca', preco: 1.8, material: 'Porcelana'};
/*const outraCoisa = {
    ...produto,
    material: 'Porcelana'
};

const outraCoisa = Object.assign({}, produto, {material: 'porcelana'});

produto.nome = 'Carro';
outraCoisa.preco = 2.5;

console.log(produto)*/

Object.defineProperty(produto, 'nome', {
    writable: false,
    enumerable: true,
    configurable:false
})
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
//produto.nome = 'Hahaha';
console.log(Object.entries(produto))

for (let [key, value] of Object.entries(produto)){ //destructuring
    console.log(key, value);
}
/*const objA = {
    chaveA: 'A',
};
const objB = {
    chaveB: 'B',
};

const objC = new Object();
objC.chaveC = 'C'; //outra forma de declarar um objeto

Object.setPrototypeOf(objB, objA); // Object.setPrototypeOf(destination, target) muda o prototype de um objeto (dest.), para ser o prototype de outro objeto (target)
Object.setPrototypeOf(objC, objB); 
console.log(objB.chaveA); // com isso, pode-se ver que objB se tornou um filho de objA, deixando a ordem assim: objB.Prototype -> objA -> Object.Prototype
console.log(objC.chaveB); // objC.Prototype -> objB -> objA-> Object.Prototype*/

function produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

};

produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100));
};

produto.prototype.inflacao = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100));
};

const p1 = new produto('Camiseta', 50);
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, p1);

const p3 = Object.create(produto.prototype,{
    preco: {enumerable: true,
        writable: true,
        configurable: true,
        value: 133
    },
    tamanho: {enumerable: true,
        writable: true,
        configurable: true,
        value: 23
    }
});
p3.nome = 'PC';

p1.inflacao(100);
console.log(p1);
p2.inflacao(100);
console.log(p2);
p3.inflacao(100);
console.log(p3);
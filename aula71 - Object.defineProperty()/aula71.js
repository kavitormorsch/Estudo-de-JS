// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor 
        writable: true, //pode editar o valor
        configurable: false // define se pode configurar (a função defineProperty) e deletar essa propriedade
    });

    Object.defineProperties(this, {
        nome: {enumerable: true, // mostra a chave
            value: estoque, // valor 
            writable: true, //pode editar o valor
            configurable: false // define se pode configurar (a função defineProperty) e deletar essa propriedade}
    },
    preco: {enumerable: true, // mostra a chave
        value: estoque, // valor 
        writable: true, //pode editar o valor
        configurable: false // define se pode configurar (a função defineProperty) e deletar essa propriedade}
    }})
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
delete p1.estoque;
console.log(p1);
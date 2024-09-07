function Product(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Product.prototype.aumento = function(quant){
    this.preco += quant;
};

Product.prototype.desconto = function(quant){
    this.preco -= quant;
};

function Camiseta(nome, preco, cor){
    this.cor = cor;
    Product.call(this, nome, preco);
}
Camiseta.prototype = Object.create(Product.prototype); // o que está fazendo aqui, é basicamente passando um objeto com todo o conteúdo do prototype de Produto para ser
Camiseta.prototype.constructor = Camiseta;// o prototype de Camiseta

Camiseta.prototype.aumento = function(percentual){
    this.preco  = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque){
    this.material = material;
    Product.call(this, nome, preco);

    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get:function() {
            return estoque;
        },
        set: function(value){
            if (typeof value !== 'number') return;
            estoque = value;
        }
    })
}

Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

const produto = new Product('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 21, 'Madeira', 15);
camiseta.aumento(100);
caneca.desconto(50);
caneca.estoque = 100;
console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);
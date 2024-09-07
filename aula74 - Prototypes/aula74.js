//função construtora -> molde

function person(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

person.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

//instância
const p1 = new person('Kauê', 'Vitor Morsch');
const p2 = new person('Victória', 'Juliane da Conceição Motta');
const data = new Date();

console.dir(p1.nomeCompleto());
console.dir(p2.nomeCompleto());

/* const person = {
    nome: 'Kav',
    sobrenome: 'Morsch'
}; //chaves são os valores do objeto

const chave = 'nome';
delete person.nome; //apaga chave de um objetos
console.log(person.nome); //por ponto
console.log(person['sobrenome']); //por colchete, boa para variáveis dinâmicas como na linha abaixo
console.log(person[chave]); */

const person1 = new Object();
person1.name = 'Lain';
person1.lastName = 'Iwakura';
person1.age = '14';
person1.sayName = function() {return`Hello, my name is ${this.name}.`;};
person1.getDOB = function() {
    const year = new Date();
    return year.getFullYear() - this.age;
};

console.log(person1['name']);
console.log(person1.lastName);

console.log(person1.sayName());
console.log(person1.getDOB());

for(let chaves in person1){
    console.log(person1[chaves]);
};


function createPerson(name, lastName){
    return {
        name,
        lastName,
        get fullName(){
            return `${this.name} ${this.lastName}`;
        }
    }
}

const p1 = createPerson('Kavitor', 'Morsch');

console.log(p1.fullName);

function Person(name, lastName){
    this.name = name;
    this.lastName = lastName;

    // Object.freeze(this); // com isso, você pode travar quaisquer objetos que sejam feitos usando essa função construtora, impedindo qualquer mudança
}

const p2 = new Person('Kavitor', 'Morsch');
p2.name = 'Kaka'; // é possível mudar o valor de uma chave do objeto e adicionar metódos ao objeto
Object.freeze(p2); //pode-se travar o objeto e impedir qualquer mudança
p2.name = 'Kavitor';
console.log(p2); // resultado permanece como Person { name: 'Kaka', lastName: 'Morsch' }
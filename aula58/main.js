// Funçõo construtora : cria a formúla para fazer um objeto específico (o que você aprendeu na aula do JAMV)
// Função fábrica : cria um objeto na hora
// Construtora -> Pessoa (new)
// NEW = cria um novo objeto vazio, faz o this apontar para tal objeto, e retorna o objeto automaticamente para essa variável
function Person(name, lastName){
    //Atributos e metódos privados (só podem ser usados dentro deste escopo)
    const ID = 12545;
    const internalMethod = () => {

    };
    //atributos e metódos públicos (podem ser usados fora deste escopo)
    this.name = name;
    this.lastName = lastName;

    this.method = () => {console.log(`I am a method belonging to the ${this.name} object.`)}
}

const p1 = new Person('Kauê', 'Morsch');
const p2 = new Person('Jasmin', 'Maric');

console.log(p2.name);
p1.method();
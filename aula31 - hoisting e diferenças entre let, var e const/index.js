const verdadeira = true;

//Let tem escopo de bloco {... bloco}
//Var só tem escopo de função (o escopo da função inteiro, a mudança é efetiva em todo o escopo da função independente se estiver sendo redeclarada dentro do escopo de bloco dentro da função em si)
//Hoisting, eleva a declaração da varíavel para o topo caso uma varíavel seja utilizada antes de ser declarada
/* let nome = 'Luiz';
var nome2 = 'Luiz';



if (verdadeira) {
    let nome = 'Otávio';
    console.log(nome, nome2);

    if (verdadeira) {
        var nome2 = 'Kauê';
        let nome = 'Otávio';
        console.log(nome, nome2);
    }
}
console.log(nome, nome2); */

console.log(sobrenome);

var sobrenome = 'Miranda';
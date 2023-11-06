// arrays são valores por referência, se um array for passado como um valor para uma variável, se o array for modificado, ou a variável criada for modificada, ambos serão afetados
const nome = ['Eduardo', 'Maria', 'Joana']; //array literal
const names = new Array ('Eduardo', 'Maria', 'Joana', 'Victória', 'Kauê','Samuel'); // array por construtor
const arry = [...names]; //... é o spread operator, faz com que espalhe os elementos de um array (que é escrito logo depois do operador) dentro de outro array, assim passando o valor de um array por valor e não referência
const novo = names.slice (3,5); //slice pega certos valores de um array, o primeiro número é o primeiro índice de qual quer o valor, e o último número é o índice+1 do qual você quer
nome[2] = 'João';
delete nome[2];
arry.pop(); // pop apaga o último elemento de um array, se for ppassado como um valor de uma variável, ela vai retirar o valor de um array e passa esse elemento como o valor da variável
console.log(arry);  //.length pega o número total de itens dentro de um array
names.shift(); //o mesmo que o pop porém trabalha com o primeiro elemento da variável
console.log(names);
names.push('Ronin'); //adiciona um elemento ao final do array
console.log(names);
arry.unshift('Kaio'); // adiciona um elemento no começo do array
console.log(arry);
console.log(novo);

const yoname = 'Kauê Vitor Morsch';
const yonames = yoname.split(' '); //pega uma string e a separa em vários valores, com o separador especificado (tal separador é um valor dentro da string que ele vai encontrar e quando encontrar sabe que é para pegar todos as letras antes desse separador e tornar-lás em um elemento de um array)
console.log(yonames);

const yorname = yonames.join(' '); // mesmo que o split, mas o separador é o que vai ficar entre cada elemento do array logo, os separando
console.log(yorname);
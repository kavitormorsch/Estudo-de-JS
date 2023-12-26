//a função map cria um novo array copiando um array original e modifica os valores originais na cópia

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const doubleNumbers = numbers.map(value => value * 2);

console.log(doubleNumbers);



const people = [
    {name : 'Kauê', age: 58},
    {name : 'Victória', age: 19},
    {name : 'Samuel', age: 18},
    {name : 'Kaio', age: 28},
    {name : 'Taihoki', age: 22},
    {name : 'Walter', age: 61},
];

const mappedPeople1 = people.map(value => value.name);
console.log(mappedPeople1);
const mappedPeople2 = people.map(value => ({ age: value.age })); // nessa situação pode se deletar uma propriedade através do delete, ou criar um novo objeto (caminho utilizado) com a idade apenas
console.log(mappedPeople2);
const mappedPeople3 = people.map(function(value) { 
    const newObj = {...value};
    newObj.id = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
return newObj; 
}); //para criar uma nova propriedade em um objeto já declarado, apenas precisa-se  dar um valor a nova propriedade que deseja como se já existisse, mas estivesse vazia
console.log(mappedPeople3);
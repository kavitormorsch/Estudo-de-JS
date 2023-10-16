const alunos = ['Kauê', 'Kaio', 'John'];

console.log(alunos);
alunos[0] = 'Kav';
alunos[3] = 'Addsafe';
alunos.push('Kavitor'); //adiciona um elemento no final de um array
alunos.unshift('addsafe34'); //adiciona um elemento no inicio de um array
alunos.pop(); //deleta o ultimo elemento de um array
// delete alunos[2]; //deleta um elemento de um array sem modificar os indices, deixando um elemento vazio
console.log(alunos.slice(0, 4));
console.log(alunos instanceof Array);
const nome = `Kauê`;
const sobrenome = 'Vitor Morsch';
const idade = 18;
const peso = 72;
const altura = 1.64;
let imc = peso / (altura * altura);
let anonascimento = 2023 - idade;

console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anonascimento}.`);
/* const numeros = [1, 2, 3, 4, 5 , 6, 7, 8, 9];
const [pN, , tN, , cN, , sN, ...spread] = numeros;
console.log(pN, tN, cN, sN);
console.log(spread); */

const numeros = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];

const [lista1, lista2, lista3] = numeros;
console.log(lista2[2])
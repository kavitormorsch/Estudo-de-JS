const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [7, 8, 9, 10, 11, 12];

//const array12 = array1.concat(array2, [13, 14, 15, 16, 17, 18]); // é possível fazer a concatenação de dois arrays com esse método
const array12 = [...array1, 'Kauê',...array2, ...[13, 14, 15, 16, 17, 18]]; // outra forma de concatenar é pelo operador spread (...), que espalha os conteúdos de um array dentro de outro. 
console.log (array12);
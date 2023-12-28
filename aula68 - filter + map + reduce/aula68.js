const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const evenNumbers = numbers
.filter(value => value % 2 === 0 )
.map(value => value *= 2)
.reduce((acumulator, value) => acumulator += value);
console.log(evenNumbers);

//é possível encadear as funções de array
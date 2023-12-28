//reduce é uma função de array que reduz os valores de um array, nele tem um parâmetro que não aparece nas funções filter e map, tal parâmetro é o previous number
//também pode se passar um valor inicial para essa função que é o valor do acumulador no começo da função
// é possível realizar a função do map e filter com o reduce mas deve se usar as funções próprias
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const totalArray=[];
const totalSum = numbers.reduce(function(acumulator, value, index, array) {
    acumulator += value;
    totalArray.push(acumulator);
    return acumulator;
}, 0);
console.log(totalSum);
console.log(totalArray);


const even = numbers.reduce(function(acumulator, value, index, array) {
    if(value % 2 === 0) acumulator.push(value);
    return acumulator;
}, []);
console.log(even);

const double = numbers.reduce(function(acumulator, value, index, array) {
    acumulator.push(value * 2);
    return acumulator;
}, []);

console.log(double);



const people = [
    {name : 'Kauê', age: 58},
    {name : 'Victória', age: 19},
    {name : 'Samuel', age: 18},
    {name : 'Kaio', age: 28},
    {name : 'Taihoki', age: 22},
    {name : 'Walter', age: 61},
];

const oldestPerson = people.reduce(function(acumulator, value) {
    if(value.age > acumulator.age) acumulator = value;
    return acumulator;
});
console.log(oldestPerson);
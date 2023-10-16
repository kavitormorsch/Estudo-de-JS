function func([value1, value2, value3]) {
    console.log(value1, value2, value3);
}
let arr = [`Kauê Vitor`, 'Morsch', 17];
func(arr);

function counts(operator, acumulator, ...numbers){
    for(let number of numbers){
        if (operator === '+') acumulator += number
        if (operator === '-') acumulator -= number
        if (operator === '*') acumulator *= number
        if (operator === '/') acumulator /= number

    }
    return acumulator
}
console.log(counts('-', 10, 20, 30, 40, 50));

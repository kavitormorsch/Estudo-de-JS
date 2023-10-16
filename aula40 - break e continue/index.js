const numbers = [1,2,3,4,5,6,7,8,9];

let i = 0;

while (i < numbers.length) {
    let number = numbers[i]
    if (number === 5 || number == 2) {
        console.log(`Skipping number ${number}`);
        i++; 
        continue;
    }
    console.log(number);
    if (number === 7){
        console.log ('Found 7, breaking loop.')
        i++;
        break;
    }

    i++;
}
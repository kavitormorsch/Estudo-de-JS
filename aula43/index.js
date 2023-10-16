function sizzlerBuzzler(number) {
    let result = number;
    if(number % 3 === 0){
        result = number + " Fizz";
     };
    if(number % 5 === 0){
        result = number + " Buzz";
     };
    if(number % 3 === 0 && number % 5 === 0){
        result = number + " FizzBuzz";
     };
    if(isNaN(number)){
        result = number;
    }

    return result;

}

let index = 0;

while (index !== 100){
    console.log(sizzlerBuzzler(index));
    index++
}
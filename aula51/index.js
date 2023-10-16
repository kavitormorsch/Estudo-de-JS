// return = retorna um valor e termina função

function soma (a, b){
    return a + b;
}

function sayPhrase(start) {
    function sayRest(rest) {
        return start + ' ' + rest;
    }

    return sayRest;
}

const say = sayPhrase('Hello,');
const rest = say('World!');

console.log(rest);


function createMultiplier(multiplier) {
    // multiplier
    return function(n) {
        return n * multiplicatior;
    }
}

const duplicate = createMultiplier(2);
const triplicate = createMultiplier(3);
const quadruplicate = createMultiplier(4);

console.log(duplicate(2));
console.log(triplicate(2));
console.log(quadruplicate(2));
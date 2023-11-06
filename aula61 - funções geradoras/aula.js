function* generator1 () {
    // code
    yield 'Value 1';
    // code
    yield 'Value 2';
    // code
    yield 'Value 3';
}

function* generator2 () {
    let i = 0; 
    while (true) {
        yield i;
        i++;
    }
}

const g2 = generator2();


function* generator3() {
    yield 0;
    yield 1;
    yield 2;
}

function* generator4() {
    yield* generator3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = generator4();
for (let value of g4){
    console.log(value);
}

function* generator5 () {
    yield function() {
        console.log ('Yield 1');
    }

    return function() {
        console.log('Return');
    }

    yield function () {console.log('Yield 2');} //unreachable code
}

const g5 = generator5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
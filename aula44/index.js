const naoExisto = 'Não Fudeu'

try {
console.log(naoExisto);
} catch(e)  {
    console.log('Fudeu')
}


function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Fudeu');
    }

    return x + y;
}

try{

console.log(soma(2, 2));
console.log(soma(2, 'carro'));
} catch (error) {
    //console.log(error)
    console.log('Fudeu3')
}
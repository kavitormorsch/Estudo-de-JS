function cartas(nome) {
    return `Olá, ${nome}.`
}

const variavel = cartas("Kauê");
console.log(variavel);

function soma(x = Math.floor(Math.random() * (20 - 1) + 1), y = Math.floor(Math.random() * (20 - 1) + 1)) {
    const resultado = x + y;
    return resultado;
}

console.log(soma())

const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(9))


// For in = lê os índices ou chaves do objeto
const frutas = ['Tangerina', 'Kiwi', 'Maça', 'Dragonfruit'];
const carros = {
    modelo: 'Fiat',
    cor: 'Ciano',
    cavalos: 560
};

for (let i in carros) {
    console.log(i, carros[i]);
}
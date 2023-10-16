const nomes = ['Kauê', 'Vitor', 'Morsch'];
const pessoa = {
    nome: 'Kauê',
    sobrenome: 'Vitor Morsch'
};


for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
for (let i in nomes) {
    console.log(nomes[i]);
}
for (let i of nomes) {
    console.log(i);
}

nomes.forEach(function(v, i) {
    console.log(v, i)
})
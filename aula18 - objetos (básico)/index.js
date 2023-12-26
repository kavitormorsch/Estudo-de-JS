function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        fala() {
            console.log(`Hello, World! I am ${this.nome} ${this.sobrenome} and I am ${this.idade} years old.`)
        },

        incrementaIdade() {
            this.idade++
        },
    };
}

const pessoa1 = criaPessoa("Kauê", "Vitor Morsch", 18);
const pessoa2 = criaPessoa("Josiah", "Birch", 18);
const pessoa3 = criaPessoa("Jasmin", "Maric", 18);
pessoa1.fala();
pessoa2.fala();
pessoa3.fala();
pessoa1.incrementaIdade();
pessoa2.incrementaIdade();
pessoa3.incrementaIdade();
pessoa1.fala();
pessoa2.fala();
pessoa3.fala();
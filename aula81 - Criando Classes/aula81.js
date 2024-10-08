class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    falar(){
        console.log(`${this.name} está falando.`);
    }

    comer(){
        console.log(`${this.name} está comendo.`);
    }

    beber(){
        console.log(`${this.name} está bebendo.`);
    }
}

const p1 = new Person('Kauê', 'Vitor Morsch');

console.log(p1.falar());
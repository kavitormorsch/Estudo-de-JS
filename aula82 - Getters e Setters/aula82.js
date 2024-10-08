const _speed = Symbol('speed');

class Car {
    constructor(name){
        this.name = name;
        this[_speed] = 0;

    }

    get speed(){
        return this[_speed];
    }

    set speed(value){
        if (typeof value !== 'number') return;
        if (value >= 100 || value <= 0) return;
        this[_speed] = value;
    }

    accelerate(){
        if(this[_speed] >= 100) return;
        this[_speed]++;
    }

    brake(){
        if(this[_speed] <= 0) return;
        this[_speed]--;
    }

}

const car1 = new Car('Porsche');

for( i=0; i<= 200; i++){
    car1.accelerate();
}


car1.speed = 20000;
console.log(car1.speed);



class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    get nomeCompleto(){
        return this.name + ' ' + this.surname;
    }

    set nomeCompleto(value){
        value = value.split(' ');
        this.name = value.shift();
        this.surname = value.join(' ');
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

console.log(p1.nomeCompleto);
p1.nomeCompleto = "Kaio Vitor Morsch"
console.log(p1);
console.log(p1.nomeCompleto);

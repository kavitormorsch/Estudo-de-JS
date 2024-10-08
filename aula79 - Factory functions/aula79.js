
    
const eat = { eat() {
        console.log(`${this.name} is eating.`)
    }}

const drink = { drink (){
        console.log(`${this.name} is drinking.`)
    }};

const speak = { speak() {
        console.log(`${this.name} is speaking.`)
    }}

const personPrototype = Object.assign({}, speak, eat, drink);

function createPerson(name, surname){
   
    return Object.create(personPrototype, {
        name:{ value: name,
            enumerable: true,
        },
        surname:{ value: surname,
            enumerable: true,
        },
    });
}

const p1 = createPerson('Kauê', 'Vitor Morsch');
const p2 = createPerson('Kaio', 'Vitor Morsch');
console.log(p1.speak());
console.log(p2.drink());
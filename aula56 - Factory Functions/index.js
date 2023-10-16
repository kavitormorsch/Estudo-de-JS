// Factory Function
// Constructor Function
function createPerson(name, lastName, height, weight){
    return {
        name, 
        lastName,
        get fullName() {
            return `${this.name} ${this.lastName}`;
        },

        set fullName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.lastName = value.join('  ');
            console.log(value);
        },
        fala(matter) {
            return `${this.name} is ${matter}`;
        },
        height: height,
        weight: weight,
        // Getter (get value)
        get IMC() {
            const Ind = this.weight / (this.height ** 2);
            return Ind.toFixed(2);
        }
    };
}

const p1 = createPerson('Kauê', 'Vitor Morsch', 1.64, 70);
console.log(p1.name);
console.log(p1.lastName);
console.log(p1.fala('talking about Lain.'));
console.log(p1.IMC);
console.log(p1.fullName);
p1.fullName = 'Kav Itor Morsch'
console.log(p1.fullName);
console.log(p1.fala('talking about Lain.'));
const p2 = createPerson('Lain', 'Iwakura', 1.55, 45);
const p3 = createPerson('Jasmin ', 'Maric', 1.74, 90);
console.log(p2.IMC);
console.log(p3.IMC);
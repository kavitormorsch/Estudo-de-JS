// IIFE -> Immediately Invoked Function Expression

(function (age, weight, height) {
    const lastName = 'Vitor Morsch';
    function createName(name){
        return name + ' ' + lastName;
    }

    function sayName(){
        console.log(createName('Kauê'))
    }

    sayName();
    console.log(age, weight, height);
})(17, 74, 1.64);


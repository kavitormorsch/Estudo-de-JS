//Declaração de função (Function hoisting)
sayHi();
function sayHi(){
    console.log('Hello.');
}

// funções = First-class objects
// function expression
const sayBye = function () {console.log('Bye.');};
sayBye();

function executeFunction(func) {
    func();
}
executeFunction(sayBye)

// Arrow function
const arrowFunc = () => {
    console.log("Who up Shliming their Flaps?");
};
arrowFunc();

//Dentro de um objeto
const obj = {
    falar() {
        console.log(`I'm talkin'`)
    }
};
obj.falar();
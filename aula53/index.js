function returnFunction(name) {

    return function () {
        return name;
    }
}


const func = returnFunction('Kauê');
const func2 = returnFunction('Vitor Morsch');
console.log(func());
console.log(func2());
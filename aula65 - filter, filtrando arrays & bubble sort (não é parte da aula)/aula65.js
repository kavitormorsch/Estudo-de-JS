//Filter - sempre retornar um array, com a mesma quantage de elementos ou menos
const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];


/* function callbackFilter(value) {
   return value > 10 ? true : false; //value > 10 é a condição, ? true é o resultado se for verdadeiro, : false é o resultado falso
} */ // função callbackFilter não anônima (função sem nome)
const filternumbers = numbers.filter(value => value > 10); //função arrow function (é possível faze-lá sem os parênteses nos parâmetros caso tenha um apenas)
/* let i2=0;
for(let i in numbers){
    if(numbers[i] > 10){
        filternumbers[i2] = numbers[i]; 
        i2++;
    }
    else{} 
} */ //filtrando pelo for
//Bubble Sort
for(let z=0; z < filternumbers.length - 1; z++){
    for(let y=0; y < filternumbers.length -1; y++){
        let tempvar;
        if(filternumbers[y] > filternumbers[y+1]){
            tempvar = filternumbers[y+1];
            filternumbers[y+1] = filternumbers[y];
            filternumbers[y] = tempvar;
        }
        else{}
    
    }
}
//console.log(filternumbers);

const people = [
    {name : 'Kauê', age: 58},
    {name : 'Victória', age: 19},
    {name : 'Samuel', age: 18},
    {name : 'Kaio', age: 28},
    {name : 'Taihoki', age: 22},
    {name : 'Walter', age: 61},
];

const filterpeople1 = people.filter(value => value.name.length >= 5);
console.log(filterpeople1);
const filterpeople2 = people.filter(value => value.age > 50);
console.log(filterpeople2);
const filterpeople3 = people.filter(value => value.name.toLowerCase().endsWith('a'));
console.log(filterpeople3);
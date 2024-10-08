const people = [
    {id:3, name: 'Kauê'},
    {id:2, name: 'Kaio'},
    {id:1, name: 'Kapo'},
];

/*const newPeople = {}
for( const person of people){{
    const{ id } = person;
    newPeople[id] = {...person}
}};*/

const newPeople = new Map();
for( const person of people){{
    const{ id } = person;
    newPeople.set(id,{...person});
}};

console.log(newPeople.get(2));
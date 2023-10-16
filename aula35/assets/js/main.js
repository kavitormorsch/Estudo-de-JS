const container = document.querySelector('.container');
const divElement = document.createElement('div');
divElement.classList.add('division');
container.appendChild(divElement);
const div = document.querySelector('.division');

function globalScope (){


const elements = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

/* const [tag0, tag1, tag2, tag3] = elements;
const elementsFC = [tag0, tag1, tag2, tag3]; */
    for (let i = 0; i <= 3; i++) {
        let {tag, texto} = elements[i];
        const element = document.createElement(tag)
        element.appendChild(textocriado);
        div.appendChild(element)
    } 

}
globalScope();
const paragraphs = document.querySelector('.paragrafos');
const ps = paragraphs.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;
console.log(backgroundColorBody)


for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = `white`;
}
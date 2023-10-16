let varA = `A`; // b
let varB = `B`; // c
let varC = `C`; // a

const varG = varA 
varA = varB;
varB = varC;
varC = varG;

console.log(varA, varB, varC);
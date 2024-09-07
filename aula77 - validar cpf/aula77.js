//705.484.450-52  070.987.720-03

/* 

*/

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g,''); // essa regex exclui tudo que não seja um número
let arrayCpf = Array.from(cpfLimpo);




function validarDigitos(arr){
    let pegarCalculo;
    let reverseIndex = arrayCpf.length;
    let secondAcc = 0;

    let arrayMod = arr.reduce(function(accumulator, value){  
        //ADDENDUM: ACCUMULADOR TEM QUE SER RETORNADO, SE NÃO ELE PERDE O VALOR NA PRÓXIMA ITERAÇÃO
       if(reverseIndex > 1){
           pegarCalculo = Number(value) * reverseIndex
       reverseIndex--;
       
       secondAcc += pegarCalculo;
       }
       if (reverseIndex > 2){
       pegarCalculo = Number(value) * reverseIndex;
       accumulator += pegarCalculo;
       }
   return accumulator;
   }, 0)

    let resto1 = 11 - (arrayMod % 11);
    let resto2 = 11 - (secondAcc % 11);
   if(Number(arr[9]) === resto1 && Number(arr[10]) === resto2){
    return("CPF é válido!")
   }
   else {
    return("Não é válido.")}
}
console.log(validarDigitos(arrayCpf))

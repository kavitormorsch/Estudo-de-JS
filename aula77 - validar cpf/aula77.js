//705.484.450-52  070.987.720-03

/* 
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

    let digitOne = 11 - (arrayMod % 11);
    let digitTwo = 11 - (secondAcc % 11);
    if(digitOne > 9) digitOne = 0
    if(digitTwo > 9) digitTwo = 0
   if(Number(arr[9]) === digitOne && Number(arr[10]) === digitTwo){
    return("CPF é válido!")
   }
   else {
    return("Não é válido.")}
}
console.log(validarDigitos(arrayCpf))
*/

function validateCPF(sentCPF){
    
    Object.defineProperty(this, 'cleanCPF',{
        enumerable: true,
        get: () =>{ 
            return sentCPF.replace(/\D+/g,'');
        },
        set: () => {
            this.cleanCPF = sentCPF.replace(/\D+/g,'');
        }
    });
}

validateCPF.prototype.validate = function() {
    if(typeof this.cleanCPF === 'undefined') return false;
    if(this.cleanCPF.length !== 11) return false;
    if( this.isSequence()) return false;

    let parcialCPF = this.cleanCPF.slice(0, -2);
    const digitOne = this.digitVerification(parcialCPF);
    const digitTwo = this.digitVerification(parcialCPF + digitOne);
    console.log(digitOne, digitTwo)

    const newCPF = parcialCPF + digitOne + digitTwo;
    
    return newCPF === this.cleanCPF
};

validateCPF.prototype.digitVerification = function(parcialCPF) {
    const cpfArray = Array.from(parcialCPF);
    let reverseIndex = cpfArray.length + 1;
    const digit = cpfArray.reduce((ac, val) => {        
       ac += (Number(val) * reverseIndex);
       reverseIndex--;
       return ac
   }, 0)
   console.log(digit);
   let result = 11 - (digit % 11);
    return result > 9 ? 0 : String(result);
}

validateCPF.prototype.isSequence = function(){
    const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
    return sequence === this.cleanCPF;
}

const cpf = new validateCPF('204.821.527-02');

console.log(cpf.validate());


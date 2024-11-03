class ValidaCPF {
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value:cpf.replace(/\D+/g, '')
        })
    }

    isSequence(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    newCPF(){
        const cpfNoDigits = this.cpfLimpo.slice(0, -2);

        const digit1 = ValidaCPF.generateDigit(cpfNoDigits);
        const digit2 = ValidaCPF.generateDigit(cpfNoDigits + digit1);

        this.newCPF = cpfNoDigits + digit1 + digit2;
    }

    static generateDigit(takenCPF){
        let acc = 0;
        let reverseIndex = takenCPF.length;
        for(let numericString of takenCPF) {
            acc += (numericString * reverseIndex);
            reverseIndex--;
        }

        let result = 11 - (acc % 11);

        return result > 9 ? '0' : String(result);

    }

    validate(){
        console.log(typeof this.cpfLimpo)
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequence()) return false;
        this.newCPF();
        
        return this.newCPF === this.cpfLimpo;
    }
}

const validacpf = new ValidaCPF('204.821.527.02');


if(validacpf.validate){
    console.log("CPF válido.");
} else {
    console.log("CPF inválido.");
}
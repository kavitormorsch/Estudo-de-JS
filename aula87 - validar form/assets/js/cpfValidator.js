class ValidateCPF {
    constructor(cpf){
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value:cpf.replace(/\D+/g, '')
        })
    }

    isSequence(){
        return this.cleanCPF.charAt(0).repeat(this.cleanCPF.length) === this.cleanCPF;
    }

    newCPF(){
        const cpfNoDigits = this.cleanCPF.slice(0, -2);

        const digit1 = ValidateCPF.generateDigit(cpfNoDigits);
        const digit2 = ValidateCPF.generateDigit(cpfNoDigits + digit1);

        this.newCPF = cpfNoDigits + digit1 + digit2;
    }

    static generateDigit(takenCPF){
        let acc = 0;
        let reverseIndex = takenCPF.length + 1;
        for(let numericString of takenCPF) {
            acc += (numericString * reverseIndex);
            reverseIndex--;
        }

        let result = 11 - (acc % 11);

        return result > 9 ? '0' : String(result);

    }

    validate(){
        console.log(typeof this.cleanCPF)
        if(!this.cleanCPF) return false;
        if(this.cleanCPF.length !== 11) return false;
        if(this.isSequence()) return false;
        this.newCPF();
        
        return this.newCPF === this.cleanCPF;
    }
}

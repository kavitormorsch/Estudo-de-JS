function Account(agency, acc, saldo){
    this.agency = agency;
    this.acc = acc;
    this.saldo = saldo;



}

Account.prototype.withdraw = function(value) {
    if(this.saldo < value) {
        console.log(`Saque ultrapassa saldo da conta. Operação não realizada. Saldo: R$${this.saldo}`)

        return;
    }

    this.saldo -= value;
}
Account.prototype.deposit = function(value) {
    this.saldo += value;
}
Account.prototype.verSaldo = function() {
    console.log(`Agen/Cont: ${this.agency}/${this.acc} Saldo: R$${this.saldo.toFixed(2)}`);
}



function accountCurrent(agency, acc, saldo, limit){
    Account.call(this, agency, acc, saldo);
    this.limit = limit;
}
accountCurrent.prototype = Object.create(Account.prototype);
accountCurrent.prototype.constructor = accountCurrent;

accountCurrent.prototype.withdraw = function(value) {
    if((this.saldo + this.limit) < value) {
        console.log(`Saque ultrapassa limite da conta. Operação não realizada. Saldo: R$${this.saldo}`)

        return;
    }

    this.saldo -= value;
    this.verSaldo();
}



function accountP(agency, acc, saldo){
    Account.call(this, agency, acc, saldo);
}
accountP.prototype = Object.create(Account.prototype);
accountP.prototype.constructor = accountP;


const account1 = new Account(21, 49, 10);
account1.deposit(1250);
account1.deposit(10);
account1.withdraw(1271)

const accountCurr1 = new accountCurrent(11, 22, 0, 100);
accountCurr1.deposit(10);
accountCurr1.withdraw(110);

const accountP1 = new accountP(12, 33, 0);
accountP1.deposit(10);
accountP1.withdraw(10);
accountP1.withdraw(1);
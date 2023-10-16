function createCalculator(){
    
    return {
        display: document.querySelector('.display'),

        start(){
            console.log(this.display);
            this.clickbuttons();
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        doOperation(){
            let operation = this.display.value;
            try {
                operation = eval(operation);
                if(!operation) {
                    alert('Invalid operation');
                    return;
                }
                this.display.value = String(operation);
            } catch(e){
                alert('Invalid operation');
                return;
            }
        },
        clickbuttons(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eq')){
                    this.doOperation();
                }
            });
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.doOperation();
                }
            });
        },

        btnParaDisplay(buttonNumber){
            this.display.value += buttonNumber;
        },
    };

}

const calculator = new Calculator();
calculator.start();




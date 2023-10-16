function Calculator(){
    this.display = document.querySelector('.display');
    
    this.start = function(){
        console.log(this.display);
        this.clickbuttons();
    }

    this.clearDisplay = function(){
        this.display.value = '';
    }

    this.deleteOne = function(){
        this.display.value = this.display.value.slice(0, -1);
    }

    this.doOperation = function(){
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
    };
    this.clickbuttons = function(){
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
    };

    this.btnParaDisplay = function(buttonNumber){
        this.display.value += buttonNumber;
    };
};

const calculator = new Calculator();
calculator.start();




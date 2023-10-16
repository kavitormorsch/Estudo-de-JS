const temporizador = document.querySelector('.temporizador');
const iniciar = document.querySelector(`.iniciar`);
const pausar = document.querySelector(`.pausar`);
const zerar = document.querySelector(`.zerar`);
let date = new Date(2001, 0, 1, 0, 0, 0, 0);
let seconds = 0;

function globalScope(){  
    let timer;
    function updateTimer(seconds){
    date.setSeconds(seconds);
    return date.toLocaleTimeString('pt-BR', {});
    }
    iniciar.addEventListener('click', startTimer)

    pausar.addEventListener('click', pauseTimer)
    
    zerar.addEventListener('click', clearTimer)
    function startTimer(e){
        if (temporizador.classList.contains('pausado')){
            temporizador.classList.remove('pausado');
        }
        if (!timer) {
        timer = setInterval(function(){
            seconds++;
            temporizador.innerHTML = updateTimer(seconds);
        }, 1000)
    }
    }

    function pauseTimer(e){
        temporizador.classList.add('pausado')
        clearInterval(timer);
        timer = null;
    }

    function clearTimer(e){
        if (temporizador.classList.contains('pausado')){
            temporizador.classList.remove('pausado');
        }
        date = new Date(2001, 0, 1, 0, 0, 0, 0);
        seconds = 0;
        temporizador.innerHTML = date.toLocaleTimeString('pt-BR', {})
    }

}
globalScope();
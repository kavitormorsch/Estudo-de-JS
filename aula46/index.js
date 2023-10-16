function showHour() {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {});
}

const timer = setInterval(function(){
    console.log(showHour())
}, 1000);


setTimeout(function(){
    clearInterval(timer);
}, 5000)
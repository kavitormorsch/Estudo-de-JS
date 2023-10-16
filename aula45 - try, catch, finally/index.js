try {
    //executa quando não há erros
    console.log('Opened a file');
    console.log('Manipulated the file and it generated an error');
    console.log('Closed the file'); //won't work in the case of an error on the line above, and then skip to catch
} catch(e) {
    //executa quando há erros
    console.log('Dealing with the error');
} finally {
    //sempre executa
    console.log('Closed the file');
}

function returnsHour(date) {
    if (date && !(date instanceof Date)){
        throw new TypeError('Only receives Date instances');
    }

    if (!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('pt-BR', {});
}

try{
const date = new Date('01-01-1970 12:58:12');

const hour = returnsHour(11);

console.log(hour);
} catch(e){
    console.log('Did not receive a Date instance.')
} finally {
    console.log('Have a good day.')
}
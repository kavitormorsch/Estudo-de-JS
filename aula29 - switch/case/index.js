function getWeekDayString (diaSemana) {
    let diaSemanaString;
    switch (diaSemana) {
        
        case 0:
            diaSemanaString = 'Domingo';
            return diaSemanaString;
        case 1:
            diaSemanaString = "Segunda";
            return diaSemanaString;
        case 2:
            diaSemanaString = "Terça";
            return diaSemanaString;
        case 3:
            diaSemanaString = "Quarta";
            return diaSemanaString;
        case 4:
            diaSemanaString = "Quinta";
            return diaSemanaString;
        case 5:
            diaSemanaString = "Sexta";
            return diaSemanaString;
    
        case 6:
            diaSemanaString = "Sábado";
            return diaSemanaString;
    
        default:
            diaSemanaString = 'Incorrect date / Data Inválida';
            return diaSemanaString;
    }
    
}

const data = new Date('1987-04-20 00:00:00');
const diaSemana = data.getDay();





/* if (diaSemana == 0) {
    diaSemanaString = "Domingo";
} else if (diaSemana == 1) {
    diaSemanaString = "Segunda";
} else if (diaSemana == 2) {
    diaSemanaString = "Terça";
} else if (diaSemana == 3) {
    diaSemanaString = "Quarta";
} else if (diaSemana == 4) {
    diaSemanaString = "Quinta";
} else if (diaSemana == 5) {
    diaSemanaString = "Sexta";
} else if (diaSemana == 6) {
    diaSemanaString = "Sábado";
} */



console.log(getWeekDayString(diaSemana));
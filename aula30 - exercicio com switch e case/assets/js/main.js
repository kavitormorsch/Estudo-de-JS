function globalScope() {
  const container = document.querySelector(".container");

  const date = new Date();
  const weekDay = date.getDay();
  const formattedDate = formatDate(date);
  let weekDayString = getWeekDayString(weekDay);

  container.innerHTML = `<h>${weekDayString}, ${formattedDate}.</h>`;

}

function getWeekDayString(weekDay) {
  const weekDayString = ['Domingo', "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  return weekDayString[weekDay];
}

function formatDate(date) {
    const day = zeroToLeft(date.getDate());
    const month = getMonthName(date.getMonth());
    const year = zeroToLeft(date.getFullYear());
    const hour = zeroToLeft(date.getHours());
    const min = zeroToLeft(date.getMinutes());
    
    
      

    return `${day} de ${month} de ${year} ${hour}:${min}`
}
function zeroToLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function getMonthName(monthNumber){
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  return months[monthNumber];
}
globalScope();


/* const h1 = document.querySelector('.container h1');
const date = new Date();

h1.innerHTML = date.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'}); //localestring permite a modificação livre do formato em que a data vai ter
//h1.innerHTML = date.toLocaleTimeString('pt-BR', opcoes); //localetimestring automaticamente adiciona o horário no formato
//h1.innerHTML = new Intl.DateTimeFormat('pt-BR', opcoes).format(date);  */
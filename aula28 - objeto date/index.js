/* const threeHours = 60 * 60 * 3 * 1000;
const oneDay = 60 * 60 * 24 * 1000;
const data = new Date(0 + threeHours + oneDay); */
//const data = new Date(2019, 3, 20, 15, 14, 27, 1000);
/* const data = new Date('2019-04-20 20:20:59.100');
console.log('Dia', data.getDate()); 
console.log('Mês', data.getMonth()); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 = Domingo ; 6 = Sabádo
console.log(data.toString())
console.log(Date.now()); */

function zeroToLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatDate(data) {
  const dia = zeroToLeft(data.getDate());
  let mes = zeroToLeft(data.getMonth() + 1);
  const ano = zeroToLeft(data.getFullYear());
  const hora = zeroToLeft(data.getHours());
  const min = zeroToLeft(data.getMinutes());
  const sec = zeroToLeft(data.getSeconds());

  switch (mes) {
    case 0:
      mes = "Janeiro";
      break;
    case 1:
      mes = "Fevereiro";
      break;
    case 2:
      mes = "Março";
      break;
    case 3:
      mes = "Abril";
      break;
    case 4:
      mes = "Maio";
      break;
    case 5:
      mes = "Junho";
      break;
    case 6:
      mes = "Julho";
      break;
    case 7:
      mes = "Agosto";
      break;
    case 8:
      mes = "Setembro";
      break;
    case 9:
      mes = "Outubro";
      break;
    case 10:
      mes = "Novembro";
      break;
    case 11:
      mes = "Dezembro";
      break;
  }

  return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = formatDate(data);

console.log(dataBrasil);

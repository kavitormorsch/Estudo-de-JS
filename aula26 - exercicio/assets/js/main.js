function meuEscopo() {
  const form = document.querySelector("form");
  //const resultado = document.querySelector(".resultado")
  function recebeEventoForm(evento) {
    evento.preventDefault();
    let pesoInvalido, alturaInvalida = false;
    const altura = +form.querySelector("#altura").value;
    if(!isValid(altura)){
      alturaInvalida = true
    }
    const peso = +form.querySelector("#peso").value;
    if(!isValid(peso)){
      pesoInvalido = true
    }
    let IMC = 0;
    let pesoTipo = "";
    
    if(!alturaInvalida && !pesoInvalido){
      IMC = peso / (altura * altura);
      console.log(IMC);
      IMC = IMC.toFixed(2);
      console.log(IMC);
    } 

    console.log(altura, peso);
    if (pesoInvalido) {
      pesoTipo = "Peso inválido";
    } else if (alturaInvalida) {
      pesoTipo = "Altura inválida";
    } else if (IMC < 18.5) {
      pesoTipo = "Abaixo do peso";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        pesoTipo = "Peso normal";
    } else if (IMC >= 25 && IMC <= 29.9) {
        pesoTipo = "Sobrepeso";
    } else if (IMC >= 30 && IMC <= 34.9) {
        pesoTipo = "Obesidade grau 1";
    } else if (IMC >= 35 && IMC <= 39.9) {
        pesoTipo = "Obesidade grau 2";
    } else if (IMC >= 40) {
      pesoTipo = "Obesidade grau 3";
    }
    console.log(pesoTipo, document.querySelector(".resultado"));

    if (document.querySelector(".resultado") === null) {
      const resultado = document.createElement("div");
      resultado.className = "resultado";
      resultado.style.visibility = "visible";
      if (pesoInvalido || alturaInvalida) {
        resultado.classList.add("resultado-invalido");
        resultado.innerHTML = `<p>${pesoTipo}</p>`;
      } else {
        resultado.classList.remove("resultado-invalido");
        console.log('aqui no else')
        resultado.innerHTML = `<p>Seu IMC é ${IMC} (${pesoTipo})</p>`;
      }
      document.querySelector(".container").appendChild(resultado);
    } else if (document.querySelector(".resultado") !== null) {
      const resultado = document.querySelector(".resultado");
      resultado.style.visibility = "visible";
      if (pesoInvalido || alturaInvalida) {
        resultado.classList.add("resultado-invalido");
        resultado.innerHTML = `<p>${pesoTipo}</p>`;
      } else {
        resultado.classList.remove("resultado-invalido");
        console.log('aqui no else2')
        resultado.innerHTML = `<p>Seu IMC é ${IMC} (${pesoTipo})</p>`;
      }
    }
  }
  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();


const isValid = (value) => {
  console.log(typeof value)
  if(!isNaN(value) && typeof value === 'number'){
    console.log('aqui')
    return true;
  }
  return false;
};


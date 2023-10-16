function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  
  const pessoas = [];
  let contador = 0
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        const pessoa = criarObjeto(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(pessoa)

        console.log(pessoa, pessoas)
        resultado.innerHTML += `<p><strong>${pessoas[contador].nome} ${pessoas[contador].sobrenome} ${pessoas[contador].peso} ${pessoas[contador].altura}</strong></p>`
        contador++;
        }
    form.addEventListener("submit", recebeEventoForm);
  }

  function criarObjeto(nome, sobrenome, peso, altura){
    return {
    nome,
    sobrenome,
    peso,
    altura,
    };
  }

meuEscopo();

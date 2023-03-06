const form = document.querySelector("#formularioCalorias");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const idade = parseInt(document.querySelector("#idade").value);
  const peso = parseFloat(document.querySelector("#peso").value);
  const altura = parseInt(document.querySelector("#altura").value);
  const genero = document.querySelector("#gender").value;
  const atividade = parseFloat(document.querySelector("#atividade").value);
  const objetivo = document.querySelector("#objetivo").value;

  let tmb;
  if (genero === "m") {
    tmb = 88.36 + 13.4 * peso + 4.8 * altura - 5.7 * idade;
  } else {
    tmb = 447.6 + 9.2 * peso + 3.1 * altura - 4.3 * idade;
  }

  const tdee = tmb * atividade;

  let fatorAjuste;
  if (objetivo === "perder") {
    fatorAjuste = 0.75;
  } else if (objetivo === "ganhar") {
    fatorAjuste = 1.15;
  } else {
    fatorAjuste = 1;
  }

  const calorias = tdee * fatorAjuste;
  const proteinas = peso * 2;
  const carboidratos = (calorias - (proteinas * 4) * 9) / 4;
  const gorduras = (calorias - (proteinas * 4) - (carboidratos * 4)) / 9;

  document.querySelector("#calculadoraVisor").innerHTML = `Você pode consumir até: 
  ${calorias.toFixed(2)} calorias.
  `;

  // Limpa o visor da calculadora após 5 segundos
  setTimeout(() => {
    document.querySelector("#calculadoraVisor").innerHTML = "";
  }, 5000);
});

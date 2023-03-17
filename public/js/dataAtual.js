// Função para formatar a data
function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return dia + '/' + mes + '/' + ano;
  }

  // Obter a div para exibir a data
  const divDataAtual = document.getElementById('dataAtual');

  // Obter a data atual e formatá-la
  const dataAtual = new Date();
  const dataFormatada = formatarData(dataAtual);

  // Exibir a data formatada na div
  divDataAtual.innerHTML = dataFormatada;
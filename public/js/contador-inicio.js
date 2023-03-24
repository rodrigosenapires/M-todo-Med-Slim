document.addEventListener('DOMContentLoaded', function () {
  function formatarData(data) {
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      const ano = data.getFullYear();

      return dia + '/' + mes + '/' + ano;
  }

  function formatarTempo(tempo) {
      const dias = Math.floor(tempo / 86400);
      const horas = Math.floor((tempo % 86400) / 3600);
      const minutos = Math.floor((tempo % 3600) / 60);
      const segundos = tempo % 60;

      return {dias, horas, minutos, segundos};
  }

  function atualizarCronometro() {
      const tempoRestante = fimCronometro - Date.now();

      if (tempoRestante <= 0) {
          clearInterval(intervalo);
          document.getElementById('dias').querySelector('.contador-numero').innerHTML = '00';
          document.getElementById('horas').querySelector('.contador-numero').innerHTML = '00';
          document.getElementById('minutos').querySelector('.contador-numero').innerHTML = '00';
          document.getElementById('segundos').querySelector('.contador-numero').innerHTML = '00';
      } else {
          const segundosRestantes = Math.floor(tempoRestante / 1000);
          const tempoFormatado = formatarTempo(segundosRestantes);
          document.getElementById('dias').querySelector('.contador-numero').innerHTML = tempoFormatado.dias.toString().padStart(2, '0');
          document.getElementById('horas').querySelector('.contador-numero').innerHTML = tempoFormatado.horas.toString().padStart(2, '0');
          document.getElementById('minutos').querySelector('.contador-numero').innerHTML = tempoFormatado.minutos.toString().padStart(2, '0');
          document.getElementById('segundos').querySelector('.contador-numero').innerHTML = tempoFormatado.segundos.toString().padStart(2, '0');
      }
  }

  const tempoMinimo = 15 * 60 + 37;
  const tempoMaximo = 25 * 60 + 2;

  const tempoAleatorio = Math.floor(Math.random() * (tempoMaximo - tempoMinimo + 1)) + tempoMinimo;
  const fimCronometro = Date.now() + tempoAleatorio * 1000;

  const intervalo = setInterval(atualizarCronometro, 1000);
  atualizarCronometro();
});

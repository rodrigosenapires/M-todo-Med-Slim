function gerarTempoAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function atualizarCronometro() {
    const diasDiv = document.getElementById('dias');
    const horasDiv = document.getElementById('horas');
    const minutosDiv = document.getElementById('minutos');
    const segundosDiv = document.getElementById('segundos');
  
    const tempoRestante = fimCronometro - Date.now();
  
    if (tempoRestante <= 0) {
      clearInterval(intervalo);
      segundosDiv.innerHTML = 'Promoção Encerrada!';
    } else {
      const diasRestantes = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
      const horasRestantes = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutosRestantes = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
      const segundosRestantes = Math.floor((tempoRestante % (1000 * 60)) / 1000);
  
      diasDiv.innerHTML = `${diasRestantes} Dias`;
      horasDiv.innerHTML = `${horasRestantes.toString().padStart(2, '0')} Horas`;
      minutosDiv.innerHTML = `${minutosRestantes.toString().padStart(2, '0')} Min`;
      segundosDiv.innerHTML = `${segundosRestantes.toString().padStart(2, '0')} Seg`;
    }
  }
  
  const tempoMinimo = 15 * 60 + 37; // 15 minutos e 37 segundos
  const tempoMaximo = 25 * 60 + 2;  // 25 minutos e 2 segundos
  
  const tempoAleatorio = gerarTempoAleatorio(tempoMinimo, tempoMaximo);
  const fimCronometro = Date.now() + tempoAleatorio * 1000;
  
  const intervalo = setInterval(atualizarCronometro, 1000);
  atualizarCronometro();
  
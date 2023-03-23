function gerarTempoAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatarTempo(tempo) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function atualizarCronometro() {
    const contador = document.getElementById('contador');
    const tempoRestante = fimCronometro - Date.now();

    if (tempoRestante <= 0) {
        clearInterval(intervalo);
        contador.innerHTML = 'Promoção Encerrada!';
    } else {
        const segundosRestantes = Math.floor(tempoRestante / 1000);
        contador.innerHTML = formatarTempo(segundosRestantes);
    }
}

const tempoMinimo = 15 * 60 + 37; // 15 minutos e 37 segundos
const tempoMaximo = 25 * 60 + 2;  // 25 minutos e 2 segundos

const tempoAleatorio = gerarTempoAleatorio(tempoMinimo, tempoMaximo);
const fimCronometro = Date.now() + tempoAleatorio * 1000;

const intervalo = setInterval(atualizarCronometro, 1000);
atualizarCronometro();

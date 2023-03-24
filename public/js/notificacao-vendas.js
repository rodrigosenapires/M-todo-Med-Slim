function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ultimaVenda = 0;
let contadorNotificacoes = 0;

function exibirNotificacao() {
    const notificacao = document.getElementById('notificacao');
    let vendas;
    
    if (contadorNotificacoes === 0) {
        vendas = numeroAleatorio(28, 32);
    } else if (contadorNotificacoes === 1) {
        vendas = numeroAleatorio(33, 39);
    } else if (contadorNotificacoes === 2) {
        vendas = numeroAleatorio(39, 43);
    } else if (contadorNotificacoes === 3) {
        vendas = numeroAleatorio(43, 53);
    } else {
        vendas = ultimaVenda + 7;
    }

    notificacao.textContent = `${vendas} já compraram esse curso hoje!`;
    notificacao.style.display = 'block';

    ultimaVenda = vendas;
    contadorNotificacoes++;

    setTimeout(() => {
        notificacao.style.display = 'none';
    }, 5000);
}

setInterval(exibirNotificacao, 1 * 60 * 1000);
exibirNotificacao();

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let ultimaVenda = 0;

function exibirNotificacao() {
    const notificacao = document.getElementById('notificacao');
    const vendas = numeroAleatorio(ultimaVenda + 1, 128);

    notificacao.textContent = `${vendas} já compraram esse curso hoje!`;
    notificacao.style.display = 'block';

    ultimaVenda = vendas;

    setTimeout(() => {
        notificacao.style.display = 'none';
    }, 5000);
}

setInterval(exibirNotificacao, 3 * 60 * 1000);
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function armazenarUltimaVenda(vendas) {
    const dataExpiracao = new Date().getTime() + 24 * 60 * 60 * 1000;
    const vendaData = {
        valor: vendas,
        expiracao: dataExpiracao
    };
    localStorage.setItem('ultimaVenda', JSON.stringify(vendaData));
}

function obterUltimaVenda() {
    const vendaData = JSON.parse(localStorage.getItem('ultimaVenda'));
    if (vendaData && vendaData.expiracao > new Date().getTime()) {
        return vendaData.valor;
    }
    return 0;
}

let ultimaVenda = obterUltimaVenda();
let contadorNotificacoes = ultimaVenda === 0 ? 0 : 4;

function exibirNotificacao() {
    const notificacao = document.getElementById('notificacao');
    let vendas;

    if (ultimaVenda !== 0) {
        vendas = ultimaVenda + 9;
        ultimaVenda = 0;
    } else if (contadorNotificacoes === 0) {
        vendas = numeroAleatorio(8, 11);
    } else if (contadorNotificacoes === 1) {
        vendas = numeroAleatorio(12, 15);
    } else if (contadorNotificacoes === 2) {
        vendas = numeroAleatorio(16, 19);
    } else if (contadorNotificacoes === 3) {
        vendas = numeroAleatorio(43, 53);
    } else {
        vendas = ultimaVenda + 7;
    }

    notificacao.textContent = `${vendas} já compraram esse curso hoje!`;
    notificacao.style.opacity = '1';

    ultimaVenda = vendas;
    contadorNotificacoes++;
    armazenarUltimaVenda(vendas);

    setTimeout(() => {
        notificacao.style.opacity = '0';
    }, 10000);
}

setInterval(exibirNotificacao, 2.5 * 60 * 1000);
exibirNotificacao();

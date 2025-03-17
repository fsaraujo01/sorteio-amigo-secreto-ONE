let amigos = [];
let contadorSorteio = 0; // Contador para rastrear a ordem do sorteio

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

    if (!nomeAmigo) {
        alert("Digite o nome do amigo");
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert("Este amigo já foi adicionado!");
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    // Verifica se há pelo menos 3 pessoas na lista (apenas no início)
    if (contadorSorteio === 0 && amigos.length < 3) {
        alert("Adicione pelo menos 3 amigos para começar o sorteio!");
        return;
    }

    // Verifica se todos já foram sorteados
    if (amigos.length === 0) {
        alert("Todos os amigos já foram sorteados! Reinicie o jogo.");
        return;
    }

    // Sorteia uma pessoa aleatória
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indiceSorteado];

    // Incrementa o contador de sorteio
    contadorSorteio++;

    // Exibe o resultado do sorteio
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `${contadorSorteio}º sorteado: ${sorteado}`;

    // Remove a pessoa sorteada da lista
    amigos.splice(indiceSorteado, 1);

    // Atualiza a lista de amigos na interface
    atualizarLista();

    // Verifica se todos foram sorteados (após exibir o último sorteado)
    if (amigos.length === 0) {
        setTimeout(() => {
            alert("Todos os amigos foram sorteados! O jogo será reiniciado.");
            contadorSorteio = 0; // Reinicia o contador
            resultado.innerHTML = ""; // Limpa o resultado
        }, 100); // Pequeno atraso para garantir que o último sorteado seja exibido antes do aviso
    }
}
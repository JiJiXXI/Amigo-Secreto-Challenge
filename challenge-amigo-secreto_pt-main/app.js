let amigos = [];

function adicionarAmigo() {
    
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    
    if (nome === "") {
        alert("Campo vazio. Por favor, insira um nome.");
        return;
    }

    
    amigos.push(nome);
    nomeInput.value = "";
    atualizarLista();
}

function atualizarLista() {
   
    const listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = "";

   
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaNomes.appendChild(li);
    });
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceAleatorio];

  
    document.getElementById('resultado').innerHTML = `O amigo secreto é: ${nomeSorteado}`;
}

function novoSorteio() {
   
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
}

// Centralização do botão "Novo Sorteio"
document.addEventListener("DOMContentLoaded", () => {
    const buttonContainer = document.querySelector(".button-container");
    if (buttonContainer) {
        buttonContainer.style.display = "flex";
        buttonContainer.style.flexDirection = "column";
        buttonContainer.style.alignItems = "center";
        buttonContainer.style.gap = "10px";
    }
});

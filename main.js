const titulo = document.getElementById('titulo');
const nome = document.getElementById('nome');
const ok = document.getElementById('ok');

function trocarTituloVermelho() {
    titulo.textContent = nome.value;
    titulo.className = "";  
    titulo.classList.add('vermelho');
}

function trocarTituloAzul() {
    titulo.textContent = nome.value;
    titulo.className = ""; 
    titulo.classList.add('azul');
}
function trocarTituloVerde() {
    titulo.textContent = nome.value;
    titulo.className = ""; 
    titulo.classList.add('verde');
}


vermelho.addEventListener('click', trocarTituloVermelho)
azul.addEventListener('click', trocarTituloAzul)
verde.addEventListener('click', trocarTituloVerde)
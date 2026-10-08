const missoes = document.querySelectorAll(".missao");
 
missoes.forEach(missao => {
 
    const botaoDetalhes = missao.querySelector(".botao-detalhes");
    const detalhes = missao.querySelector(".detalhes");
 
    detalhes.hidden = true;
 
    botaoDetalhes.addEventListener("click", () => {
 
        if (detalhes.hidden) {
            detalhes.hidden = false;
            botaoDetalhes.textContent = "Ocultar detalhes";
        } else {
            detalhes.hidden = true;
            botaoDetalhes.textContent = "Ver detalhes";
        }
 
    });
 
    const botaoSelecionar = missao.querySelector(".botao-selecionar");
 
    botaoSelecionar.addEventListener("click", () => {
        missao.classList.toggle("selecionada");
    });
 
});
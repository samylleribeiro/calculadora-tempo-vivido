function tempoVivido() {
    let dataInput = document.getElementById("dataNascimento").value;
    let resultado = document.getElementById("resultado");

    if (!dataInput) {
        resultado.innerHTML = "Por favor, insira uma data de nascimento válida ❌.";
        document.body.style.backgroundColor = "#ffebee";
        resultado.style.color = "#c62828";
        return;
    }

    let dataNascimento = new Date(dataInput + "T00:00:00");
    let dataAtual = new Date();

    if (isNaN(dataNascimento) || dataNascimento > dataAtual) {
        resultado.innerHTML = "Por favor, insira uma data de nascimento válida ❌.";
        document.body.style.backgroundColor = "#ffebee"; 
        resultado.style.color = "#c62828"; 
        return;
    }

    let diferenca = dataAtual - dataNascimento;

    let anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25)); // Usar 365.25 conta os anos bissextos!
    let meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    let dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Deixando a exibição bem limpa e organizada
    resultado.innerHTML = `🎉 Você já viveu:<br>
    <strong>${anos}</strong> anos, <strong>${meses}</strong> meses, <strong>${dias}</strong> dias,<br>
    <strong>${horas}</strong> horas, <strong>${minutos}</strong> minutos e <strong>${segundos}</strong> segundos!`;   
    document.body.style.backgroundColor = "";
    resultado.style.color = "";   
    confetti();
}

function limpar() {
    let resultado = document.getElementById("resultado");
    document.getElementById("dataNascimento").value = "";
    resultado.innerHTML = "";
    resultado.style.color = ""; 
    document.body.style.backgroundColor = "";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
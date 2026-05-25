function tempoVivido() {
    // pega os valores que o usuário digitou
    let dataInput = document.getElementById("dataNascimento").value;
    let resultado = document.getElementById("resultado");
    // verifica se foi informado a data de nascimento
    if (!dataInput) {
        resultado.innerHTML = "Por favor, insira uma data de nascimento válida ❌.";
     if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "#2d1a1a"; // Fundo vinho escuro
        resultado.style.color = "#ff8a80"; // 🌟 Vermelho bem clarinho/pastel (perfeito para ler no escuro!)
    } else {
        document.body.style.backgroundColor = "#ffebee"; // Fundo rosa claro
        resultado.style.color = "#c62828"; // Vermelho escuro
    } 
    
      document.querySelector('.container-resultado').style.display = 'block';
      document.getElementById('dataNascimento').focus(); // direciona para adicionar a data de nascimento
       return;
    }
    // volta para o estilo padrão quando não estiver erro
    document.body.style.backgroundColor = ""; 
    resultado.style.color = "";

    let dataNascimento = new Date(dataInput + "T00:00:00");
    let dataAtual = new Date();
    // verifica se a data de nascimento não e maior que a data atual
    if (isNaN(dataNascimento) || dataNascimento > dataAtual) {
        resultado.innerHTML = "Por favor, insira uma data de nascimento válida ❌.";
        if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "#2d1a1a"; // Fundo vinho escuro
        resultado.style.color = "#ff8a80"; // 🌟 Vermelho bem clarinho/pastel (perfeito para ler no escuro!)
    } else {
        document.body.style.backgroundColor = "#ffebee"; // Fundo rosa claro
        resultado.style.color = "#c62828"; // Vermelho escuro
    } 
    
      document.querySelector('.container-resultado').style.display = 'block';
      document.getElementById('dataNascimento').focus(); // direciona para adicionar a data de nascimento
        return;
    }
    // volta para o estilo padrão quando não estiver erro
    document.body.style.backgroundColor = ""; 
    resultado.style.color = "";


    let diferenca = dataAtual - dataNascimento;

    let anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25)); // Usar 365.25 conta os anos bissextos!
    let meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    let dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exibindo o resultado na tela
    resultado.innerHTML = `🎉 Você já viveu:<br>
    <strong>${anos}</strong> anos, <strong>${meses}</strong> meses, <strong>${dias}</strong> dias,<br>
    <strong>${horas}</strong> horas, <strong>${minutos}</strong> minutos e <strong>${segundos}</strong> segundos!`;   
    document.body.style.backgroundColor = "";
    resultado.style.color = "";  
    // Caixinha branca so quando tiver resultado
    document.querySelector('.container-resultado').style.display = 'block'; 
    confetti();
}

function limpar() {
    let resultado = document.getElementById("resultado");
    document.getElementById("dataNascimento").value = "";
    resultado.innerHTML = "";
    resultado.style.color = ""; 
    document.body.style.backgroundColor = "";
    document.getElementById('dataNascimento').focus();         // direciona para adicionar a data de nascimento
    document.querySelector('.container-resultado').style.display = 'none';    // esconde caixinha branca
}
function toggleDarkMode() {
    // lida e desliga o modo noturno
    document.body.classList.toggle("dark-mode");
      // 2. Pega o botão lá no HTML pelo ID dele
    let botao = document.getElementById("btn-noturno");   
    // 3. Verifica se o body ESTÁ com o modo noturno ativado
    if (document.body.classList.contains("dark-mode")) {
        botao.innerText = "☀️"; //  o botão vira Sol
    } else {
        botao.innerText = "🌙"; // o botão vira Lua
    }
}
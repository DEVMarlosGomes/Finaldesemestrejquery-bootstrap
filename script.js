$(document).ready(function () {
    // Adicionando uma animação simples para o carregamento dos projetos
    $(".projects-section").hide().fadeIn(1000);

    // Função para mostrar mensagem ao clicar no botão de um projeto
    $("button").click(function () {
        var buttonText = $(this).text();
        alert("Você clicou em: " + buttonText);
    });
});

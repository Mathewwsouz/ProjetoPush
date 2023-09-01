const dicionario = new DicionarioDeDiscursos();

// Adicione discursos ao dicion�rio
dicionario.adicionarDiscurso(1, "Deputado A", "Discurso sobre educa��o.", "2023-08-25", "Educa��o", ["educa��o", "ensino"]);
dicionario.adicionarDiscurso(2, "L�der B", "Debate sobre sa�de p�blica.", "2023-08-26", "Sa�de P�blica", ["sa�de", "debate"]);
dicionario.adicionarDiscurso(3, "Comiss�o C", "Discuss�o sobre economia.", "2023-08-27", "Economia", ["economia", "debate"]);

// Fun��o para exibir o conte�do do resumo com base no par�metro "id" da URL
function exibirConteudoDoResumo() {
    // Capturar o par�metro "id" da URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    // Verificar se o "id" � v�lido
    if (id !== null) {
        const discurso = dicionario.obterDiscursoPorId(parseInt(id)); // Converter para n�mero

        if (discurso !== null) {
            // Exibir o conte�do do discurso
            const resumoContent = document.getElementById("resumo-content");
            resumoContent.textContent = discurso.conteudo;
        } else {
            // Exibir uma mensagem de "Discurso n�o encontrado" se o "id" n�o corresponder a nenhum discurso
            const resumoContent = document.getElementById("resumo-content");
            resumoContent.textContent = "Discurso n�o encontrado.";
        }
    }
}

// Chamando a fun��o para exibir o conte�do do resumo ao carregar a p�gina
window.onload = exibirConteudoDoResumo;

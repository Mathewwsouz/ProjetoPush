const dicionario = new DicionarioDeDiscursos();

// Adicione discursos ao dicionário
dicionario.adicionarDiscurso(1, "Deputado A", "Discurso sobre educação.", "2023-08-25", "Educação", ["educação", "ensino"]);
dicionario.adicionarDiscurso(2, "Líder B", "Debate sobre saúde pública.", "2023-08-26", "Saúde Pública", ["saúde", "debate"]);
dicionario.adicionarDiscurso(3, "Comissão C", "Discussão sobre economia.", "2023-08-27", "Economia", ["economia", "debate"]);

// Função para exibir o conteúdo do resumo com base no parâmetro "id" da URL
function exibirConteudoDoResumo() {
    // Capturar o parâmetro "id" da URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    // Verificar se o "id" é válido
    if (id !== null) {
        const discurso = dicionario.obterDiscursoPorId(parseInt(id)); // Converter para número

        if (discurso !== null) {
            // Exibir o conteúdo do discurso
            const resumoContent = document.getElementById("resumo-content");
            resumoContent.textContent = discurso.conteudo;
        } else {
            // Exibir uma mensagem de "Discurso não encontrado" se o "id" não corresponder a nenhum discurso
            const resumoContent = document.getElementById("resumo-content");
            resumoContent.textContent = "Discurso não encontrado.";
        }
    }
}

// Chamando a função para exibir o conteúdo do resumo ao carregar a página
window.onload = exibirConteudoDoResumo;

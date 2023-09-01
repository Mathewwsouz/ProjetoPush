// Lista de discursos como objetos
const discursos = [
    {
        id: 1,
        autor: "Deputado A",
        titulo: "Discurso sobre educacao",
        data: "2023-08-25",
        tema: "Educação",
        resumo: "Este é um resumo do discurso sobre educação.",
        palavrasChave: ["educação", "ensino"],
    },
    {
        id: 2,
        autor: "Líder B",
        titulo: "Debate sobre saude publica",
        data: "2023-08-26",
        tema: "Saúde Pública",
        resumo: "Este é um resumo do debate sobre saúde pública.",
        palavrasChave: ["saúde", "debate"],
    },
    {
        id: 3,
        autor: "Comissão C",
        titulo: "Discussao sobre economia",
        data: "2023-08-27",
        tema: "Economia",
        resumo: "Este é um resumo da discussão sobre economia.",
        palavrasChave: ["economia", "debate"],
    },
    // ... outros discursos
];

// Função para preencher o sumário com os discursos e torná-los clicáveis
function preencherSumario() {
    const ul = document.getElementById("resumos");

    discursos.forEach((discurso, index) => {
        const li = document.createElement("li");
        const link = document.createElement("a"); // Criar um link

        // Configurar o link para redirecionar para a página "resumo.html" com um parâmetro "id"
        link.href = `resumo.html?id=${discurso.id}`;

        // Definir o texto do link como o título do discurso
        link.textContent = discurso.titulo;

        // Adicionar o link ao elemento de lista
        li.appendChild(link);

        // Adicionar o item da lista à lista não ordenada
        ul.appendChild(li);
    });
}

// Função para exibir os detalhes do discurso com base no parâmetro "id" da URL
function exibirDetalhesDoDiscurso() {
    // Capturar o parâmetro "id" da URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    // Verificar se o "id" é válido
    if (id !== null) {
        const discurso = obterDetalhesDoDiscursoPorId(parseInt(id)); // Substitua esta linha pela lógica para obter os detalhes do discurso

        if (discurso !== null) {
            // Obtenha referências aos elementos HTML para preenchimento
            const autorElement = document.getElementById("autor");
            const dataElement = document.getElementById("data");
            const temaElement = document.getElementById("tema");
            const resumoElement = document.getElementById("resumo");

            // Preencha os elementos HTML com as informações do discurso
            autorElement.textContent = discurso.autor;
            dataElement.textContent = discurso.data;
            temaElement.textContent = discurso.tema;
            resumoElement.textContent = discurso.resumo;
        } else {
            // Exibir uma mensagem de "Discurso não encontrado" se o "id" não corresponder a nenhum discurso
            const resumoContent = document.getElementById("discurso-content");
            resumoContent.textContent = "Discurso não encontrado.";
        }
    }
}

// Chamando a função para exibir os detalhes do discurso ao carregar a página
window.onload = exibirDetalhesDoDiscurso;

// Chamando a função para preencher o sumário ao carregar a página
window.onload = preencherSumario;




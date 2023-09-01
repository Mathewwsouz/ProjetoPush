// Lista de discursos como objetos
const discursos = [
    {
        id: 1,
        autor: "Deputado A",
        titulo: "Discurso sobre educacao",
        data: "2023-08-25",
        tema: "Educa��o",
        resumo: "Este � um resumo do discurso sobre educa��o.",
        palavrasChave: ["educa��o", "ensino"],
    },
    {
        id: 2,
        autor: "L�der B",
        titulo: "Debate sobre saude publica",
        data: "2023-08-26",
        tema: "Sa�de P�blica",
        resumo: "Este � um resumo do debate sobre sa�de p�blica.",
        palavrasChave: ["sa�de", "debate"],
    },
    {
        id: 3,
        autor: "Comiss�o C",
        titulo: "Discussao sobre economia",
        data: "2023-08-27",
        tema: "Economia",
        resumo: "Este � um resumo da discuss�o sobre economia.",
        palavrasChave: ["economia", "debate"],
    },
    // ... outros discursos
];

// Fun��o para preencher o sum�rio com os discursos e torn�-los clic�veis
function preencherSumario() {
    const ul = document.getElementById("resumos");

    discursos.forEach((discurso, index) => {
        const li = document.createElement("li");
        const link = document.createElement("a"); // Criar um link

        // Configurar o link para redirecionar para a p�gina "resumo.html" com um par�metro "id"
        link.href = `resumo.html?id=${discurso.id}`;

        // Definir o texto do link como o t�tulo do discurso
        link.textContent = discurso.titulo;

        // Adicionar o link ao elemento de lista
        li.appendChild(link);

        // Adicionar o item da lista � lista n�o ordenada
        ul.appendChild(li);
    });
}

// Fun��o para exibir os detalhes do discurso com base no par�metro "id" da URL
function exibirDetalhesDoDiscurso() {
    // Capturar o par�metro "id" da URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    // Verificar se o "id" � v�lido
    if (id !== null) {
        const discurso = obterDetalhesDoDiscursoPorId(parseInt(id)); // Substitua esta linha pela l�gica para obter os detalhes do discurso

        if (discurso !== null) {
            // Obtenha refer�ncias aos elementos HTML para preenchimento
            const autorElement = document.getElementById("autor");
            const dataElement = document.getElementById("data");
            const temaElement = document.getElementById("tema");
            const resumoElement = document.getElementById("resumo");

            // Preencha os elementos HTML com as informa��es do discurso
            autorElement.textContent = discurso.autor;
            dataElement.textContent = discurso.data;
            temaElement.textContent = discurso.tema;
            resumoElement.textContent = discurso.resumo;
        } else {
            // Exibir uma mensagem de "Discurso n�o encontrado" se o "id" n�o corresponder a nenhum discurso
            const resumoContent = document.getElementById("discurso-content");
            resumoContent.textContent = "Discurso n�o encontrado.";
        }
    }
}

// Chamando a fun��o para exibir os detalhes do discurso ao carregar a p�gina
window.onload = exibirDetalhesDoDiscurso;

// Chamando a fun��o para preencher o sum�rio ao carregar a p�gina
window.onload = preencherSumario;




class Discurso {
    constructor(id, orador, conteudo, dataRealizacao, sumario, indexacao) {
        this.id = id;
        this.orador = orador;
        this.conteudo = conteudo;
        this.dataRealizacao = dataRealizacao;
        this.sumario = sumario;
        this.indexacao = indexacao;
    }
}

class DicionarioDeDiscursos {
    constructor() {
        this.discursos = {};
    }

    adicionarDiscurso(id, orador, conteudo, dataRealizacao, sumario, indexacao) {
        const novoDiscurso = new Discurso(id, orador, conteudo, dataRealizacao, sumario, indexacao);
        this.discursos[id] = novoDiscurso;
    }

    obterDiscursoPorId(id) {
        if (this.discursos.hasOwnProperty(id)) {
            return this.discursos[id];
        } else {
            return null;
        }
    }

    listarTodosOsDiscursos() {
        return Object.values(this.discursos);
    }
}


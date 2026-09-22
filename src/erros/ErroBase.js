class ErroBase extends Error {
    constructor(mensagem = "Erro interno do servidor", status) {
        super();
        this.message = mensagem;
        this.status = status;
    }

    enviarResposta(res) {
        res.status(this.status).send({
            mensagem: this.message
        });
    }
}

export default ErroBase;
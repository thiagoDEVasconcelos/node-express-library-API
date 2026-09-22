function manipulaErros(err, req, res, next) {
    if (err instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res);
    } else if (err instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(err).enviarResposta(res);
    } else if (err instanceof NaoEncontrado) {
        new NaoEncontrado().enviarResposta(res);
    } else {
        new ErroBase().enviarResposta(res);
    }
}

export default manipulaErros;
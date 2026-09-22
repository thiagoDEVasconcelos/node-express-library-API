function manipulaErros(err, req, res, next) {
    if (err instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos." });
    } else if (err instanceof mongoose.Error.ValidationError) {
            new ErroValidacao(err).enviarResposta(res);
    } else {
        new ErroBase().enviarResposta(res);
    }
}

export default manipulaErros;
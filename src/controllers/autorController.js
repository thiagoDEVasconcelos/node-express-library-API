import { Autor } from "../models/index.js";

class AutorController {
    static async listarAutores(req, res) {
        try {
            const autores = await Autor.find();
            res.status(200).json(autores);
        } catch (erro) {
            next(erro);
        }
    }

    static listarAutorPorId  = async (req, res, next) => {
        try {
        const id =  req.params.id;
            const autoresResultado = await Autor.findById(id);
            if (autoresResultado !== null) {
                res.status(200).send(autoresResultado);
            } else {
                res.status(404).send({ message: "Id do Autor não localizado." });
            }
        } catch (erro) {
            next(erro);
        }
    };

    static async criarAutor(req, res) {
        try {
            const novoAutor = await Autor.create(req.body);
            res.status(201).json({ message: "Autor criado com sucesso!", autor: novoAutor });
        } catch (erro) {
            next(erro);
        }
    }

    static atualizarAutor = async (req, res, next) => {
        try {
        const id = req.params.id;

        const autorResultado = await Autor.findByIdAndUpdate(id, {$set: req.body});

        if (autorResultado !== null) {
            res.status(200).send({message: "Autor atualizado com sucesso"});
        } else {
            next(new NaoEncontrado("Id do Autor não localizado."));
        }

        } catch (erro) {
        next(erro);
        }
    };

    static excluirAutor = async (req, res, next) => {
        try {
        const id = req.params.id;

        const autorResultado = await Autor.findByIdAndDelete(id);

        if (autorResultado !== null) {
            res.status(200).send({message: "Autor removido com sucesso"});
        } else {
            next(new NaoEncontrado("Id do Autor não localizado."));
        }
        } catch (erro) {
        next(erro);
        }
    };
}

export default AutorController;
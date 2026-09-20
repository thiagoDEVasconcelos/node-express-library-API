import { Autor } from "../models/Autor";

class AutorController {
    static async listarAutores(req, res) {
        try {
            const autores = await Autor.find();
            res.status(200).json(autores);
        } catch (error) {
            next(error);
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
        } catch (error) {
            next(error);
        }
    }

    static async atualizarAutor(req, res) {
        const id = req.params.id;
        try {
            const autorAtualizado = await Autor.findByIdAndUpdate(id, req.body, { new: true });
            if (autorAtualizado) {
                res.status(200).json(autorAtualizado);
            } else {
                res.status(404).json({ message: "Autor não encontrado" });
            }
        } catch (error) {
            next(error);
        }
    }

    static async excluirAutor(req, res) {
        const id = req.params.id;
        try {
            const autorExcluido = await Autor.findByIdAndDelete(id);
            if (autorExcluido) {
                res.status(200).json({ message: "Autor excluído com sucesso!" });
            } else {
                res.status(404).json({ message: "Autor não encontrado" });
            }
        } catch (error) {
            next(error);
        }
    }
}

export default AutorController;
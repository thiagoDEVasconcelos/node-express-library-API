import { Autor } from "../models/Autor";

class AutorController {
    static async listarAutores(req, res) {
        try {
            const autores = await Autor.find();
            res.status(200).json(autores);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static listarAutorPorId  = async (req, res) => {
        try {
        const id =  req.params.id;
            const autoresResultado = await Autor.findById(id);
            if (autoresResultado !== null) {
                res.status(200).send(autoresResultado);
            } else {
                res.status(404).send({ message: "Id do Autor não localizado." });
            }
        } catch (erro) {
            if (erro instanceof mongoose.Error.CastError) {
                res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos."});
            } else {
                res.status(500).send({message: "Erro interno de servidor."});
            }
        }
    };

    static async criarAutor(req, res) {
        try {
            const novoAutor = await Autor.create(req.body);
            res.status(201).json({ message: "Autor criado com sucesso!", autor: novoAutor });
        } catch (error) {
            res.status(500).json({ message: error.message });
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
            res.status(500).json({ message: error.message });
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
            res.status(500).json({ message: error.message });
        }
    }
}

export default AutorController;
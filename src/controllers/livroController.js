import { Autor } from '../models/Autor.js';
import Livro from '../models/Livro.js';

class LivroController {
    static async listarLivros(req, res, next) {
        try{
            const listaLivros = await Livro.find();
            res.status(200).json(listaLivros);
        } catch (erro) {
            next(erro);
        }   
    }

    static listarLivroPorId = async (req, res, next) => {
        try {
        const id = req.params.id;

        const livroResultado = await Livro.findById(id)
            .populate("autor", "nome")
            .exec();

        if (livroResultado !== null) {
            res.status(200).send(livroResultado);
        } else {
            next(new NaoEncontrado("Id do livro não localizado."));
        }
        } catch (erro) {
        next(erro);
        }
    };

    static async criarLivro(req, res, next) {
        try {
            const novoLivro = req.body;
            const autorEncontrado = await Autor.findById(novoLivro.autor.id);
            const livroCompleto = { ...novoLivro, autor: autorEncontrado };
            const livroCriado = await Livro.create(livroCompleto);
            res.status(201).json({ message: "Livro criado com sucesso!", livro: livroCriado });
        } catch (erro) {
            next(erro);
        }
    }

    static atualizarLivro = async (req, res, next) => {
        try {
        const id = req.params.id;

        const livroResultado = await Livro.findByIdAndUpdate(id, {$set: req.body});

        if (livroResultado !== null) {
            res.status(200).send({message: "Livro atualizado com sucesso"});
        } else {
            next(new NaoEncontrado("Id do livro não localizado."));
        }
        } catch (erro) {
        next(erro);
        }
    };

    static excluirLivro = async (req, res, next) => {
        try {
        const id = req.params.id;

        const livroResultado = await Livro.findByIdAndDelete(id);

        if (livroResultado !== null) {
            res.status(200).send({message: "Livro removido com sucesso"});
        } else {
            next(new NaoEncontrado("Id do livro não localizado."));
        }
        } catch (erro) {
        next(erro);
        }
    };

    static async listarLivrosPorEditora(req, res, next) {
        const editora = req.query.editora;
        try {
            const livros = await Livro.find({ editora: editora });
            res.status(200).json(livros);
        } catch (erro) {
            next(erro);
        }
    }
}

export default LivroController;
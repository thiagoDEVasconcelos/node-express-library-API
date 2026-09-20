import { Autor } from '../models/Autor.js';
import Livro from '../models/Livro.js';

class LivroController {
    static async listarLivros(req, res, next) {
        try{
            const listaLivros = await Livro.find();
            res.status(200).json(listaLivros);
        } catch (error) {
            next(error);
        }   
    }

    static async listarLivroPorId(req, res, next) {
        const id = req.params.id;
        try {
            const livro = await Livro.findById(id);
            if (livro) {
                res.status(200).json(livro);
            } else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        } catch (error) {
            next(error);
        }
    }

    static async criarLivro(req, res, next) {
        try {
            const novoLivro = req.body;
            const autorEncontrado = await Autor.findById(novoLivro.autor.id);
            const livroCompleto = { ...novoLivro, autor: autorEncontrado };
            const livroCriado = await Livro.create(livroCompleto);
            res.status(201).json({ message: "Livro criado com sucesso!", livro: livroCriado });
        } catch (error) {
            next(error);
        }
    }

    static async atualizarLivro(req, res, next) {
        const id = req.params.id;
        try {
            const livroAtualizado = await Livro.findByIdAndUpdate(id, req.body, { new: true }); 
            if (livroAtualizado) {
                res.status(200).json(livroAtualizado);
            } else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        } catch (error) {
            next(error);
        }
    }

    static async excluirLivro(req, res, next) {
        const id = req.params.id;
        try {
            const livroExcluido = await Livro.findByIdAndDelete(id);
            if (livroExcluido) {
                res.status(200).json({ message: "Livro excluído com sucesso!" });
            } else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        } catch (error) {
            next(error);
        }
    }

    static async listarLivrosPorEditora(req, res, next) {
        const editora = req.query.editora;
        try {
            const livros = await Livro.find({ editora: editora });
            res.status(200).json(livros);
        } catch (error) {
            next(error);
        }
    }
}

export default LivroController;
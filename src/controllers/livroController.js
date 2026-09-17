import Livro from '../models/Livro.js';

class LivroController {
    static async listarLivros(req, res) {
        try{
            const listaLivros = await Livro.find();
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: "Falha ao listar livros" });
        }   
    }

    static async listarLivroPorId(req, res) {
        const id = req.params.id;
        try {
            const livro = await Livro.findById(id);
            if (livro) {
                res.status(200).json(livro);
            } else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: "Falha ao buscar livro" });
        }
    }

    static async criarLivro(req, res) {
        try {
            const novoLivro = await Livro.create(req.body);
            res.status(201).json({"message": "Livro criado com sucesso!", livro: novoLivro});
        } catch (error) {
            res.status(500).json({ message: "Falha ao cadastrar livro" });
        }
    }

    static async atualizarLivro(req, res) {
        const id = req.params.id;
        try {
            const livroAtualizado = await Livro.findByIdAndUpdate(id, req.body, { new: true }); 
            if (livroAtualizado) {
                res.status(200).json(livroAtualizado);
            } else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: "Falha ao atualizar livro" });
        }
    }

    static async excluirLivro(req, res) {
        const id = req.params.id;
        try {
            const livroExcluido = await Livro.findByIdAndDelete(id);
            if (livroExcluido) {
                res.status(200).json({ message: "Livro excluído com sucesso!" });
            } else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: "Falha ao excluir livro" });
        }
    }
}

export default LivroController;
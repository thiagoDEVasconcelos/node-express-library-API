import Livro from '../models/Livro.js';

class LivroController {
    static async listarLivros(req, res) {
        const listaLivros = await Livro.find();
        res.status(200).json(listaLivros);
    }

    static async criarLivro(req, res) {
        try {
            const novoLivro = await Livro.create(req.body);
            res.status(201).json({"message": "Livro criado com sucesso!", livro: novoLivro});
        } catch (error) {
            res.status(500).json({ message: "Falha ao cadastrar livro" });
        }
    }
}

export default LivroController;
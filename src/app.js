import express from 'express';
import dbConnect from './config/dbConnect.js';
import Livro from './models/Livro.js';

const conexao = await dbConnect();

conexao.on("error", (err) => console.error("Erro na conexão com o banco de dados: " + err));

conexao.once("open", () => console.log("Conexão com o banco de dados realizada com sucesso!"));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.get('/livros', async (req, res) => {
  const listaLivros = await Livro.find();
  res.status(200).json(listaLivros);
});

app.get('/livros/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const livro = await Livro.findById(id);
  res.status(200).json(livro);
});

app.post('/livros', async (req, res) => {
  const livro = await Livro.create(req.body);
  console.log("entrei na rota livros usando o metodo post");
  res.status(201).json(livro);
})

app.put('/livros/:id', async (req, res) => {
  const id = Number(req.params.id);
  const livro = await Livro.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(livro);
});

app.delete('/livros/:id', async (req, res) => {
  const id = Number(req.params.id);
  const livro = await Livro.findByIdAndRemove(id);
  res.status(200).json(livro);
});

export default app;

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}
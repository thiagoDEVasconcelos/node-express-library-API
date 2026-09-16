import express from 'express';

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        título: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
    }
];

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = buscaLivro(id);
  res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  console.log("entrei na rota livros usando o metodo post");
  res.status(201).send('Livro cadastrado com sucesso!');
})

app.put('/livros/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = buscaLivro(id);
  livros[index] = req.body;
  res.status(200).send('Livro atualizado com sucesso!');
});

app.delete('/livros/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = buscaLivro(id);
  livros.splice(index, 1);
  res.status(200).send('Livro removido com sucesso!');
});

export default app;

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}
import express from 'express';
import dbConnect from './config/dbConnect.js';
import routes from './routes/index.js';
import manipulaErros from './middlewares/manipulaErros.js';

const conexao = await dbConnect();

conexao.on("error", (err) => console.error("Erro na conexão com o banco de dados: " + err));

conexao.once("open", () => console.log("Conexão com o banco de dados realizada com sucesso!"));

const app = express();
routes(app);
app.use(express.json());
app.use(manipulaErros);

export default app;
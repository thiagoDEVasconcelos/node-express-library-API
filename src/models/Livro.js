import mongoose, { version } from "mongoose";
import { autorSchema } from "./Autor";

const livroSchema = new mongoose.Schema({
    id: {
        type: String, 
    },
    titulo: {
        type: String,
        required: [true, "O título do livro é obrigatório"]
    },
    editora: {
        type: String,
        required: [true, "A editora do livro é obrigatória"]
    },
    numeroDePaginas: {
        type: Number,
    },
    autor: {
        type: autorSchema,
        required: [true, "O autor do livro é obrigatório"]
    }
}, { versionKey: false } );

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;

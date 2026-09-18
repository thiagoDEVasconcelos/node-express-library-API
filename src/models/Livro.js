import mongoose, { version } from "mongoose";
import { autorSchema } from "./Autor";

const livroSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true    
    },
    titulo: {
        type: String,
        required: true
    },
    editora: {
        type: String,
    },
    paginas: {
        type: Number,
    },
    preco: {
        type: Number,
    },
    autor: autorSchema
}, { versionKey: false } );

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;

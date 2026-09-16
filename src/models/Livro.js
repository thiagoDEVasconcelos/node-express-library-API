import mongoose from "mongoose";

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
    autor: {
        type: String,
        required: true
    },
    editora: {
        type: String,
        required: true
    },
    anoPublicacao: {
        type: Number,
        required: true
    },
    preco: {
        type: Number,
        required: true
    }
});

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;

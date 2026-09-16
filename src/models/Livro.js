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
    editora: {
        type: String,
    },
    paginas: {
        type: Number,
    },
    preco: {
        type: Number,
    }
});

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;

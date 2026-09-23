import mongoose from "mongoose";
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
        required: [true, "A editora do livro é obrigatória"],
        enum: {
            values: ["Packt", "Oracle", "Casa do código"],
            message: "A editora {VALUE} não é válida"
        }
    },
    numeroDePaginas: {
        type: Number,
        validate: {
            validator: (value) => {
                return value >= 10 && value <= 5000;
            },
            message: "O número de páginas deve ser entre 10 e 5000"
        }
    },
    autor: {
        type: autorSchema,
        required: [true, "O autor do livro é obrigatório"]
    }
}, { versionKey: false } );

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;

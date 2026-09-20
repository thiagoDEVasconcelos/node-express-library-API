import Schema from 'mongoose';

const autorSchema = new Schema({
    id: {
        type: String,
    },
    nome: {
        type: String,
        required: [true, "O nome do autor é obrigatório"]
    },
    nacionalidade: {
        type: String,
    }
}, { versionKey: false });

const Autor = mongoose.model("Autor", autorSchema);

export { Autor, autorSchema };
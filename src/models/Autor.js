import Schema from 'mongoose';

const autorSchema = new Schema({
    id: {
        type: ObjectId,
    },
    nome: {
        type: String,
        required: true
    },
    nacionalidade: {
        type: String,
    }
}, { versionKey: false });

const Autor = mongoose.model("Autor", autorSchema);

export { Autor, autorSchema };
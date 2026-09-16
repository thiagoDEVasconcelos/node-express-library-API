import mongoose from "mongoose";

async function dbConnect() {
    await mongoose.connect("mongodb+srv://admin:admin123@cluster0.uvmwiwx.mongodb.net/livraria?retryWrites=true&w=majority");
    return mongoose.connection;
}

export default dbConnect;
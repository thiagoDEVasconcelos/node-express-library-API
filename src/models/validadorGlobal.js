import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
    validator: (value) => value !== "",
    message: "O campo em branco foi fornecido"
});
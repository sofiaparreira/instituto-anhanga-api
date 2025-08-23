import { model, Schema } from "mongoose";


const userSchema = new Schema (
    {
        email: {type: String},
        senha: {type: String}
    }
)

export const UserModel = model("user", userSchema)
import { model, Schema } from "mongoose";

const contatoSchema = new Schema (
    {
        nome: {type: String},
        email: {type: String},
        telefone: {type: String},
        mensagem: {type:String}
    },
    {
        timestamps:true
    }
)
export const ContatoModel = model("contato", contatoSchema)
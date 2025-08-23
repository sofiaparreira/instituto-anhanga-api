import {model, Schema} from "mongoose";

const petSchema = new Schema (
    {
        nome: {type: String},
        tipo: {type: String},
        sexo: {type: String},
        idade: {type: Number},
        idadeUnidade: {type: String},
        porte: {type: String},
        isCastrado: {type: Boolean},
        isVacinado: {type: Boolean},
        isVermifugado: {type: Boolean},
        descricao: {type: String},
        fotoUrl : {type: String}
    },
    {
        timestamps: true
    }
)

export const PetModel = model("Pet", petSchema);
